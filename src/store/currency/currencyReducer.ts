// application
import { CURRENCY_CHANGE, CurrencyAction } from '~/store/currency/currencyActionTypes';
import { ICurrencyState } from '~/store/currency/currencyTypes';
import { withClientState } from '~/store/client';
// data
import { dataShopDefaultCurrency } from '~/data/shopCurrencies';

const initialState: ICurrencyState = {
    current: dataShopDefaultCurrency,
};

export const CURRENCY_NAMESPACE = 'currency';

function currencyBaseReducer(state = initialState, action: CurrencyAction): ICurrencyState {
    if (action.type === CURRENCY_CHANGE && state.current.code !== action.currency.code) {
        return {
            ...state,
            current: JSON.parse(JSON.stringify(action.currency)),
        };
    }

    return state;
}

const currencyReducer = withClientState(currencyBaseReducer, CURRENCY_NAMESPACE);

export default currencyReducer;
