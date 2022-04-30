// react
import React, { useEffect, useMemo } from 'react';
// third-party
import classNames from 'classnames';
import queryString from 'query-string';
import { useIntl } from 'react-intl';
// application
import BlockHeader from '~/components/blocks/BlockHeader';
import BlockSpace from '~/components/blocks/BlockSpace';
import ProductsView from '~/components/shop/ProductsView';
import ShopSidebar from '~/components/shop/ShopSidebar';
import url from '~/services/url';
import { baseUrl, getCategoryParents } from '~/services/utils';
import { buildQuery } from '~/store/shop/shopHelpers';
import { CurrentVehicleScopeProvider } from '~/services/current-vehicle';
import { ILink } from '~/interfaces/link';
import { removePrefix } from '~/services/i18n/utils';
import { SidebarProvider } from '~/services/sidebar';
import { useAppRouter } from '~/services/router';
import { useShop } from '~/store/shop/shopHooks';
import {
    IShopPageGridLayout,
    IShopPageLayout,
    IShopPageOffCanvasSidebar,
    IShopPageSidebarPosition,
} from '~/interfaces/pages';

interface Props {
    layout: IShopPageLayout;
    gridLayout: IShopPageGridLayout;
    sidebarPosition?: IShopPageSidebarPosition;
    title?: String;
    description?: String;
}

function ShopPageShop(props: Props) {
    const {
        layout,
        gridLayout,
        sidebarPosition = 'start',
        title,
        description
    } = props;
    const intl = useIntl();
    const router = useAppRouter();
    const shopState = useShop();

    // Replace current url.
    useEffect(() => {

        const query = buildQuery(shopState.options, shopState.filters);
        const href = queryString.stringifyUrl({
            ...queryString.parseUrl(router.asPath),
            query: queryString.parse(query),
        }, { encode: false });

        router.replace({
            pathname: router.pathname,
            query: {
                slug: router.query.slug,
            },
        }, removePrefix(href), {
            shallow: true,
        }).then(() => {
            // This is necessary for the "History API" to work.
            window.history.replaceState(
                {
                    ...window.history.state,
                    options: {
                        ...window.history.state.options,
                        shallow: false,
                    },
                },
                '',
                baseUrl(href),
            );
        });
    }, [shopState.options, shopState.filters]);

    const hasSidebar = ['grid-3-sidebar', 'grid-4-sidebar'].includes(gridLayout);
    const offCanvasSidebar: IShopPageOffCanvasSidebar = [
        'grid-4-full',
        'grid-5-full',
        'grid-6-full',
    ].includes(gridLayout) ? 'always' : 'mobile';

    const pageHeader = useMemo(() => {
        let pageTitle = title ? title : intl.formatMessage({ id: 'HEADER_SHOP' });
        const breadcrumb: ILink[] = [
            { title: intl.formatMessage({ id: 'LINK_HOME' }), url: url.home() },
            { title: intl.formatMessage({ id: 'LINK_SHOP' }), url: url.shop() },
        ];

        if (shopState.category) {
            getCategoryParents(shopState.category).forEach((parent) => {
                breadcrumb.push({ title: parent.name, url: url.category(parent) });
            });

            breadcrumb.push({ title: shopState.category.name, url: url.category(shopState.category) });

            pageTitle = shopState.category.name;
        }

        return <BlockHeader pageTitle={pageTitle} breadcrumb={breadcrumb} />;
    }, [intl, shopState.category]);

    if (shopState.categoryIsLoading || (shopState.productsListIsLoading && !shopState.productsList)) {
        return null;
    }

    const sidebar = (
        <ShopSidebar offcanvas={offCanvasSidebar} />
    );

    const blockSplitClasses = classNames('block-split', {
        'block-split--has-sidebar': hasSidebar,
    });

    return (
        <React.Fragment>
            <SidebarProvider>
                <CurrentVehicleScopeProvider>
                    {pageHeader}

                    <div className={blockSplitClasses}>
                        {offCanvasSidebar === 'always' && sidebar}

                        <div className="container">
                            <div className="block-split__row row no-gutters">
                                {sidebarPosition === 'start' && hasSidebar && (
                                    <div className="block-split__item block-split__item-sidebar col-auto">
                                        {sidebar}
                                    </div>
                                )}

                                <div className="block-split__item block-split__item-content col-auto flex-grow-1">
                                    <div className="block">
                                        <ProductsView
                                            layout={layout}
                                            gridLayout={gridLayout}
                                            offCanvasSidebar={offCanvasSidebar}
                                        />
                                    </div>
                                </div>

                                {sidebarPosition === 'end' && hasSidebar && (
                                    <div className="block-split__item block-split__item-sidebar col-auto">
                                        {sidebar}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="block-header block-header--has-title"  >
                        <div className="container">
                            <div className="block-header__body">
                                {description && <h4 className="block-header__new"  >{description}</h4>}
                            </div>
                        </div>
                    </div>
                    <BlockSpace layout="before-footer" />
                </CurrentVehicleScopeProvider>
            </SidebarProvider>
        </React.Fragment>
    );
}

export default ShopPageShop;
