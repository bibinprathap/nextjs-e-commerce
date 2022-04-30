// application
import { ICurrency } from '~/interfaces/currency';

const dataShopCurrencies: ICurrency[] = [
    {
        code: 'EUR',
        symbol: '€',
        name: 'Euro',
        rate: 0.23,
    },
    {
        code: 'GBP',
        symbol: '£',
        name: 'Pound Sterling',
        rate: 0.21,
    },
    {
        code: 'USD',
        symbol: '$',
        name: 'US Dollar',
        rate: 3.67,
    },
    {
        code: 'RUB',
        symbol: '₽',
        name: 'Russian Ruble',
        rate: 20.90,
    },
    {
        code: 'AED',
        symbol: 'AED',
        name: 'AED',
        rate: 1,
    },
];

const dataShopDefaultCurrencyCode = 'AED';

export const dataShopDefaultCurrency: ICurrency = dataShopCurrencies.find((x) => (
    x.code === dataShopDefaultCurrencyCode
))!;

export default dataShopCurrencies;
