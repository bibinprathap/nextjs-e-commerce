// application
import { IQuickviewState } from '~/store/quickview/quickviewTypes';
import { QUICKVIEW_CLOSE, QUICKVIEW_OPEN, QuickviewAction } from '~/store/quickview/quickviewActionTypes';

const initialState: IQuickviewState = {
    open: false,
    product: null,
};

export const QUICKVIEW_NAMESPACE = 'quickview';

export default function quickviewReducer(state = initialState, action: QuickviewAction) {
    let newState = state;

    if (action.type === QUICKVIEW_OPEN) {
        newState = {
            ...state,
            open: true,
            product: JSON.parse(JSON.stringify(action.product)),
        };
    } else if (action.type === QUICKVIEW_CLOSE) {
        newState = {
            ...state,
            open: false,
        };
    }

    return newState;
}
