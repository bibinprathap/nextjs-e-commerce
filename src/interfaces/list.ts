// application
import { IFilter } from './filter';
import { IOrder } from './order';
import { IReview } from './review';

export interface IList<T> {
    /** Array of list items. */
    items: T[];
    products: T[];
}

export interface IPaginatedList<T> extends IList<T> {
    /** Current page. */
    page: number;

    /** Items per page. */
    limit: number;

    /** Sorting algorithm. */
    sort: string;

    /** Total items in list. Not a items.length. */
    total: number;

    /** Total number of pages. */
    pages: number;

    /** Common number of the first item on the current page. */
    from: number;

    /** Common number of the last item on the current page. */
    to: number;
}

export interface IFilterableList<T> extends IList<T> {
    filters: IFilter[];
}

export interface IListOptions {
    sort?: string;
    limit?: number;
    page?: number;
}

export interface IFilterValues {
    [filterSlug: string]: string;
}

export type IOrdersList = IPaginatedList<IOrder>;

export type IReviewsList = IPaginatedList<IReview>;
