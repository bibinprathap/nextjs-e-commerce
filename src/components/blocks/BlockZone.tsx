// react
import React, {
    useEffect,
    useMemo,
    useRef,
    useState,
} from 'react';
// third-party
import classNames from 'classnames';
import Slick from 'react-slick';
import { FormattedMessage, useIntl } from 'react-intl';
// application
import AppImage from '~/components/shared/AppImage';
import AppLink from '~/components/shared/AppLink';
import AppSlick, { ISlickProps } from '~/components/shared/AppSlick';
import Arrow from '~/components/shared/Arrow';
import ProductCard, { IProductCardElement } from '~/components/shared/ProductCard';
import url from '~/services/url';
import { baseUrl } from '~/services/utils';
import { IProduct } from '~/interfaces/product';
import { IShopCategory } from '~/interfaces/category';
import { shopApi } from '~/api';

export interface IBlockZoneTab {
    name: string;
    source: () => Promise<IProduct[]>;
}

interface Props {
    image: string;
    blockZoneIdx: number;
    mobileImage: string;
    categorySlug: string;
}

const slickSettings: ISlickProps = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 400,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
        { breakpoint: 1399, settings: { slidesToShow: 3, slidesToScroll: 3 } },
        { breakpoint: 991, settings: { slidesToShow: 2, slidesToScroll: 2 } },
        { breakpoint: 459, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
};

const excludeElements: IProductCardElement[] = ['features', 'list-buttons'];

function BlockZone(props: Props) {
    const intl = useIntl();
    const { image, mobileImage, categorySlug, blockZoneIdx } = props;
    const slickRef = useRef<Slick>(null);
    const cancelRequestRef = useRef(() => { });
    const [category, setCategory] = useState<IShopCategory | null>(null);
    const [products, setProducts] = useState<IProduct[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [currentTab, setCurrentTab] = useState<IBlockZoneTab | null>(null);
    const subs = category?.children || [];

    const handleNextClick = () => {
        if (slickRef.current) {
            slickRef.current.slickNext();
        }
    };

    const handlePrevClick = () => {
        if (slickRef.current) {
            slickRef.current.slickPrev();
        }
    };

    const tabs: IBlockZoneTab[] = useMemo(() => [
        {
            name: intl.formatMessage({ id: 'TEXT_TAB_FEATURED' }),
            source: () => shopApi.getFeaturedProducts(categorySlug, 6),
        },
        {
            name: intl.formatMessage({ id: 'TEXT_TAB_BESTSELLERS' }),
            source: () => shopApi.getPopularProducts(categorySlug, 6),
        },
        {
            name: intl.formatMessage({ id: 'TEXT_TAB_TOP_RATED' }),
            source: () => shopApi.getTopRatedProducts(categorySlug, 6),
        },
    ], [intl, categorySlug]);

    const load = (tab: IBlockZoneTab) => {
        cancelRequestRef.current();

        let canceled = false;
        cancelRequestRef.current = () => {
            canceled = true;
        };

        setIsLoading(true);

        tab.source().then((result) => {
            if (canceled) {
                return;
            }

            setIsLoading(false);
            setProducts(result);
        });
    };

    const onTabClick = (tab: IBlockZoneTab) => {
        setCurrentTab(tab);
        load(tab);
    };

    // Unmount.
    useEffect(() => () => {
        cancelRequestRef.current();
    }, []);

    useEffect(() => {
        let canceled = false;

        shopApi.getCategoryBySlug(categorySlug, { depth: 1 }).then((result) => {
            if (canceled) {
                return;
            }

            setCategory(result);
        });

        setCurrentTab(tabs[blockZoneIdx || 0]);
        load(tabs[blockZoneIdx || 0]);

        return () => {
            canceled = true;
        };
    }, [tabs, categorySlug]);

    if (!category) {
        return null;
    }

    return (
        <div className="block block-zone">
            <div className="container">
                <div className="block-zone__body">
                    <div className="block-zone__card category-card category-card--layout--overlay">
                        <div className="category-card__body">
                            <div className="category-card__overlay-image">
                                <AppImage
                                    srcSet={`${baseUrl(mobileImage)} 530w, ${baseUrl(image)} 305w`}
                                    src={image}
                                    sizes="(max-width: 575px) 530px, 305px"
                                />
                            </div>
                            <div className="category-card__overlay-image category-card__overlay-image--blur">
                                <AppImage
                                    srcSet={`${baseUrl(mobileImage)} 530w, ${baseUrl(image)} 305w`}
                                    src={image}
                                    sizes="(max-width: 575px) 530px, 305px"
                                />
                            </div>
                            <div className="category-card__content">
                                <div className="category-card__info">
                                    <div className="category-card__name">
                                        <AppLink href={url.category(category)}>
                                            {category.name}
                                        </AppLink>
                                    </div>
                                    <ul className="category-card__children">
                                        {subs.map((sub, subIdx) => (
                                            <li key={subIdx}>
                                                <AppLink href={url.category(sub)}>
                                                    {sub.name}
                                                </AppLink>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="category-card__actions">
                                        <AppLink href={url.category(category)} className="btn btn-primary btn-sm">
                                            <FormattedMessage id="BUTTON_SHOP_ALL" />
                                        </AppLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="block-zone__widget">
                        <div className="block-zone__widget-header">
                            <div className="block-zone__tabs">
                                {tabs.map((tab, tabIdx) => (
                                    <button
                                        key={tabIdx}
                                        type="button"
                                        className={classNames('block-zone__tabs-button', {
                                            'block-zone__tabs-button--active': tab === currentTab,
                                        })}
                                        onClick={() => onTabClick(tab)}
                                    >
                                        {tab.name}
                                    </button>
                                ))}
                            </div>
                            <Arrow
                                className="block-zone__arrow block-zone__arrow--prev"
                                direction="prev"
                                onClick={handlePrevClick}
                            />
                            <Arrow
                                className="block-zone__arrow block-zone__arrow--next"
                                direction="next"
                                onClick={handleNextClick}
                            />
                        </div>
                        <div className="block-zone__widget-body">
                            <div
                                className={classNames('block-zone__carousel', {
                                    'block-zone__carousel--loading': isLoading,
                                })}
                            >
                                <div className="block-zone__carousel-loader" />

                                <AppSlick className="block-zone__carousel-slick" ref={slickRef} {...slickSettings}>
                                    {products.map((product) => (
                                        <div key={product.id} className="block-zone__carousel-item">
                                            <ProductCard
                                                product={product}
                                                exclude={excludeElements}
                                            />
                                        </div>
                                    ))}
                                </AppSlick>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default React.memo(BlockZone);
