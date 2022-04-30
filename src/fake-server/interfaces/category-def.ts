export interface ICategoryDef {
    name: string;
    slug: string;
    image?: string;
    items?: number;
    layout?: 'categories' | 'products';
    children?: ICategoryDef[];
}
