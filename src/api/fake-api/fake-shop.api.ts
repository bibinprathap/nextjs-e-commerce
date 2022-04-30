/* eslint-disable import/prefer-default-export,class-methods-use-this */

// application
import { getBrands } from '~/fake-server/endpoints/brands';
import { IBrand } from '~/interfaces/brand';
import { IFilterValues, IListOptions, IReviewsList } from '~/interfaces/list';
import { IOrder } from '~/interfaces/order';
import { IProductsList, IProduct } from '~/interfaces/product';
import { IReview } from '~/interfaces/review';
import { IShopCategory } from '~/interfaces/category';
import {
    IAddProductReviewData,
    ICheckoutData,
    IGetBrandsOptions,
    IGetCategoriesOptions,
    IGetCategoryBySlugOptions,
    IGetSearchSuggestionsOptions,
    IGetSearchSuggestionsResult,
    ShopApi,
    IEnquiryData,
} from '~/api/base';
import {
    addProductReview,
    checkout,
    getCategories,
    getCategoryBySlug,
    getFeaturedProducts,
    getLatestProducts,
    getPopularProducts,
    getProductAnalogs,
    getProductBySlug,
    getProductReviews,
    getProductsList,
    getRelatedProducts,
    getSearchSuggestions,
    getSpecialOffers,
    getTopRatedProducts,
    sendEnquiry,
} from '~/fake-server/endpoints';
import { IEnquiry } from '~/interfaces/enquiry';



export class FakeShopApi implements ShopApi {
    getCategoryBySlug(slug: string, options?: IGetCategoryBySlugOptions): Promise<IShopCategory> {
        return getCategoryBySlug(slug, options);
    }

    getCategories(options?: IGetCategoriesOptions): Promise<IShopCategory[]> {
        return getCategories(options);
    }

    getBrands(options?: IGetBrandsOptions): Promise<IBrand[]> {
        return getBrands(options);
    }

    async getProductsList(options: IListOptions = {}, filters: IFilterValues = {}): Promise<IProductsList> {
        debugger;
        return getProductsList(options, filters);


    }

    getProductBySlug(slug: string): Promise<IProduct> {
        return getProductBySlug(slug);
    }

    getProductReviews(productId: number, options?: IListOptions): Promise<IReviewsList> {
        return getProductReviews(productId, options);
    }
    sendEnquiry(data: IEnquiryData): Promise<IEnquiryData> {
        return sendEnquiry(data);
    }

    addProductReview(productId: number, data: IAddProductReviewData): Promise<IReview> {
        return addProductReview(productId, data);
    }

    getProductAnalogs(productId: number): Promise<IProduct[]> {
        return getProductAnalogs(productId);
    }

    getRelatedProducts(productId: number, limit: number): Promise<IProduct[]> {
        return getRelatedProducts(productId, limit);
    }

    getFeaturedProducts(categorySlug: string | null, limit: number): Promise<IProduct[]> {
        return getFeaturedProducts(categorySlug, limit);
    }

    getPopularProducts(categorySlug: string | null, limit: number): Promise<IProduct[]> {
        return getPopularProducts(categorySlug, limit);
    }

    getTopRatedProducts(categorySlug: string | null, limit: number): Promise<IProduct[]> {
        return getTopRatedProducts(categorySlug, limit);
    }

    getSpecialOffers(limit: number): Promise<IProduct[]> {
        return getSpecialOffers(limit);
    }

    getLatestProducts(limit: number): Promise<IProduct[]> {
        return getLatestProducts(limit);
    }

    getSearchSuggestions(
        query: string,
        options?: IGetSearchSuggestionsOptions,
    ): Promise<IGetSearchSuggestionsResult> {
        return getSearchSuggestions(query, options);
    }

    checkout(data: ICheckoutData): Promise<IOrder> {
        return checkout(data);
    }
}
