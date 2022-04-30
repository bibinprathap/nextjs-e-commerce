// third-party
import { toast } from 'react-toastify';
// application
import { globalIntl } from '~/services/i18n/global-intl';
import { ICartItemOption } from '~/store/cart/cartTypes';
import { IProduct } from '~/interfaces/product';
import {
    CART_ADD_ITEM,
    CART_REMOVE_ITEM,
    CART_UPDATE_QUANTITIES,
    CartAddItemAction,
    CartItemQuantity,
    CartRemoveItemAction,
    CartThunkAction,
    CartUpdateQuantitiesAction,
} from '~/store/cart/cartActionTypes';

export function cartAddItemSuccess(
    product: IProduct,
    options: ICartItemOption[] = [],
    quantity = 1,
): CartAddItemAction {
    toast.success(globalIntl()?.formatMessage(
        { id: 'TEXT_TOAST_PRODUCT_ADDED_TO_CART' },
        { productName: product.name },
    ));

    return {
        type: CART_ADD_ITEM,
        product,
        options,
        quantity,
    };
}

export function cartRemoveItemSuccess(itemId: number): CartRemoveItemAction {
    return {
        type: CART_REMOVE_ITEM,
        itemId,
    };
}

export function cartUpdateQuantitiesSuccess(quantities: CartItemQuantity[]): CartUpdateQuantitiesAction {
    return {
        type: CART_UPDATE_QUANTITIES,
        quantities,
    };
}

export function cartAddItem(
    product: IProduct,
    options: ICartItemOption[] = [],
    quantity = 1,
): CartThunkAction<Promise<void>> {
    // sending request to server, timeout is used as a stub
    return (dispatch) => (
        new Promise((resolve) => {
            setTimeout(() => {
                dispatch(cartAddItemSuccess(product, options, quantity));
                resolve();
            }, 250);
        })
    );
}

export function cartRemoveItem(itemId: number): CartThunkAction<Promise<void>> {
    // sending request to server, timeout is used as a stub
    return (dispatch) => (
        new Promise((resolve) => {
            setTimeout(() => {
                dispatch(cartRemoveItemSuccess(itemId));
                resolve();
            }, 250);
        })
    );
}

export function cartUpdateQuantities(quantities: CartItemQuantity[]): CartThunkAction<Promise<void>> {
    // sending request to server, timeout is used as a stub
    return (dispatch) => (
        new Promise((resolve) => {
            setTimeout(() => {
                dispatch(cartUpdateQuantitiesSuccess(quantities));
                resolve();
            }, 250);
        })
    );
}
