import React, { useCallback } from 'react';
import { ArrowRoundedDown12x7Svg } from '~/svg';
import FilterCategory from '~/components/filters/FilterCategory';
import FilterVehicle from '~/components/filters/FilterVehicle';
import { getFilterValue, isDefaultFilterValue, serializeFilterValue } from '~/services/filters';
import FilterRange from '~/components/filters/FilterRange';
import FilterCheck from '~/components/filters/FilterCheck';
import FilterRadio from '~/components/filters/FilterRadio';
import FilterRating from '~/components/filters/FilterRating';
import FilterColor from '~/components/filters/FilterColor';
import Collapse, { ICollapseRenderFn } from '~/components/shared/Collapse';
import { IFilter } from '~/interfaces/filter';
import { useShopSetFilterValueThunk } from '~/store/shop/shopHooks';

type RenderFilterFn = ICollapseRenderFn<HTMLDivElement, HTMLDivElement>;

interface ChangeValueEvent {
    filter: IFilter;
    value: IFilter['value'];
}

interface Props {
    filter: IFilter;
    value: string;
}

function Filter(props: Props) {
    const { filter, value } = props;
    const shopSetFilterValue = useShopSetFilterValueThunk();

    const handleValueChange = useCallback(({ filter, value }: ChangeValueEvent) => {
        shopSetFilterValue(
            filter.slug,
            isDefaultFilterValue(filter, value) ? null : serializeFilterValue(filter, value),
        ).then();
    }, [shopSetFilterValue]);

    const renderFn: RenderFilterFn = ({ toggle, setItemRef, setContentRef }) => (
        <div className="filter filter--opened" ref={setItemRef}>
            <button type="button" className="filter__title" onClick={toggle}>
                {filter.name}
                <span className="filter__arrow">
                    <ArrowRoundedDown12x7Svg />
                </span>
            </button>
            <div className="filter__body" ref={setContentRef}>
                <div className="filter__container">
                    {filter.type === 'category' && <FilterCategory options={filter} />}

                    {filter.type === 'vehicle' && (
                        <FilterVehicle
                            options={filter}
                            value={getFilterValue(filter, value)}
                            onChangeValue={handleValueChange}
                        />
                    )}

                    {filter.type === 'range' && (
                        <FilterRange
                            options={filter}
                            value={getFilterValue(filter, value)}
                            onChangeValue={handleValueChange}
                        />
                    )}

                    {filter.type === 'check' && (
                        <FilterCheck
                            options={filter}
                            value={getFilterValue(filter, value)}
                            onChangeValue={handleValueChange}
                        />
                    )}

                    {filter.type === 'radio' && (
                        <FilterRadio
                            options={filter}
                            value={getFilterValue(filter, value)}
                            onChangeValue={handleValueChange}
                        />
                    )}

                    {filter.type === 'rating' && (
                        <FilterRating
                            options={filter}
                            value={getFilterValue(filter, value)}
                            onChangeValue={handleValueChange}
                        />
                    )}

                    {filter.type === 'color' && (
                        <FilterColor
                            options={filter}
                            value={getFilterValue(filter, value)}
                            onChangeValue={handleValueChange}
                        />
                    )}
                </div>
            </div>
        </div>
    );

    return (
        <div className="widget-filters__item">
            <Collapse toggleClass="filter--opened" render={renderFn} />
        </div>
    );
}

export default React.memo(Filter);
