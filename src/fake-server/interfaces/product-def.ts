export interface IProductAttributesDef {
    [slug: string]: string | string[] | [true, string, ...string[]];
}

export interface IProductDef {
    name: string;
    slug: string;
    sku: string;
    excerpt: string;
    description: string;
    partNumber: string;
    price: number;
    compareAtPrice?: number;
    images: string[];
    badges?: string | string[];
    rating: number;
    reviews: number;
    availability: string;
    brand?: string;
    categories?: string[];
    attributes?: IProductAttributesDef;
    compatibility?: 'all' | 'unknown' | number[];
}
