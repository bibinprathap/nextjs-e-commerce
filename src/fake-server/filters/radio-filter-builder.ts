/* eslint-disable import/prefer-default-export,class-methods-use-this */

// application
import { AbstractFilterBuilder } from '~/fake-server/filters/abstract-filter-builder';
import { IBaseFilterItem, IRadioFilter } from '~/interfaces/filter';
import { IProduct } from '~/interfaces/product';
import { products as dbProducts } from '~/fake-server/database/products';

export class RadioFilterBuilder extends AbstractFilterBuilder {
    private items: IBaseFilterItem[] = [];

    private value: string | null = null;

    test(product: IProduct): boolean {
        return this.value !== null && this.extractItems(product).map((x) => x.slug).includes(this.value);
    }

    makeItems(products: IProduct[], value: string): void {
        products.forEach((product) => this.extractItems(product).forEach((item) => {
            if (!this.items.find((x) => x.slug === item.slug)) {
                this.items.push(item);
            }
        }));

        this.value = value || this.items[0].slug;
    }

    calc(filters: AbstractFilterBuilder[]): void {
        const products = dbProducts.filter(
            (product) => filters.reduce<boolean>(
                (isMatched, filter) => isMatched && (filter === this || filter.test(product)),
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

    build(): IRadioFilter {
        return {
            type: 'radio',
            slug: this.slug,
            name: this.name,
            items: this.items,
            value: this.value,
        };
    }

    private extractItems(product: IProduct): IBaseFilterItem[] {
        if (this.slug === 'discount') {
            const items: IBaseFilterItem[] = [
                { slug: 'any', name: 'Any', count: 0 },
            ];

            if (product.compareAtPrice) {
                items.push({ slug: 'yes', name: 'Yes', count: 0 });
            } else {
                items.push({ slug: 'no', name: 'No', count: 0 });
            }

            return items;
        }

        throw Error();
    }
}
