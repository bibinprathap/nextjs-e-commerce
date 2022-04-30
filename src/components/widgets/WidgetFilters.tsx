// react
import React from 'react';
// third-party
import classNames from 'classnames';
import { FormattedMessage } from 'react-intl';
// application
import { useShopFilters, useShopFilterValues, useShopResetFiltersThunk } from '~/store/shop/shopHooks';
import { IShopPageOffCanvasSidebar } from '~/interfaces/pages';
import Filter from '~/components/filters/Filter';

interface Props {
    offcanvasSidebar: IShopPageOffCanvasSidebar;
}

function WidgetFilters(props: Props) {
    const { offcanvasSidebar } = props;
    const filters = useShopFilters();
    const values = useShopFilterValues();
    const shopResetFilters = useShopResetFiltersThunk();

    const rootClasses = classNames('widget', 'widget-filters', `widget-filters--offcanvas--${offcanvasSidebar}`);

    return (
        <div className={rootClasses}>
            <div className="widget__header widget-filters__header">
                <h4>
                    <FormattedMessage id="HEADER_FILTERS" />
                </h4>
            </div>

            <div className="widget-filters__list">
                {filters.map((filter) => (
                    <Filter
                        key={filter.slug}
                        filter={filter}
                        value={values[filter.slug]}
                    />
                ))}
            </div>

            <div className="widget-filters__actions d-flex">
                <button type="button" className="btn btn-secondary btn-sm" onClick={shopResetFilters}>
                    <FormattedMessage id="BUTTON_RESET" />
                </button>
            </div>
        </div>
    );
}

export default React.memo(WidgetFilters);
