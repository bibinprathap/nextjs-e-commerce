// application
import { blogCategoriesTree, shopCategoriesList, shopCategoriesTree } from '~/fake-server/database/categories';
import { clone, error } from '~/fake-server/utils';
import { IBaseCategory, IBlogCategory, IShopCategory } from '~/interfaces/category';
import { IGetBlogCategoriesOptions, IGetCategoriesOptions, IGetCategoryBySlugOptions } from '~/api/base';

export function prepareCategory<T extends IBaseCategory>(category: T, depth?: number): T {
    let children;

    if (depth && depth > 0) {
        children = (category.children || []).map((x) => prepareCategory(x, depth - 1));
    }

    let parent;

    if (category.parent) {
        parent = prepareCategory(category.parent);
    } else if (category.parent === null) {
        parent = null;
    }

    return JSON.parse(JSON.stringify({
        ...category,
        parent,
        children,
    }));
}

export function getCategoryBySlug(slug: string, options?: IGetCategoryBySlugOptions): Promise<IShopCategory> {
    const optionsValue = options || {};

    const category = shopCategoriesList.find((x) => x.slug === slug);

    if (!category) {
        return error('Page Not Found');
    }

    return Promise.resolve(prepareCategory(category, optionsValue.depth));
}

export function getCategories(options?: IGetCategoriesOptions): Promise<IShopCategory[]> {
    let categories = shopCategoriesTree.slice(0);
    const depth = options?.depth || 0;
    const optionParent = options?.parent;
    const optionSlugs = options?.slugs;

    if (optionParent) {
        const parent = shopCategoriesList.find((x) => x.slug === optionParent.slug);

        if (parent) {
            categories = parent.children || [];
        }
    } else if (optionSlugs) {
        categories = shopCategoriesList.filter((x) => optionSlugs.includes(x.slug));
    }

    categories = categories.map((x) => prepareCategory(x, depth));

    return Promise.resolve(clone(categories));
}

export function getBlogCategories(options: IGetBlogCategoriesOptions): Promise<IBlogCategory[]> {
    let categories = blogCategoriesTree.slice(0);
    const depth = options.depth || 0;

    categories = categories.map((x) => prepareCategory(x, depth));

    return Promise.resolve(clone(categories));
}
