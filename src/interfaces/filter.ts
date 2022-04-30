// application
import { IShopCategory } from './category';
import { IVehicle } from './vehicle';

export interface IBaseFilter<T extends string, V> {
    type: T;
    name: string;
    slug: string;
    value: V;
}
export interface IBaseFilterItem {
    slug: string;
    name: string;
    count: number;
}

export interface IColorFilterItem extends IBaseFilterItem {
    color: string;
}
export interface IRatingFilterItem {
    rating: number;
    count: number;
}

export type ICategoryFilterValue = string | null;
export type IVehicleFilterValue = number | null;
export type IRangeFilterValue = [number, number];
export type ICheckFilterValue = string[];
export type IRadioFilterValue = string | null;
export type IRatingFilterValue = number[];
export type IColorFilterValue = string[];

export type ICategoryFilter = IBaseFilter<'category', ICategoryFilterValue> & {items: IShopCategory[]};
export type IVehicleFilter = IBaseFilter<'vehicle', IVehicleFilterValue> & {vehicle: IVehicle | null};
export type IRangeFilter = IBaseFilter<'range', IRangeFilterValue> & {min: number; max: number};
export type ICheckFilter = IBaseFilter<'check', ICheckFilterValue> & {items: IBaseFilterItem[]};
export type IRadioFilter = IBaseFilter<'radio', IRadioFilterValue> & {items: IBaseFilterItem[]};
export type IRatingFilter = IBaseFilter<'rating', IRatingFilterValue> & {items: IRatingFilterItem[]};
export type IColorFilter = IBaseFilter<'color', IColorFilterValue> & {items: IColorFilterItem[]};

export type IFilter =
    ICategoryFilter |
    IVehicleFilter |
    IRangeFilter |
    ICheckFilter |
    IRadioFilter |
    IRatingFilter |
    IColorFilter;

export interface IActiveFilterBase<T extends IFilter> {
    id: string;
    type: T['type'];
    original: T;
}

export type IActiveFilterVehicle = IActiveFilterBase<IVehicleFilter> & {original: IVehicleFilter};
export type IActiveFilterRange = IActiveFilterBase<IRangeFilter>;
export type IActiveFilterCheck = IActiveFilterBase<ICheckFilter> & {item: IBaseFilterItem};
export type IActiveFilterRadio = IActiveFilterBase<IRadioFilter> & {item: IBaseFilterItem};
export type IActiveFilterRating = IActiveFilterBase<IRatingFilter> & {item: IRatingFilterItem};
export type IActiveFilterColor = IActiveFilterBase<IColorFilter> & {item: IColorFilterItem};

export type IActiveFilter =
    IActiveFilterVehicle |
    IActiveFilterRange |
    IActiveFilterCheck |
    IActiveFilterRadio |
    IActiveFilterRating |
    IActiveFilterColor;
