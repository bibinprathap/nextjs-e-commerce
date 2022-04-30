// application
import {
    IActiveFilter,
    ICheckFilterValue,
    IColorFilterValue,
    IFilter,
    IRadioFilterValue,
    IRangeFilterValue,
} from '~/interfaces/filter';
import { isArrayOfNumbers, isArrayOfStrings } from '~/services/utils';

interface IFilterHandler<T extends IFilter = IFilter, V = any, A = any> {
    serialize: (value: V) => string;
    deserialize: (value: string) => V;
    isDefaultValue: (filter: T, value: V) => boolean;
    getDefaultValue: (filter: T) => V;
    getActiveFilters: (filter: T) => A[];
    getResetValue: (activeFilters: A[]) => string | null;
}

function isRangeFilterValue(value: any): value is IRangeFilterValue {
    if (!Array.isArray(value) || value.length !== 2) {
        return false;
    }

    return !(typeof value[0] !== 'number' || typeof value[1] !== 'number');
}
function isCheckFilterValue(value: any): value is ICheckFilterValue {
    return isArrayOfStrings(value);
}
function isRadioFilterValue(value: any): value is IRadioFilterValue {
    return value === null || typeof value === 'string';
}
function isColorFilterValue(value: any): value is IColorFilterValue {
    return isArrayOfStrings(value);
}
function isRatingFilterValue(value: any): value is IColorFilterValue {
    return isArrayOfNumbers(value);
}

const CheckFilterHandler: IFilterHandler = {
    serialize: (value) => {
        if (!isCheckFilterValue(value)) {
            throw Error('Provide a valid "check" filter value!');
        }

        return value.join(',');
    },
    deserialize: (value) => (
        value ? value.split(',') : []
    ),
    isDefaultValue: (filter, value) => {
        if (!isCheckFilterValue(value)) {
            throw Error('Provide a valid "check" filter value!');
        }

        return value.length === 0;
    },
    getDefaultValue: () => [],
    getActiveFilters: (filter) => {
        if (filter.type !== 'check') {
            throw Error('Provide a "check" filter!');
        }

        if (CheckFilterHandler.isDefaultValue(filter, filter.value)) {
            return [];
        }

        return filter.items.filter((x) => filter.value.includes(x.slug)).map((item) => ({
            id: `${filter.slug}/${item.slug}`,
            type: filter.type,
            original: filter,
            item,
        }));
    },
    getResetValue(activeFilters) {
        const itemSlugs = activeFilters.map((x) => x.item.slug);

        return CheckFilterHandler.serialize(activeFilters[0].original.value
            .filter((x: any) => !itemSlugs.includes(x)));
    },
};

const ColorFilterHandler: IFilterHandler = {
    serialize: (value) => {
        if (!isColorFilterValue(value)) {
            throw Error('Provide a valid "color" filter value!');
        }

        return value.join(',');
    },
    deserialize: (value: string) => (
        value ? value.split(',') : []
    ),
    isDefaultValue: (filter, value) => {
        if (!isColorFilterValue(value)) {
            throw Error('Provide a valid "check" filter value!');
        }

        return value.length === 0;
    },
    getDefaultValue: () => [],
    getActiveFilters: (filter) => {
        if (filter.type !== 'color') {
            throw Error('Provide a "color" filter!');
        }

        if (ColorFilterHandler.isDefaultValue(filter, filter.value)) {
            return [];
        }

        return filter.items.filter((x) => filter.value.includes(x.slug)).map((item) => ({
            id: `${filter.slug}/${item.slug}`,
            type: filter.type,
            original: filter,
            item,
        }));
    },
    getResetValue: (activeFilters) => {
        const itemSlugs = activeFilters.map((x) => x.item.slug);

        return ColorFilterHandler.serialize(activeFilters[0].original.value
            .filter((x: any) => !itemSlugs.includes(x)));
    },
};

const RadioFilterHandler: IFilterHandler = {
    serialize: (value) => {
        if (!isRadioFilterValue(value)) {
            throw Error('Provide a valid "radio" filter value!');
        }

        return value === null ? '' : value;
    },
    deserialize: (value: string) => value,
    isDefaultValue: (filter, value) => {
        if (!isRadioFilterValue(value)) {
            throw Error('Provide a valid "radio" filter value!');
        }

        return RadioFilterHandler.getDefaultValue(filter) === value;
    },
    getDefaultValue: (filter) => {
        if (filter.type !== 'radio') {
            throw Error('Provide a "radio" filter!');
        }

        return filter.items[0].slug;
    },
    getActiveFilters: (filter) => {
        if (filter.type !== 'radio') {
            throw Error('Provide a "radio" filter!');
        }

        if (RadioFilterHandler.isDefaultValue(filter, filter.value)) {
            return [];
        }

        return [{
            id: filter.slug,
            type: filter.type,
            original: filter,
            item: filter.items.find((x) => x.slug === filter.value),
        }];
    },
    getResetValue: (activeFilters) => (
        activeFilters[0].original.items[0].slug
    ),
};

const RangeFilterHandler: IFilterHandler = {
    serialize: (value) => {
        if (!isRangeFilterValue(value)) {
            throw Error('Provide a valid "range" filter value!');
        }

        return value.join('-');
    },
    deserialize: (value: string) => (
        value ? value.split('-').map(parseFloat) : undefined
    ),
    isDefaultValue: (filter, value) => {
        if (filter.type !== 'range') {
            throw Error('Provide a "range" filter!');
        }
        if (!isRangeFilterValue(value)) {
            throw Error('Provide a valid "range" filter value!');
        }

        return filter.min === value[0] && filter.max === value[1];
    },
    getDefaultValue: (filter) => {
        if (filter.type !== 'range') {
            throw Error('Provide a "range" filter!');
        }

        return [filter.min, filter.max];
    },
    getActiveFilters: (filter) => {
        if (filter.type !== 'range') {
            throw Error('Provide a "range" filter!');
        }

        if (RangeFilterHandler.isDefaultValue(filter, filter.value)) {
            return [];
        }

        return [{
            id: filter.slug,
            type: filter.type,
            original: filter,
        }];
    },
    getResetValue: (activeFilters) => (
        RangeFilterHandler.serialize([activeFilters[0].original.min, activeFilters[0].original.max])
    ),
};

const RatingFilterHandler: IFilterHandler = {
    serialize: (value) => {
        if (!isRatingFilterValue(value)) {
            throw Error('Provide a valid "check" filter value!');
        }

        return value.join(',');
    },
    deserialize: (value) => (
        value ? value.split(',').map(parseFloat) : []
    ),
    isDefaultValue: (filter, value) => {
        if (!isRatingFilterValue(value)) {
            throw Error('Provide a valid "check" filter value!');
        }

        return value.length === 0;
    },
    getDefaultValue: () => [],
    getActiveFilters: (filter) => {
        if (filter.type !== 'rating') {
            throw Error('Provide a "rating" filter!');
        }

        if (RatingFilterHandler.isDefaultValue(filter, filter.value)) {
            return [];
        }

        return filter.items.filter((x) => filter.value.includes(x.rating)).map((item) => ({
            id: `${filter.slug}/${item.rating}`,
            type: 'rating',
            original: filter,
            item,
        }));
    },
    getResetValue: (activeFilters) => {
        const itemSlugs = activeFilters.map((x) => x.item.rating);

        return RatingFilterHandler.serialize(activeFilters[0].original.value
            .filter((x: any) => !itemSlugs.includes(x)));
    },
};

const VehicleFilterHandler: IFilterHandler = {
    serialize: (value) => (
        value === null ? '' : value.toString()
    ),
    deserialize: (value) => (
        value === '' ? null : parseFloat(value)
    ),
    isDefaultValue: (filter, value) => value === null,
    getDefaultValue: () => null,
    getActiveFilters: (filter) => {
        if (filter.type !== 'vehicle') {
            throw Error('Provide a "vehicle" filter!');
        }

        return filter.value ? [{ id: filter.slug, type: 'vehicle', original: filter }] : [];
    },
    getResetValue: () => null,
};

function getFilterHandler<T extends IFilter>(filter: T): IFilterHandler<T, T['value']> | null {
    switch (filter.type) {
    case 'check': return CheckFilterHandler;
    case 'color': return ColorFilterHandler;
    case 'radio': return RadioFilterHandler;
    case 'range': return RangeFilterHandler;
    case 'rating': return RatingFilterHandler;
    case 'vehicle': return VehicleFilterHandler;
    default:
        return null;
    }
}

function getExistsFilterHandler<T extends IFilter>(filter: T): IFilterHandler<T, T['value']> {
    const handler = getFilterHandler(filter);

    if (!handler) {
        throw Error('Unhandled filter type!');
    }

    return handler;
}

export function hasHandler<T extends IFilter>(filter: T): boolean {
    return getFilterHandler(filter) !== null;
}

export function isDefaultFilterValue<T extends IFilter>(filter: T, value: T['value']): boolean {
    return getExistsFilterHandler(filter).isDefaultValue(filter, value);
}

export function getFilterDefaultValue<T extends IFilter>(filter: T): T['value'] {
    return getExistsFilterHandler(filter).getDefaultValue(filter);
}

export function serializeFilterValue<T extends IFilter>(filter: T, value: T['value']): string | null {
    return getExistsFilterHandler(filter).serialize(value);
}

export function deserializeFilterValue<T extends IFilter = IFilter>(filter: T, value: string): T['value'] {
    return getExistsFilterHandler(filter).deserialize(value);
}

export function getFilterValue<T extends IFilter = IFilter>(filter: T, currentSerializedValue: string): T['value'] {
    return deserializeFilterValue(filter, currentSerializedValue) || getFilterDefaultValue(filter);
}

export function getActiveFilters<T extends IFilter = IFilter>(filter: T): IActiveFilter[] {
    return getExistsFilterHandler(filter).getActiveFilters(filter);
}

export function getResetValue<T extends IFilter = IFilter>(activeFilters: IActiveFilter[]): string | null {
    return getExistsFilterHandler(activeFilters[0].original).getResetValue(activeFilters);
}
