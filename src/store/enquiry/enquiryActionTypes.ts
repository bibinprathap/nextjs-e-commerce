// application
import { AppAction } from '~/store/types';
import { IProduct } from '~/interfaces/product';

export const ENQUIRY_OPEN = 'ENQUIRY_OPEN';
export const ENQUIRY_CLOSE = 'ENQUIRY_CLOSE';

export interface EnquiryOpenAction {
    type: typeof ENQUIRY_OPEN;
    product: IProduct;
}

export interface EnquiryCloseAction {
    type: typeof ENQUIRY_CLOSE;
}

export type EnquiryAction =
    EnquiryOpenAction |
    EnquiryCloseAction;

export type EnquiryThunkAction<T = void> = AppAction<EnquiryAction, T>;
