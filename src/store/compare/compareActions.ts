// third-party
import { toast } from 'react-toastify';
// application
import { globalIntl } from '~/services/i18n/global-intl';
import { IProduct } from '~/interfaces/product';
import {
    COMPARE_ADD_ITEM,
    COMPARE_CLEAR,
    COMPARE_REMOVE_ITEM,
    CompareAddItemAction,
    CompareClearAction,
    CompareRemoveItemAction,
    CompareThunkAction,
} from '~/store/compare/compareActionTypes';

export function compareAddItemSuccess(product: IProduct): CompareAddItemAction {
    toast.success(globalIntl()?.formatMessage(
        { id: 'TEXT_TOAST_PRODUCT_ADDED_TO_COMPARE' },
        { productName: product.name },
    ));

    return {
        type: COMPARE_ADD_ITEM,
        product,
    };
}

export function compareRemoveItemSuccess(productId: number): CompareRemoveItemAction {
    return {
        type: COMPARE_REMOVE_ITEM,
        productId,
    };
}

export function compareClearSuccess(): CompareClearAction {
    return {
        type: COMPARE_CLEAR,
    };
}

export function compareAddItem(product: IProduct): CompareThunkAction<Promise<void>> {
    // sending request to server, timeout is used as a stub
    return (dispatch) => (
        new Promise((resolve) => {
            setTimeout(() => {
                dispatch(compareAddItemSuccess(product));
                resolve();
            }, 250);
        })
    );
}

export function compareRemoveItem(productId: number): CompareThunkAction<Promise<void>> {
    // sending request to server, timeout is used as a stub
    return (dispatch) => (
        new Promise((resolve) => {
            setTimeout(() => {
                dispatch(compareRemoveItemSuccess(productId));
                resolve();
            }, 250);
        })
    );
}

export function compareClear(): CompareThunkAction<Promise<void>> {
    // sending request to server, timeout is used as a stub
    return (dispatch) => (
        new Promise((resolve) => {
            setTimeout(() => {
                dispatch(compareClearSuccess());
                resolve();
            }, 250);
        })
    );
}
