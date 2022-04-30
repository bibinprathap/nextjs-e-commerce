/* eslint-disable import/prefer-default-export,class-methods-use-this */

// application
import { AbstractFilterBuilder } from '~/fake-server/filters/abstract-filter-builder';
import { IBaseFilterItem, ICheckFilter } from '~/interfaces/filter';
import { IProduct } from '~/interfaces/product';
import { products as dbProducts } from '~/fake-server/database/products';

export class CheckFilterBuilder extends AbstractFilterBuilder {
    private items: IBaseFilterItem[] = [];

    private value: string[] = [];

    test(product: IProduct): boolean {
        if (this.value.length === 0) {
            return true;
        }

        return this.value.reduce<boolean>((result, value) => (
            result || this.extractItems(product).map((x) => x.slug).includes(value)
        ), false);
    }

    // noinspection DuplicatedCode
    makeItems(products: IProduct[], value: string): void {
        products.forEach((product) => this.extractItems(product).forEach((item) => {
            if (!this.items.find((x) => x.slug === item.slug)) {
                this.items.push(item);
            }
        }));

        this.value = this.parseValue(value);
    }

    // noinspection DuplicatedCode
    calc(filters: AbstractFilterBuilder[]): void {
        const products = dbProducts.filter(
            (product) => filters.reduce<boolean>(
                (isMatched, filter) => (isMatched && (filter === this || filter.test(product))),
                true,
            ),
        );

        this.items = this.items.map((item) => ({
            ...item,
            count: products.reduce((acc, product) => (
                acc + (this.extractItems(product).map((x) => x.slug).includes(item.slug) ? 1 : 0)
            ), 0),
        }));
    }

    build(): ICheckFilter {
        return {
            type: 'check',
            slug: this.slug,
            name: this.name,
            items: this.items,
            value: this.value,
        };
    }

    // noinspection JSMethodCanBeStatic
    private parseValue(value: string): string[] {
        return value ? value.split(',') : [];
    }

    private extractItems(product: IProduct): IBaseFilterItem[] {
        if (this.slug === 'brand') {
            return product.brand ? [{
                slug: product.brand.slug,
                name: product.brand.name,
                count: 0,
            }] : [];
        }

        throw Error();
    }
}
