import { IActiveFilter } from '~/interfaces/filter';
import { IFilterValues, IListOptions } from '~/interfaces/list';
import { IProductsList, IProduct } from '~/interfaces/product';
import { IShopCategory } from '~/interfaces/category';
import { SHOP_NAMESPACE } from '~/store/shop/shopTypes';
import { shopApi } from '~/api';
import {
    SHOP_FETCH_CATEGORY_SUCCESS,
    SHOP_FETCH_PRODUCTS_LIST_START,
    SHOP_FETCH_PRODUCTS_LIST_SUCCESS,
    SHOP_INIT,
    SHOP_RESET_FILTER,
    SHOP_RESET_FILTERS,
    SHOP_SET_FILTER_VALUE,
    SHOP_SET_OPTION_VALUE,
    ShopFetchCategorySuccessAction,
    ShopFetchProductsListStartAction,
    ShopFetchProductsListSuccessAction,
    ShopInitAction, ShopResetFilterAction,
    ShopResetFiltersAction,
    ShopSetFilterValueAction,
    ShopSetOptionValueAction,
    ShopThunkAction,
} from '~/store/shop/shopActionTypes';

let cancelPreviousCategoryRequest = () => { };
let cancelPreviousProductsListRequest = () => { };

export function shopInit(
    categorySlug: string | null,
    options: IListOptions = {},
    filters: IFilterValues = {},
): ShopInitAction {
    return {
        type: SHOP_INIT,
        categorySlug,
        options,
        filters,
    };
}

export function shopFetchCategorySuccess(category: IShopCategory | null): ShopFetchCategorySuccessAction {
    return {
        type: SHOP_FETCH_CATEGORY_SUCCESS,
        category,
    };
}

export function shopFetchProductsListStart(): ShopFetchProductsListStartAction {
    return {
        type: SHOP_FETCH_PRODUCTS_LIST_START,
    };
}

export function shopFetchProductsListSuccess(productsList: IProductsList): ShopFetchProductsListSuccessAction {
    return {
        type: SHOP_FETCH_PRODUCTS_LIST_SUCCESS,
        productsList,
    };
}

export function shopResetFilters(): ShopResetFiltersAction {
    return {
        type: SHOP_RESET_FILTERS,
    };
}

export function shopResetFilter(activeFilter: IActiveFilter): ShopResetFilterAction {
    return {
        type: SHOP_RESET_FILTER,
        activeFilter,
    };
}

export function shopSetOptionValue(option: string, value: string): ShopSetOptionValueAction {
    return {
        type: SHOP_SET_OPTION_VALUE,
        option,
        value,
    };
}

export function shopSetFilterValue(filter: string, value: string | null): ShopSetFilterValueAction {
    return {
        type: SHOP_SET_FILTER_VALUE,
        filter,
        value,
    };
}

export function shopFetchCategoryThunk(categorySlug: string | null): ShopThunkAction<Promise<void>> {
    return async (dispatch) => {
        let canceled = false;

        cancelPreviousCategoryRequest();
        cancelPreviousCategoryRequest = () => { canceled = true; };

        let request: Promise<IShopCategory | null>;

        if (categorySlug) {
            request = shopApi.getCategoryBySlug(categorySlug);
        } else {
            request = Promise.resolve(null);
        }

        const category = await request;

        if (canceled && process.browser) {
            return;
        }

        dispatch(shopFetchCategorySuccess(category));
    };
}

export function shopFetchProductsListThunk(cacheProductsList?: IProductsList | null): ShopThunkAction<Promise<void>> {

    return async (dispatch, getState) => {
        let canceled = false;

        cancelPreviousProductsListRequest();
        cancelPreviousProductsListRequest = () => { canceled = true; };

        dispatch(shopFetchProductsListStart());

        const shopState = getState()[SHOP_NAMESPACE];

        let { filters } = shopState;

        if (shopState.categorySlug !== null) {
            filters = { ...filters, category: shopState.categorySlug };
        }

        const productsList = cacheProductsList ? cacheProductsList : await shopApi.getProductsList(shopState.options, filters);

        if (canceled && process.browser) {
            return;
        }

        dispatch(shopFetchProductsListSuccess(productsList));
    };
}

export function shopSetOptionValueThunk(option: string, value: string, productsList: IProductsList | null, options: IListOptions = {}): ShopThunkAction<Promise<void>> {
    return async (dispatch) => {
        dispatch(shopSetOptionValue(option, value));
        // debugger;
        // console.log(productsList);
        let newproductsList = productsList;
        if (productsList && option == "page") {
            const page = option == "page" ? parseInt(value) : options?.page || 1;
            // const limit = option == "limit" ? value : options?.limit || 16;
            // const sort = option == "sort" ? value : options?.sort || 'default';
            const limit = options?.limit || 16;
            const sort = options?.sort || 'default';
            const total = productsList.products.length;
            const pages = Math.ceil(productsList.products.length / limit);
            const from = (page - 1) * limit + 1;
            const to = Math.min(page * limit, total);

            // Sort items array.
            productsList.products = productsList.products.sort((a, b) => {
                if (['name_asc', 'name_desc'].includes(sort)) {
                    if (a.name === b.name) {
                        return 0;
                    }

                    return (a.name > b.name ? 1 : -1) * (sort === 'name_asc' ? 1 : -1);
                }

                return 0;
            });
            console.log('getProductsList', JSON.stringify(productsList.products[0]));
            const items = productsList.products.slice(from - 1, to) as unknown as Array<IProduct>;

            // newproductsList = { ...productsList, items }
            // if (option == "page") {
            //     newproductsList.page = parseInt(value) || 1;
            //     newproductsList.from = from;
            //     newproductsList.to = to;
            //     newproductsList.pages = pages
            // }
            // else if (option == "limit") {
            //     newproductsList.limit = parseInt(limit) || 16;
            //     newproductsList.page = parseInt(page) || 1;
            //     newproductsList.from = from;
            //     newproductsList.to = to;
            //     newproductsList.pages = pages
            // }

            // else if (option == "sort")
            //     newproductsList.sort = value || 'default';

            newproductsList = {
                ...productsList,
                items,
                page: page || 1,
                sort,
                total,
                pages,
                from,
                to,
            }
            await dispatch(shopFetchProductsListThunk(newproductsList));
        }
        else {
            await dispatch(shopFetchProductsListThunk());
        }

    };
}

export function shopSetFilterValueThunk(filter: string, value: string | null): ShopThunkAction<Promise<void>> {
    return async (dispatch) => {
        dispatch(shopSetFilterValue(filter, value));

        await dispatch(shopFetchProductsListThunk());
    };
}

export function shopResetFiltersThunk(): ShopThunkAction<Promise<void>> {
    return async (dispatch) => {
        dispatch(shopResetFilters());

        await dispatch(shopFetchProductsListThunk());
    };
}

export function shopResetFilterThunk(activeFilter: IActiveFilter): ShopThunkAction<Promise<void>> {
    return async (dispatch) => {
        dispatch(shopResetFilter(activeFilter));

        await dispatch(shopFetchProductsListThunk());
    };
}

export function shopInitThunk(
    categorySlug: string | null,
    options: IListOptions = {},
    filters: IFilterValues = {},
    productsList?: IProductsList
): ShopThunkAction<Promise<void>> {
    return async (dispatch) => {
        dispatch(shopInit(categorySlug, options, filters));

        await Promise.all([
            dispatch(shopFetchCategoryThunk(categorySlug)),
            dispatch(shopFetchProductsListThunk(productsList)),
        ]);
    };
}
