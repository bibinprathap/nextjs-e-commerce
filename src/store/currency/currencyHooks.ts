// application
import { CURRENCY_NAMESPACE } from '~/store/currency/currencyReducer';
import { currencyChange } from '~/store/currency/currencyActions';
import { useAppAction, useAppSelector } from '~/store/hooks';

export const useCurrency = () => useAppSelector((state) => state[CURRENCY_NAMESPACE].current);

export const useCurrencyChange = () => useAppAction(currencyChange);
