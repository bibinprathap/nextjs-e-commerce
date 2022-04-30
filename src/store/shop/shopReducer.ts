// application
import { getActiveFilters, getResetValue, hasHandler } from '~/services/filters';
import { IActiveFilter } from '~/interfaces/filter';
import { IFilterValues } from '~/interfaces/list';
import { SHOP_NAMESPACE, IShopState } from '~/store/shop/shopTypes';
import {
    SHOP_FETCH_CATEGORY_SUCCESS,
    SHOP_FETCH_PRODUCTS_LIST_START,
    SHOP_FETCH_PRODUCTS_LIST_SUCCESS,
    SHOP_HYDRATE,
    SHOP_INIT, SHOP_RESET_FILTER,
    SHOP_RESET_FILTERS,
    SHOP_SET_FILTER_VALUE,
    SHOP_SET_OPTION_VALUE,
    ShopAction,
    ShopFetchProductsListSuccessAction,
    ShopResetFilterAction,
    ShopSetFilterValueAction,
} from '~/store/shop/shopActionTypes';

const initialState: IShopState = {
    init: false,
    categorySlug: null,
    categoryIsLoading: true,
    category: null,
    productsListIsLoading: true,
    productsList: null,
    options: {},
    filters: {},
    activeFilters: [],
    removedFilters: [],
    currentFilters: [],
};

function shopReducerFetchProductsListSuccess(
    state: IShopState,
    action: ShopFetchProductsListSuccessAction,
): IShopState {
    const activeFilters = action.productsList.filters
        .filter((x) => hasHandler(x))
        .reduce<IActiveFilter[]>((acc, filter) => [...acc, ...getActiveFilters(filter)], []);
    console.log(action.productsList);
    return {
        ...state,
        productsListIsLoading: false,
        productsList: action.productsList,
        activeFilters,
        removedFilters: [],
        currentFilters: activeFilters,
    };
}

function shopReducerSetFilterValue(state: IShopState, action: ShopSetFilterValueAction): IShopState {
    const currentFilters = { ...state.filters };
    let filters: IFilterValues;

    if (action.value !== null) {
        filters = { ...currentFilters, [action.filter]: action.value };
    } else {
        delete currentFilters[action.filter];

        filters = { ...currentFilters };
    }

    return {
        ...state,
        options: { ...state.options, page: 1 },
        filters,
    };
}

function shopReducerResetFilter(state: IShopState, action: ShopResetFilterAction): IShopState {
    if (!hasHandler(action.activeFilter.original)) {
        return state;
    }

    let { removedFilters } = state;

    if (!removedFilters.includes(action.activeFilter)) {
        removedFilters = [...removedFilters, action.activeFilter];
    }

    let { currentFilters } = state;

    if (currentFilters.includes(action.activeFilter)) {
        currentFilters = currentFilters.filter((x) => x !== action.activeFilter);
    }

    // All removed filters with the same slug.
    const all = removedFilters.filter((x) => x.original.slug === action.activeFilter.original.slug);
    const value = getResetValue(all);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { [action.activeFilter.original.slug]: _, ...filters } = state.filters;

    if (value !== null) {
        filters[action.activeFilter.original.slug] = value;
    }

    return {
        ...state,
        options: {
            ...state.options,
            page: 1,
        },
        filters,
        removedFilters,
        currentFilters,
    };
}

function shopReducer(state = initialState, action: ShopAction): IShopState {
    switch (action.type) {
        case SHOP_HYDRATE:
            return action.payload[SHOP_NAMESPACE];
        case SHOP_INIT:
            return {
                ...initialState,
                categorySlug: action.categorySlug,
                options: action.options,
                filters: action.filters,
            };
        case SHOP_FETCH_CATEGORY_SUCCESS:
            return {
                ...state,
                init: true,
                categoryIsLoading: false,
                category: action.category,
            };
        case SHOP_FETCH_PRODUCTS_LIST_START:
            return { ...state, productsListIsLoading: true };
        case SHOP_FETCH_PRODUCTS_LIST_SUCCESS:
            return shopReducerFetchProductsListSuccess(state, action);
        case SHOP_SET_OPTION_VALUE:
            return {
                ...state,
                options: { ...state.options, page: 1, [action.option]: action.value },
            };
        case SHOP_SET_FILTER_VALUE: return shopReducerSetFilterValue(state, action);
        case SHOP_RESET_FILTERS:
            return { ...state, options: { ...state.options, page: 1 }, filters: {} };
        case SHOP_RESET_FILTER:
            return shopReducerResetFilter(state, action);
        default:
            return state;
    }
}

export default shopReducer;
