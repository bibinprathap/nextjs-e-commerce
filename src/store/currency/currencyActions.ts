/* eslint-disable import/prefer-default-export */

// application
import { CURRENCY_CHANGE, CurrencyChangeAction } from '~/store/currency/currencyActionTypes';
import { ICurrency } from '~/interfaces/currency';

export function currencyChange(currency: ICurrency): CurrencyChangeAction {
    return {
        type: CURRENCY_CHANGE,
        currency,
    };
}
