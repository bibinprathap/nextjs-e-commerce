// application
import { IProduct } from '~/interfaces/product';
import { shopApi } from '~/api';
import {
    ENQUIRY_CLOSE,
    ENQUIRY_OPEN,
    EnquiryCloseAction,
    EnquiryOpenAction,
    EnquiryThunkAction,
} from '~/store/enquiry/enquiryActionTypes';

let cancelPreviousRequest = () => { };

export function enquiryOpenSuccess(product: IProduct): EnquiryOpenAction {
    return {
        type: ENQUIRY_OPEN,
        product,
    };
}

export function enquiryClose(): EnquiryCloseAction {
    return {
        type: ENQUIRY_CLOSE,
    };
}

export function enquiryOpen(product: IProduct): EnquiryThunkAction<Promise<void>> {
    return (dispatch) => {
        dispatch(enquiryOpenSuccess(product));

        return new Promise((resolve) => {
            resolve();
        });
    };
}
