// application
import { ICustomFields } from './custom-fields';

export interface IBaseCategory {
    id: number;
    type: string;
    name: string;
    slug: string;
    image: string|null;
    items?: number;
    parent?: this | null;
    children?: this[];
    customFields: ICustomFields;
}

export type IShopCategoryLayout = 'categories' | 'products';

export interface IShopCategory extends IBaseCategory {
    type: 'shop';
    layout: IShopCategoryLayout;
}

export interface IBlogCategory extends IBaseCategory {
    type: 'blog';
}

export type ICategory = IShopCategory | IBlogCategory;
