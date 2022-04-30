// third-party
import queryString from 'query-string';
// application
import { AppDispatch } from '~/store/types';
import { GetServerSidePropsContext } from '~/store/store';
import { IFilterValues, IListOptions } from '~/interfaces/list';
import { shopInitThunk } from '~/store/shop/shopActions';
import { IProductsList } from '~/interfaces/product';

export function parseQueryOptions(query: string) {
    const queryObject = queryString.parse(query);
    const optionValues: IListOptions = {};

    if (typeof queryObject.page === 'string') {
        optionValues.page = parseFloat(queryObject.page);
    }
    if (typeof queryObject.limit === 'string') {
        optionValues.limit = parseFloat(queryObject.limit);
    }
    if (typeof queryObject.sort === 'string') {
        optionValues.sort = queryObject.sort;
    }

    return optionValues;
}

export function parseQueryFilters(query: string) {
    const queryObject = queryString.parse(query);
    const filterValues: IFilterValues = {};

    Object.keys(queryObject).forEach((param) => {
        const value = queryObject[param];
        const mr = param;
        //.match(/^filter_([-_A-Za-z0-9]+)$/);

        // if (!mr || typeof value !== 'string') {
        //     return;
        // }
        if (!mr || typeof value !== 'string') {
            return;
        }

        const filterSlug = param;

        filterValues[filterSlug] = value;
    });

    return filterValues;
}

export function buildQuery(options: IListOptions, filters: IFilterValues) {
    const params: { [key: string]: any } = {};

    if (options.page !== 1) {
        params.page = options.page;
    }

    if (options.limit !== 12) {
        params.limit = options.limit;
    }

    if (options.sort !== 'default') {
        params.sort = options.sort;
    }

    Object.keys(filters).filter((x) => x !== 'category' && !!filters[x]).forEach((filterSlug) => {
        if (filterSlug.indexOf('filter_') == -1)
            params[`filter_${filterSlug}`] = filters[filterSlug];
    });

    return queryString.stringify(params, { encode: false });
}

export default async function getShopPageData(context: GetServerSidePropsContext, slug?: string, productsList?: IProductsList): Promise<void> {
    const categorySlug = slug || (typeof context.params?.slug === 'string' ? context.params.slug : null);

    if (typeof context.req.url === 'string') {
        const query = queryString.stringify(queryString.parseUrl(context.req.url).query);
        const options = parseQueryOptions(query);
        const filters = parseQueryFilters(query);
        const dispatch = context.store.dispatch as AppDispatch;

        await dispatch(shopInitThunk(categorySlug, options, filters, productsList));
    }
}
