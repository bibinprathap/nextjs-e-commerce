// react
import React, { useEffect, useMemo, useState } from 'react';
// third-party
import classNames from 'classnames';
import { FormattedMessage, useIntl } from 'react-intl';
// application
import AppImage from '~/components/shared/AppImage';
import AppLink from '~/components/shared/AppLink';
import BlockBrands from '~/components/blocks/BlockBrands';
import BlockHeader from '~/components/blocks/BlockHeader';
import BlockProductsCarousel from '~/components/blocks/BlockProductsCarousel';
import BlockSpace from '~/components/blocks/BlockSpace';
import PageTitle from '~/components/shared/PageTitle';
import url from '~/services/url';
import WidgetCategoriesList from '~/components/widgets/WidgetCategoriesList';
import WidgetProducts from '~/components/widgets/WidgetProducts';
import { getCategoryPath } from '~/services/utils';
import { IBrand } from '~/interfaces/brand';
import { IShopCategoryPageLayout, IShopCategoryPageSidebarPosition } from '~/interfaces/pages';
import { IProduct } from '~/interfaces/product';
import { IShopCategory } from '~/interfaces/category';
import { shopApi } from '~/api';
import { useDeferredData } from '~/services/hooks';

interface Props {
    layout: IShopCategoryPageLayout;
    sidebarPosition?: IShopCategoryPageSidebarPosition;
    category?: IShopCategory | null;
    subcategories?: IShopCategory[];
}

function ShopPageCategory(props: Props) {
    const intl = useIntl();
    const { layout, sidebarPosition = 'start', category } = props;
    let { subcategories } = props;
    const hasSidebar = layout.endsWith('-sidebar');
    const [brands, setBrands] = useState<IBrand[]>([]);
    const [latestProducts, setLatestProducts] = useState<IProduct[]>([]);

    if (category && subcategories === undefined) {
        subcategories = category.children || [];
    }

    subcategories = subcategories || [];

    const bestsellers = useDeferredData(() => (
        shopApi.getPopularProducts(null, 8)
    ), []);

    const featured = useDeferredData(() => (
        shopApi.getFeaturedProducts(null, 8)
    ), []);

    useEffect(() => {
        let canceled = false;

        shopApi.getBrands({ limit: (hasSidebar ? 7 : 8) * 2 }).then((result) => {
            if (canceled) {
                return;
            }

            setBrands(result);
        });

        if (hasSidebar) {
            shopApi.getLatestProducts(5).then((result) => {
                if (canceled) {
                    return;
                }

                setLatestProducts(result);
            });
        } else {
            setLatestProducts([]);
        }

        return () => {
            canceled = true;
        };
    }, [hasSidebar]);

    const pageTitle = useMemo(() => (
        category ? category.name : intl.formatMessage({ id: 'HEADER_SHOP' })
    ), [category, intl]);

    const breadcrumb = useMemo(() => [
        { title: intl.formatMessage({ id: 'LINK_HOME' }), url: url.home() },
        { title: intl.formatMessage({ id: 'LINK_SHOP' }), url: url.shop() },
        ...getCategoryPath(category).map((x) => ({ title: x.name, url: url.category(x) })),
    ], [category, intl]);

    let sidebar = null;

    if (hasSidebar) {
        sidebar = (
            <div className="block-split__item block-split__item-sidebar col-auto">
                {subcategories.length > 0 && (
                    <WidgetCategoriesList
                        categories={subcategories}
                    />
                )}

                <WidgetProducts
                    widgetTitle={intl.formatMessage({ id: 'HEADER_LATEST_PRODUCTS' })}
                    products={latestProducts}
                />
            </div>
        );
    }

    const subcategoriesTemplate = subcategories.length === 0 ? null : (
        <React.Fragment>
            <div className="block">
                <div className={`categories-list categories-list--layout--${layout}`}>
                    <ul className="categories-list__body">
                        {subcategories.map((subcategory) => (
                            <React.Fragment key={subcategory.id}>
                                <li
                                    className={classNames('categories-list__item', {
                                        'categories-list__item--has-image': subcategory.image,
                                    })}
                                >
                                    <AppLink href={url.category(subcategory)}>
                                        {subcategory.image && (
                                            <div className="image image--type--category">
                                                <div className="image__body">
                                                    <AppImage
                                                        className="image__tag"
                                                        src={subcategory.image}
                                                        alt={subcategory.name}
                                                    />
                                                </div>
                                            </div>
                                        )}
                                        <div className="categories-list__item-name">
                                            {subcategory.name}
                                        </div>
                                    </AppLink>
                                    {typeof subcategory.items === 'number' && (
                                        <div className="categories-list__item-products">
                                            <FormattedMessage
                                                id="TEXT_PRODUCTS_COUNT"
                                                values={{ count: subcategory.items }}
                                            />
                                        </div>
                                    )}
                                </li>
                                <li className="categories-list__divider" />
                            </React.Fragment>
                        ))}
                    </ul>
                </div>
            </div>

            <BlockSpace layout="divider-nl" />
        </React.Fragment>
    );

    return (
        <React.Fragment>
            <PageTitle>{pageTitle}</PageTitle>

            <BlockHeader
                pageTitle={pageTitle}
                breadcrumb={breadcrumb}
            />

            <div
                className={classNames('block', 'block-split', {
                    'block-split--has-sidebar': hasSidebar,
                })}
            >
                <div className="container">
                    <div className="block-split__row row no-gutters">
                        {hasSidebar && sidebarPosition === 'start' && sidebar}

                        <div className="block-split__item block-split__item-content col-auto flex-grow-1">
                            {subcategoriesTemplate}

                            <BlockProductsCarousel
                                blockTitle={intl.formatMessage({ id: 'HEADER_BESTSELLERS' })}
                                layout={hasSidebar ? 'grid-4-sidebar' : 'grid-5'}
                                products={bestsellers.data}
                                loading={bestsellers.isLoading}
                            />

                            <BlockSpace layout="divider-nl" />

                            <BlockProductsCarousel
                                blockTitle={intl.formatMessage({ id: 'HEADER_FEATURED_PRODUCTS' })}
                                layout={hasSidebar ? 'horizontal-sidebar' : 'horizontal'}
                                products={featured.data}
                                loading={featured.isLoading}
                                rows={2}
                            />

                            <BlockSpace layout="divider-nl" />

                            <BlockBrands
                                layout={hasSidebar ? 'columns-7-sidebar' : 'columns-8-full'}
                                brands={brands}
                            />
                        </div>

                        {hasSidebar && sidebarPosition === 'end' && sidebar}
                    </div>
                </div>
            </div>

            <BlockSpace layout="before-footer" />
        </React.Fragment>
    );
}

export default ShopPageCategory;
