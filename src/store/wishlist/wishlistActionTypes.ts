// application
import { AppAction } from '~/store/types';
import { IProduct } from '~/interfaces/product';

export const WISHLIST_ADD_ITEM = 'WISHLIST_ADD_ITEM';
export const WISHLIST_REMOVE_ITEM = 'WISHLIST_REMOVE_ITEM';

export interface WishlistAddItemAction {
    type: typeof WISHLIST_ADD_ITEM;
    product: IProduct;
}

export interface WishlistRemoveItemAction {
    type: typeof WISHLIST_REMOVE_ITEM;
    productId: number;
}

export type WishlistAction =
    WishlistAddItemAction |
    WishlistRemoveItemAction;

export type WishlistThunkAction<T = void> = AppAction<WishlistAction, T>;
