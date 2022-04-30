/* eslint-disable import/prefer-default-export,class-methods-use-this */

// application
import { AbstractFilterBuilder } from '~/fake-server/filters/abstract-filter-builder';
import { IProduct } from '~/interfaces/product';
import { IRatingFilter, IRatingFilterItem } from '~/interfaces/filter';
import { products as dbProducts } from '~/fake-server/database/products';

export class RatingFilterBuilder extends AbstractFilterBuilder {
    private items: IRatingFilterItem[] = [];

    private value: number[] = [];

    test(product: IProduct): boolean {
        if (this.value.length === 0) {
            return true;
        }

        return this.value.reduce<boolean>((acc, value) => acc || this.extractItem(product).rating === value, false);
    }

    makeItems(products: IProduct[], value: string): void {
        products.forEach((product) => {
            const item = this.extractItem(product);

            if (!this.items.find((x) => x.rating === item.rating)) {
                this.items.push(item);
            }
        });

        this.value = this.parseValue(value);
        this.items.sort((a, b) => b.rating - a.rating);
    }

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
                acc + (item.rating === this.extractItem(product).rating ? 1 : 0)
            ), 0),
        }));
    }

    build(): IRatingFilter {
        return {
            type: 'rating',
            slug: this.slug,
            name: this.name,
            items: this.items,
            value: this.value,
        };
    }

    private parseValue(value: string): number[] {
        return value ? value.split(',').map((x) => parseFloat(x)) : [];
    }

    // noinspection JSMethodCanBeStatic
    private extractItem(product: IProduct): IRatingFilterItem {
        return {
            rating: Math.round(product.rating || 0),
            count: 0,
        };
    }
}
