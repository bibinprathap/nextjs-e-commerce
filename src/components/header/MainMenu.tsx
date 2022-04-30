// react
import React, { useState } from 'react';
// third-party
import classNames from 'classnames';
// application
import AppLink from '~/components/shared/AppLink';
import Megamenu from '~/components/header/Megamenu';
import Menu from '~/components/header/Menu';
import { ArrowDownSm7x5Svg } from '~/svg';
import { IMainMenuLink } from '~/interfaces/main-menu-link';
import { useOptions } from '~/store/options/optionsHooks';
// data
import dataHeaderMainMenu from '~/data/headerMainMenu';

function MainMenu() {
    const items: IMainMenuLink[] = dataHeaderMainMenu;
    const [currentItem, setCurrentItem] = useState<IMainMenuLink | null>(null);
    const options = useOptions();
    const desktopLayout = options.desktopHeaderLayout;

    const handleItemMouseEnter = (item: IMainMenuLink) => {
        setCurrentItem(item);
    };

    const handleItemMouseLeave = (item: IMainMenuLink) => {
        if (currentItem === item) {
            setCurrentItem(null);
        }
    };

    const handleItemClick = () => {
        setCurrentItem(null);
    };

    return (
        <div className="main-menu">
            <ul className="main-menu__list">
                {items.map((item, index) => {
                    if (item.customFields?.ignoreIn?.includes(desktopLayout)) {
                        return null;
                    }

                    const itemHasSubmenu = !!item.submenu;
                    const itemClasses = classNames('main-menu__item', {
                        'main-menu__item--has-submenu': itemHasSubmenu,
                        'main-menu__item--submenu--menu': item.submenu?.type === 'menu',
                        'main-menu__item--submenu--megamenu': item.submenu?.type === 'megamenu',
                        'main-menu__item--hover': item === currentItem,
                    });

                    return (
                        <li
                            className={itemClasses}
                            key={index}
                            onMouseEnter={() => handleItemMouseEnter(item)}
                            onMouseLeave={() => handleItemMouseLeave(item)}
                        >
                            <AppLink
                                className="main-menu__link"
                                href={item.url}
                                onClick={handleItemClick}
                                {...item.customFields?.anchorProps}
                            >
                                {item.title}
                                {itemHasSubmenu && <ArrowDownSm7x5Svg />}
                            </AppLink>

                            {itemHasSubmenu && (
                                <div className="main-menu__submenu">
                                    {item.submenu?.type === 'menu' && (
                                        <Menu items={item.submenu.links} onItemClick={handleItemClick} />
                                    )}
                                    {item.submenu?.type === 'megamenu' && (
                                        <div
                                            className={classNames(
                                                'main-menu__megamenu',
                                                `main-menu__megamenu--size--${item.submenu.size}`,
                                            )}
                                        >
                                            <Megamenu menu={item.submenu} onItemClick={handleItemClick} />
                                        </div>
                                    )}
                                </div>
                            )}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default MainMenu;
