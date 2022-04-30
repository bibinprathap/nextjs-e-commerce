// application
import { IProduct } from '~/interfaces/product';
import { IWishlistState } from '~/store/wishlist/wishlistTypes';
import { WISHLIST_ADD_ITEM, WISHLIST_REMOVE_ITEM, WishlistAction } from '~/store/wishlist/wishlistActionTypes';
import { withClientState } from '~/store/client';

function addItem(state: IWishlistState, product: IProduct): IWishlistState {
    const itemIndex = state.items.findIndex((x) => x.id === product.id);

    if (itemIndex === -1) {
        return {
            items: [
                ...state.items,
                JSON.parse(JSON.stringify(product)),
            ],
        };
    }

    return state;
}

function removeItem(state: IWishlistState, productId: number): IWishlistState {
    return {
        items: state.items.filter((x) => x.id !== productId),
    };
}

const initialState: IWishlistState = {
    items: [],
};

export const WISHLIST_NAMESPACE = 'wishlist';

function wishlistBaseReducer(state = initialState, action: WishlistAction) {
    switch (action.type) {
    case WISHLIST_ADD_ITEM:
        return addItem(state, action.product);

    case WISHLIST_REMOVE_ITEM:
        return removeItem(state, action.productId);

    default:
        return state;
    }
}

const wishlistReducer = withClientState(wishlistBaseReducer, WISHLIST_NAMESPACE);

export default wishlistReducer;
