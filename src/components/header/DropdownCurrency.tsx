// react
import React, { useMemo } from 'react';
// third-party
import { FormattedMessage } from 'react-intl';
// application
import Dropdown, { IDropdownItem } from '~/components/header/Dropdown';
import { ICurrency } from '~/interfaces/currency';
import { useCurrency, useCurrencyChange } from '~/store/currency/currencyHooks';
// data
import dataShopCurrencies from '~/data/shopCurrencies';

interface Item extends IDropdownItem {
    currency: ICurrency;
}

function DropdownCurrency() {
    const currency = useCurrency();
    const currencyChange = useCurrencyChange();

    const handleItemClick = (item: Item) => {
        currencyChange(item.currency);
    };

    const items: Item[] = useMemo(() => (
        dataShopCurrencies.map(((eachCurrency) => ({
            title: `${eachCurrency.symbol} ${eachCurrency.name}`,
            currency: eachCurrency,
        })))
    ), []);

    const label = (
        <React.Fragment>
            <FormattedMessage id="TEXT_TOPBAR_CURRENCY" />
            :
        </React.Fragment>
    );

    return (
        <Dropdown
            label={label}
            title={currency.code}
            items={items}
            onItemClick={handleItemClick}
        />
    );
}

export default DropdownCurrency;
