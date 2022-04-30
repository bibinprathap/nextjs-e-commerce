/* eslint-disable import/prefer-default-export,no-useless-constructor,no-empty-function */

// application
import { IProduct } from '~/interfaces/product';
import { IFilter } from '~/interfaces/filter';

export abstract class AbstractFilterBuilder {
    constructor(
        public slug: string,
        public name: string,
    ) { }

    abstract test(product: IProduct): boolean;

    abstract makeItems(products: IProduct[], value: string): void;

    abstract calc(filters: AbstractFilterBuilder[]): void;

    abstract build(): IFilter;
}
