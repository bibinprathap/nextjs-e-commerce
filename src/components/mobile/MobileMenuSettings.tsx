// react
import React, { useCallback, useMemo } from 'react';
// application
import AppImage from '~/components/shared/AppImage';
import MobileMenuLinks from '~/components/mobile/MobileMenuLinks';
import MobileMenuPanelController from '~/components/mobile/MobileMenuPanelController';
import { ArrowRoundedRight6x9Svg } from '~/svg';
import { getAllLanguages } from '~/services/i18n/utils';
import { IMobileMenuLink } from '~/interfaces/mobile-menu-link';
import { useCurrency, useCurrencyChange } from '~/store/currency/currencyHooks';
import { useLanguage, useSetLocale } from '~/services/i18n/hooks';
import { useMobileMenuClose } from '~/store/mobile-menu/mobileMenuHooks';
// data
import dataShopCurrencies from '~/data/shopCurrencies';

function MobileMenuSettings() {
    const language = useLanguage();
    const currency = useCurrency();
    const setLocale = useSetLocale();
    const currencyChange = useCurrencyChange();
    const mobileMenuClose = useMobileMenuClose();

    const languages: IMobileMenuLink[] = useMemo(() => (
        getAllLanguages().map<IMobileMenuLink>(((eachLanguage) => ({
            title: eachLanguage.name,
            image: eachLanguage.icon,
            customFields: {
                locale: eachLanguage.locale,
            },
        })))
    ), []);

    const currencies: IMobileMenuLink[] = useMemo(() => (
        dataShopCurrencies.map(((eachCurrency) => ({
            title: `${eachCurrency.symbol} ${eachCurrency.name}`,
            customFields: {
                currency: eachCurrency,
            },
        })))
    ), []);

    const onLanguageItemClick = useCallback((item: IMobileMenuLink) => {
        if (item.customFields && item.customFields.locale) {
            setLocale(item.customFields.locale);
        }

        mobileMenuClose();
    }, [setLocale, mobileMenuClose]);

    const onCurrencyItemClick = useCallback((item: IMobileMenuLink) => {
        if (item.customFields && item.customFields.currency) {
            currencyChange(item.customFields.currency);
        }

        mobileMenuClose();
    }, [currencyChange, mobileMenuClose]);

    return (
        <div className="mobile-menu__settings-list">
            <div className="mobile-menu__setting">
                <MobileMenuPanelController
                    label="Language"
                    content={<MobileMenuLinks items={languages} onItemClick={onLanguageItemClick} />}
                >
                    {(open) => (
                        <button
                            type="button"
                            className="mobile-menu__setting-button"
                            title="Language"
                            onClick={open}
                        >
                            <span className="mobile-menu__setting-icon">
                                <AppImage src={language.icon} />
                            </span>
                            <span className="mobile-menu__setting-title">
                                {language.name}
                            </span>
                            <span className="mobile-menu__setting-arrow">
                                <ArrowRoundedRight6x9Svg />
                            </span>
                        </button>
                    )}
                </MobileMenuPanelController>
            </div>
            <div className="mobile-menu__setting">
                <MobileMenuPanelController
                    label="Currency"
                    content={<MobileMenuLinks items={currencies} onItemClick={onCurrencyItemClick} />}
                >
                    {(open) => (
                        <button
                            type="button"
                            className="mobile-menu__setting-button"
                            title="Currency"
                            onClick={open}
                        >
                            <span className="mobile-menu__setting-icon mobile-menu__setting-icon--currency">
                                {currency.symbol}
                            </span>
                            <span className="mobile-menu__setting-title">
                                {currency.name}
                            </span>
                            <span className="mobile-menu__setting-arrow">
                                <ArrowRoundedRight6x9Svg />
                            </span>
                        </button>
                    )}
                </MobileMenuPanelController>
            </div>
        </div>
    );
}

export default MobileMenuSettings;
