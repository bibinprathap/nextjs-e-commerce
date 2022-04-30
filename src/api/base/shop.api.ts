// application
import { IAddressData } from '~/interfaces/address';
import { IBrand } from '~/interfaces/brand';
import { IFilterValues, IListOptions, IReviewsList } from '~/interfaces/list';
import { IOrder } from '~/interfaces/order';
import { IProduct, IProductsList } from '~/interfaces/product';
import { IReview } from '~/interfaces/review';
import { IShopCategory } from '~/interfaces/category';

export interface IGetCategoryBySlugOptions {
    depth?: number;
}

export interface IGetCategoriesOptions {
    parent?: Partial<IShopCategory>;
    slugs?: string[];
    depth?: number;
}

export interface IGetBrandsOptions {
    limit?: number;
}

export interface IAddProductReviewData {
    rating: number;
    author: string;
    email: string;
    content: string;
}

export interface IEnquiryData {
    brand: string;
    fullname: string;
    phonenumber: string;
    year: string;
    chassis: string;
    email: string;
    address: string;
    enquirycontent: string;
    pagename: string;
}

export interface IGetSearchSuggestionsOptions {
    limitProducts?: number;
    limitCategories?: number;
}

export interface IGetSearchSuggestionsResult {
    products: IProduct[];
    categories: IShopCategory[];
}

export interface ICheckoutItemOptionData {
    name: string;
    value: string;
}

export interface ICheckoutItemData {
    productId: number;
    options: ICheckoutItemOptionData[];
    quantity: number;
}

export interface ICheckoutData {
    payment: string;
    items: ICheckoutItemData[];
    billingAddress: IAddressData;
    shippingAddress: IAddressData;
    comment: string;
}

export abstract class ShopApi {
    abstract getCategoryBySlug(slug: string, options?: IGetCategoryBySlugOptions): Promise<IShopCategory>;

    abstract getCategories(options?: IGetCategoriesOptions): Promise<IShopCategory[]>;

    abstract getBrands(options?: IGetBrandsOptions): Promise<IBrand[]>;

    abstract getProductsList(options?: IListOptions, filters?: IFilterValues): Promise<IProductsList>;

    abstract getProductBySlug(slug: string): Promise<IProduct>;

    abstract getProductReviews(productId: number, options?: IListOptions): Promise<IReviewsList>;

    abstract addProductReview(productId: number, data: IAddProductReviewData): Promise<IReview>;
    abstract sendEnquiry(data: IEnquiryData): Promise<IEnquiryData>;

    abstract getProductAnalogs(productId: number): Promise<IProduct[]>;

    abstract getRelatedProducts(productId: number, limit: number): Promise<IProduct[]>;

    abstract getFeaturedProducts(categorySlug: string | null, limit: number): Promise<IProduct[]>;

    abstract getPopularProducts(categorySlug: string | null, limit: number): Promise<IProduct[]>;

    abstract getTopRatedProducts(categorySlug: string | null, limit: number): Promise<IProduct[]>;

    abstract getSpecialOffers(limit: number): Promise<IProduct[]>;

    abstract getLatestProducts(limit: number): Promise<IProduct[]>;

    abstract getSearchSuggestions(
        query: string,
        options?: IGetSearchSuggestionsOptions,
    ): Promise<IGetSearchSuggestionsResult>;

    abstract checkout(data: ICheckoutData): Promise<IOrder>;
}
