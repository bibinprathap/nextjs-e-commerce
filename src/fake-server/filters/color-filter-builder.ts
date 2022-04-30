/* eslint-disable import/prefer-default-export,class-methods-use-this */

// application
import { AbstractFilterBuilder } from '~/fake-server/filters/abstract-filter-builder';
import { IColorFilter, IColorFilterItem } from '~/interfaces/filter';
import { IProduct } from '~/interfaces/product';
import { products as dbProducts } from '~/fake-server/database/products';

const colors = [
    { code: 'white', color: '#fff' },
    { code: 'silver', color: '#d9d9d9' },
    { code: 'light-gray', color: '#b3b3b3' },
    { code: 'gray', color: '#808080' },
    { code: 'dark-gray', color: '#666' },
    { code: 'coal', color: '#4d4d4d' },
    { code: 'black', color: '#262626' },
    { code: 'red', color: '#ff4040' },
    { code: 'orange', color: '#ff8126' },
    { code: 'yellow', color: '#ffd333' },
    { code: 'pear-green', color: '#becc1f' },
    { code: 'green', color: '#8fcc14' },
    { code: 'emerald', color: '#47cc5e' },
    { code: 'shamrock', color: '#47cca0' },
    { code: 'shakespeare', color: '#47cccc' },
    { code: 'blue', color: '#40bfff' },
    { code: 'dark-blue', color: '#3d6dcc' },
    { code: 'violet', color: '#7766cc' },
    { code: 'purple', color: '#b852cc' },
    { code: 'cerise', color: '#e53981' },
];

export class ColorFilterBuilder extends AbstractFilterBuilder {
    private items: IColorFilterItem[] = [];

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
                (isMatched, filter) => (
                    isMatched && (filter === this || filter.test(product))
                ),
                true,
            ),
        );

        this.items = this.items.map((item) => ({
            ...item,
            count: products.reduce((acc, product) => (
                acc + (this.extractItems(product).map((x) => x.slug).includes(item.slug) ? 1 : 0)
            ), 0),
        }));
        this.items = this.items.sort((a, b) => (
            colors.findIndex((x) => x.code === a.slug) - colors.findIndex((x) => x.code === b.slug)
        ));
    }

    build(): IColorFilter {
        return {
            type: 'color',
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

    private extractItems(product: IProduct): IColorFilterItem[] {
        const attribute = product.attributes.find((x) => x.slug === this.slug);

        if (!attribute) {
            return [];
        }

        return attribute.values.map((value) => ({
            slug: value.slug,
            name: value.name,
            color: this.getColorCode(value.slug),
            count: 0,
        }));
    }

    private getColorCode(slug: string): string {
        return colors.find((x) => x.code === slug)?.color || '#000';
    }
}
