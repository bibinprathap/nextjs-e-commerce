// react
import { useCallback } from 'react';
// application
import { IListOptions } from '~/interfaces/list';
import { SHOP_NAMESPACE, IShopState } from '~/store/shop/shopTypes';
import { useAppAction, useAppSelector } from '~/store/hooks';
import {
    shopResetFiltersThunk,
    shopResetFilterThunk,
    shopSetFilterValueThunk,
    shopSetOptionValueThunk,
} from '~/store/shop/shopActions';
import { IProductsList } from '~/interfaces/product';

export function useShopSelector<T extends (state: IShopState) => any>(selector: T): ReturnType<T> {
    return useAppSelector((state) => selector(state[SHOP_NAMESPACE]));
}

export const useShop = () => useShopSelector((state) => state);

export const useShopProductsListIsLoading = () => useShopSelector((state) => state.productsListIsLoading);

export const useShopProductsList = () => useShopSelector((state) => state.productsList);

export const useShopOptions = () => useShopSelector((state) => state.options);

export const useShopFilters = () => useShopSelector((state) => state.productsList?.filters || []);

export const useShopFilterValues = () => useShopSelector((state) => state.filters);

export const useShopResetFiltersThunk = () => useAppAction(shopResetFiltersThunk);

export const useShopResetFilterThunk = () => useAppAction(shopResetFilterThunk);

export const useShopSetOptionValueThunk = () => useAppAction(shopSetOptionValueThunk);

export const useShopSetFilterValueThunk = () => useAppAction(shopSetFilterValueThunk);

export function useSetOption(
    option: keyof IListOptions,
    filterValueFn: (data: any) => any,
    productsList: IProductsList | null,
    options: IListOptions = {},
) {
    const callback = useCallback(filterValueFn, []);
    const shopSetOptionValue = useShopSetOptionValueThunk();

    return useCallback((data) => {
        shopSetOptionValue(option, callback(data), productsList, options).then();
    }, [shopSetOptionValue, option, callback]);
}
