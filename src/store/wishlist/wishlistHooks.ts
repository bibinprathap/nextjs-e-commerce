// application
import { useAppAction, useAppSelector } from '~/store/hooks';
import { WISHLIST_NAMESPACE } from '~/store/wishlist/wishlistReducer';
import { wishlistAddItem, wishlistRemoveItem } from '~/store/wishlist/wishlistActions';

export const useWishlist = () => useAppSelector((state) => state[WISHLIST_NAMESPACE]);

export const useWishlistAddItem = () => useAppAction(wishlistAddItem);

export const useWishlistRemoveItem = () => useAppAction(wishlistRemoveItem);
