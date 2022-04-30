// application
import { ICompareState } from '~/store/compare/compareTypes';
import { IProduct } from '~/interfaces/product';
import { withClientState } from '~/store/client';
import {
    COMPARE_ADD_ITEM,
    COMPARE_CLEAR,
    COMPARE_REMOVE_ITEM,
    CompareAction,
} from '~/store/compare/compareActionTypes';

function addItem(state: ICompareState, product: IProduct): ICompareState {
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

function removeItem(state: ICompareState, productId: number): ICompareState {
    return {
        items: state.items.filter((x) => x.id !== productId),
    };
}

function clear(state: ICompareState): ICompareState {
    return {
        ...state,
        items: [],
    };
}

const initialState: ICompareState = {
    items: [],
};

export const COMPARE_NAMESPACE = 'compare';

function compareBaseReducer(state = initialState, action: CompareAction) {
    switch (action.type) {
    case COMPARE_ADD_ITEM:
        return addItem(state, action.product);

    case COMPARE_REMOVE_ITEM:
        return removeItem(state, action.productId);

    case COMPARE_CLEAR:
        return clear(state);

    default:
        return state;
    }
}

const compareReducer = withClientState(compareBaseReducer, COMPARE_NAMESPACE);

export default compareReducer;
