// application
import { AppAction } from '~/store/types';
import { IProduct } from '~/interfaces/product';

export const QUICKVIEW_OPEN = 'QUICKVIEW_OPEN';
export const QUICKVIEW_CLOSE = 'QUICKVIEW_CLOSE';

export interface QuickviewOpenAction {
    type: typeof QUICKVIEW_OPEN;
    product: IProduct;
}

export interface QuickviewCloseAction {
    type: typeof QUICKVIEW_CLOSE;
}

export type QuickviewAction =
    QuickviewOpenAction |
    QuickviewCloseAction;

export type QuickviewThunkAction<T = void> = AppAction<QuickviewAction, T>;
