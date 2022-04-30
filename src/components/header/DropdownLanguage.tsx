// react
import React, { useMemo } from 'react';
// third-party
import { FormattedMessage } from 'react-intl';
// application
import Dropdown, { IDropdownItem } from '~/components/header/Dropdown';
import { getAllLanguages } from '~/services/i18n/utils';
import { ILanguage } from '~/interfaces/language';
// data
import { useLanguage, useSetLocale } from '~/services/i18n/hooks';

interface Item extends IDropdownItem {
    language: ILanguage;
}

function DropdownLanguage() {
    const language = useLanguage();
    const setLocale = useSetLocale();

    const handleItemClick = async (item: Item) => {
        setLocale(item.language.locale);
    };

    const items: Item[] = useMemo(() => (
        getAllLanguages().map(((eachLanguage) => ({
            title: eachLanguage.name,
            image: eachLanguage.icon,
            language: eachLanguage,
        })))
    ), []);

    const label = (
        <React.Fragment>
            <FormattedMessage id="TEXT_TOPBAR_LANGUAGE" />
            :
        </React.Fragment>
    );

    return (
        <Dropdown
            label={label}
            title={language.code.toUpperCase()}
            items={items}
            onItemClick={handleItemClick}
        />
    );
}

export default DropdownLanguage;
