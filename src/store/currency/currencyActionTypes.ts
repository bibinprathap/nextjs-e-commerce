// application
import { ICurrency } from '~/interfaces/currency';

export const CURRENCY_CHANGE = 'CURRENCY_CHANGE';

export interface CurrencyChangeAction {
    type: typeof CURRENCY_CHANGE;
    currency: ICurrency;
}

export type CurrencyAction = CurrencyChangeAction;
