// application
import { IActiveFilter } from '~/interfaces/filter';
import { ICategory } from '~/interfaces/category';
import { IFilterValues, IListOptions } from '~/interfaces/list';
import { IProductsList } from '~/interfaces/product';

export const SHOP_NAMESPACE = 'shop';

export interface IShopState {
    init: boolean;
    categorySlug: string | null;
    categoryIsLoading: boolean;
    category: ICategory | null;
    productsListIsLoading: boolean;
    productsList: IProductsList | null;
    options: IListOptions;
    filters: IFilterValues;

    /**
     * All active filters.
     */
    activeFilters: IActiveFilter[];
    /**
     * Removed active filters.
     */
    removedFilters: IActiveFilter[];
    /**
     * Active filters except removed ones.
     */
    currentFilters: IActiveFilter[];
}
