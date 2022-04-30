// application
import { GARAGE_SET_CURRENT, GARAGE_SET_ITEMS, GarageAction } from '~/store/garage/garageActionTypes';
import { IGarageState } from '~/store/garage/garageTypes';

const initialState: IGarageState = {
    items: [],
    current: null,
};

export const GARAGE_NAMESPACE = 'garage';

function garageReducer(state = initialState, action: GarageAction): IGarageState {
    switch (action.type) {
    case GARAGE_SET_ITEMS:
        return {
            ...state,
            items: action.payload,
            current: action.payload.find((x) => x.id === state.current?.id) || null,
        };
    case GARAGE_SET_CURRENT:
        return {
            ...state,
            current: state.items.find((x) => x.id === action.payload) || null,
        };
    default:
        return state;
    }
}

export default garageReducer;
