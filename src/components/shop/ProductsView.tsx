// react
import React, { useContext, useMemo, useState } from 'react';
// third-party
import classNames from 'classnames';
import { FormattedMessage, useIntl } from 'react-intl';
// application
import CurrencyFormat from '~/components/shared/CurrencyFormat';
import Pagination from '~/components/shared/Pagination';
import ProductCard from '~/components/shared/ProductCard';
import { SidebarContext } from '~/services/sidebar';
import {
    Cross9LightSvg,
    Filters16Svg,
    LayoutGrid16Svg,
    LayoutGridWithDetails16Svg,
    LayoutList16Svg,
    LayoutTable16Svg,
} from '~/svg';
import {
    useSetOption,
    useShop,
    useShopOptions,
    useShopProductsList,
    useShopProductsListIsLoading,
    useShopResetFiltersThunk,
    useShopResetFilterThunk,
} from '~/store/shop/shopHooks';
import { IShopPageGridLayout, IShopPageLayout, IShopPageOffCanvasSidebar } from '~/interfaces/pages';

interface LayoutButton {
    layout: IShopPageLayout;
    icon: React.ReactNode;
}

interface Props {
    layout: IShopPageLayout;
    gridLayout: IShopPageGridLayout;
    offCanvasSidebar: IShopPageOffCanvasSidebar;
}

function ProductsView(props: Props) {
    const { layout: layoutProps, gridLayout, offCanvasSidebar } = props;
    const intl = useIntl();
    const isLoading = useShopProductsListIsLoading();
    const shop = useShop();
    const productsList = useShopProductsList();
    const options = useShopOptions();
    const shopResetFilters = useShopResetFiltersThunk();
    const shopResetFilter = useShopResetFilterThunk();
    const [, setSidebarIsOpen] = useContext(SidebarContext);
    const [layout, setLayout] = useState(layoutProps);


    const handlePageChange = useSetOption('page', parseFloat, productsList, options);
    const handleSortChange = useSetOption('sort', (event) => event.target.value, productsList, options);
    const handleLimitChange = useSetOption('limit', (event) => parseFloat(event.target.value), productsList, options);

    const isEmptyList = productsList?.total === 0;
    const hasActiveFilters = shop.activeFilters.length > 0;
    const currentFiltersCount = shop.currentFilters.length;

    const { currentFilters } = shop;

    const handleFiltersClick = () => {
        setSidebarIsOpen(true);
    };

    const layoutButtons: LayoutButton[] = useMemo(() => [
        { layout: 'grid', icon: <LayoutGrid16Svg /> },
        { layout: 'grid-with-features', icon: <LayoutGridWithDetails16Svg /> },
        { layout: 'list', icon: <LayoutList16Svg /> },
        { layout: 'table', icon: <LayoutTable16Svg /> },
    ], []);

    const rootClasses = classNames('products-view', {
        'products-view--loading': isLoading,
    });

    const viewOptionsClasses = classNames(
        'products-view__options',
        'view-options',
        `view-options--offcanvas--${offCanvasSidebar}`,
    );

    const productListClasses = classNames(
        'products-view__list',
        'products-list',
        {
            'products-list--grid--6': gridLayout === 'grid-6-full',
            'products-list--grid--5': gridLayout === 'grid-5-full',
            'products-list--grid--4': ['grid-4-full', 'grid-4-sidebar'].includes(gridLayout),
            'products-list--grid--3': gridLayout === 'grid-3-sidebar',
        },
    );

    if (!productsList) {
        return null;
    }

    return (
        <div className={rootClasses}>
            <div className="products-view__body">
                <div className="products-view__loader" />

                {isEmptyList && hasActiveFilters && (
                    <div className="products-view__empty">
                        <div className="products-view__empty-title">
                            <FormattedMessage id="TEXT_NO_MATCHING_ITEMS_TITLE" />
                        </div>
                        <div className="products-view__empty-subtitle">
                            <FormattedMessage id="TEXT_NO_MATCHING_ITEMS_SUBTITLE" />
                        </div>
                        <div className="products-view__empty-actions">
                            <button type="button" className="btn btn-primary btn-sm" onClick={shopResetFilters}>
                                <FormattedMessage id="BUTTON_RESET_FILTERS" />
                            </button>
                        </div>
                    </div>
                )}

                {isEmptyList && !hasActiveFilters && (
                    <div className="products-view__empty">
                        <div className="products-view__empty-title">
                            <FormattedMessage id="TEXT_CATEGORY_IS_EMPTY_TITLE" />
                        </div>
                        <div className="products-view__empty-subtitle">
                            <FormattedMessage id="TEXT_CATEGORY_IS_EMPTY_SUBTITLE" />
                        </div>
                    </div>
                )}

                {!isEmptyList && (
                    <React.Fragment>
                        <div className={viewOptionsClasses}>
                            <div className="view-options__body">
                                <button
                                    type="button"
                                    className="view-options__filters-button filters-button"
                                    onClick={handleFiltersClick}
                                >
                                    <span className="filters-button__icon"><Filters16Svg /></span>
                                    <span className="filters-button__title">
                                        <FormattedMessage id="BUTTON_FILTERS" />
                                    </span>
                                    <span className="filters-button__counter">{currentFiltersCount}</span>
                                </button>

                                <div className="view-options__layout layout-switcher">
                                    <div className="layout-switcher__list">
                                        {layoutButtons.map((button) => {
                                            const buttonClasses = classNames('layout-switcher__button', {
                                                'layout-switcher__button--active': button.layout === layout,
                                            });

                                            return (
                                                <button
                                                    key={button.layout}
                                                    type="button"
                                                    className={buttonClasses}
                                                    onClick={() => setLayout(button.layout)}
                                                >
                                                    {button.icon}
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>

                                <div className="view-options__legend">
                                    <FormattedMessage
                                        id="TEXT_SHOWING_PRODUCTS"
                                        values={{
                                            from: productsList.from,
                                            to: productsList.to,
                                            total: productsList.total,
                                        }}
                                    />
                                </div>

                                <div className="view-options__spring" />

                                <div className="view-options__select">
                                    <label htmlFor="view-option-sort">
                                        <FormattedMessage id="INPUT_SORT_LABEL" />
                                        :
                                    </label>
                                    <select
                                        id="view-option-sort"
                                        className="form-control form-control-sm"
                                        value={options.sort || productsList.sort}
                                        onChange={handleSortChange}
                                    >
                                        <option value="default">
                                            {intl.formatMessage({ id: 'INPUT_SORT_OPTION_DEFAULT' })}
                                        </option>
                                        <option value="name_asc">
                                            {intl.formatMessage({ id: 'INPUT_SORT_OPTION_NAME_ASC' })}
                                        </option>
                                        <option value="name_desc">
                                            {intl.formatMessage({ id: 'INPUT_SORT_OPTION_NAME_DESC' })}
                                        </option>
                                    </select>
                                </div>

                                <div className="view-options__select">
                                    <label htmlFor="view-option-limit">
                                        <FormattedMessage id="INPUT_LIMIT_LABEL" />
                                        :
                                    </label>
                                    <select
                                        id="view-option-limit"
                                        className="form-control form-control-sm"
                                        value={options.limit || productsList.limit}
                                        onChange={handleLimitChange}
                                    >
                                        <option value="8">8</option>
                                        <option value="16">16</option>
                                        <option value="24">24</option>
                                        <option value="32">32</option>
                                    </select>
                                </div>
                            </div>

                            {hasActiveFilters && (
                                <div className="view-options__body view-options__body--filters">
                                    <div className="view-options__label">
                                        <FormattedMessage id="TEXT_ACTIVE_FILTERS" />
                                    </div>
                                    <div className="view-options__applied-filters applied-filters">
                                        <ul className="applied-filters__list">
                                            {currentFilters.map((filter, index) => (
                                                <li key={index} className="applied-filters__item">
                                                    <button
                                                        type="button"
                                                        className="applied-filters__button applied-filters__button--filter"
                                                        onClick={() => shopResetFilter(filter)}
                                                    >
                                                        {filter.type === 'vehicle' && filter.original.vehicle && (
                                                            <React.Fragment>
                                                                {filter.original.vehicle.year}
                                                                {' '}
                                                                {filter.original.vehicle.make}
                                                                {' '}
                                                                {filter.original.vehicle.model}
                                                            </React.Fragment>
                                                        )}
                                                        {filter.type === 'range' && (
                                                            <React.Fragment>
                                                                <CurrencyFormat value={filter.original.value[0]} />
                                                                {' – '}
                                                                <CurrencyFormat value={filter.original.value[1]} />
                                                            </React.Fragment>
                                                        )}
                                                        {filter.type === 'check' && filter.item.name}
                                                        {filter.type === 'radio' && (
                                                            <React.Fragment>
                                                                {filter.original.name}
                                                                {': '}
                                                                {filter.item.name}
                                                            </React.Fragment>
                                                        )}
                                                        {filter.type === 'rating' && (
                                                            <FormattedMessage
                                                                id="TEXT_STARS"
                                                                values={{
                                                                    stars: filter.item.rating,
                                                                }}
                                                            />
                                                        )}
                                                        {filter.type === 'color' && filter.item.name}

                                                        <Cross9LightSvg />
                                                    </button>
                                                </li>
                                            ))}
                                            <li className="applied-filters__item">
                                                <button
                                                    type="button"
                                                    className="applied-filters__button applied-filters__button--clear"
                                                    onClick={shopResetFilters}
                                                >
                                                    <FormattedMessage id="BUTTON_CLEAR_ALL" />
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div
                            className={productListClasses}
                            data-layout={layout === 'grid-with-features' ? 'grid' : layout}
                            data-with-features={layout === 'grid-with-features' ? 'true' : 'false'}
                        >
                            <div className="products-list__head">
                                <div className="products-list__column products-list__column--image">
                                    <FormattedMessage id="TABLE_IMAGE" />
                                </div>
                                <div className="products-list__column products-list__column--meta">
                                    <FormattedMessage id="TABLE_SKU" />
                                </div>
                                <div className="products-list__column products-list__column--product">
                                    <FormattedMessage id="TABLE_PRODUCT" />
                                </div>
                                <div className="products-list__column products-list__column--rating">
                                    <FormattedMessage id="TABLE_RATING" />
                                </div>
                                <div className="products-list__column products-list__column--price">
                                    <FormattedMessage id="TABLE_PRICE" />
                                </div>
                            </div>
                            <div className="products-list__content">
                                {productsList?.items.map((product) => (
                                    <div key={product.id + Math.random()} className="products-list__item">
                                        <ProductCard product={product} />
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="products-view__pagination">
                            <nav aria-label="Page navigation example">
                                <Pagination
                                    current={options.page || productsList.page}
                                    total={productsList.pages}
                                    siblings={2}
                                    onPageChange={handlePageChange}
                                />
                            </nav>
                            <div className=" products-view__pagination-legend">
                                <FormattedMessage
                                    id="TEXT_SHOWING_PRODUCTS"
                                    values={{
                                        from: productsList.from,
                                        to: productsList.to,
                                        total: productsList.total,
                                    }}
                                />
                            </div>
                        </div>
                    </React.Fragment>
                )}
            </div>
        </div>
    );
}

export default ProductsView;
