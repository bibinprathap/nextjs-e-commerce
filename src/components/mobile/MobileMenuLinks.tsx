// react
import React from 'react';
// third-party
import classNames from 'classnames';
// application
import AppImage from '~/components/shared/AppImage';
import AppLink from '~/components/shared/AppLink';
import MobileMenuPanelController from '~/components/mobile/MobileMenuPanelController';
import { ArrowRoundedRight7x11Svg } from '~/svg';
import { IMobileMenuLink } from '~/interfaces/mobile-menu-link';

interface Props {
    items?: IMobileMenuLink[];
    onItemClick?: (item: IMobileMenuLink) => void;
}

function MobileMenuLinks(props: Props) {
    const { items = [], onItemClick } = props;

    const onInnerItemClick = (event: React.MouseEvent, item: IMobileMenuLink) => {
        const hasSubmenu = item.submenu && item.submenu.length > 0;

        if (hasSubmenu) {
            event.preventDefault();
        }

        if (onItemClick) {
            onItemClick(item);
        }
    };

    return (
        <div className="mobile-menu__links">
            <ul>
                {items.map((item, itemIdx) => {
                    const hasSubmenu = item.submenu && item.submenu.length > 0;
                    const highlighted = item.customFields?.highlight === true;

                    const content = (
                        <React.Fragment>
                            {item.image !== undefined && (
                                <div className="mobile-menu__links-image">
                                    <AppImage src={item.image} />
                                </div>
                            )}
                            {item.title}
                            {hasSubmenu && <ArrowRoundedRight7x11Svg />}
                        </React.Fragment>
                    );

                    const renderLink = (onItemClickInner: (event: React.MouseEvent, item: IMobileMenuLink) => void) => (
                        <React.Fragment>
                            {item.url !== undefined && (
                                <AppLink
                                    href={item.url}
                                    anchor={hasSubmenu}
                                    className={classNames({ highlight: highlighted })}
                                    onClick={(event) => onItemClickInner(event, item)}
                                    {...item.customFields?.anchorProps}
                                >
                                    {content}
                                </AppLink>
                            )}

                            {item.url === undefined && (
                                <button
                                    type="button"
                                    className={classNames({ highlight: highlighted })}
                                    onClick={(event) => onItemClickInner(event, item)}
                                >
                                    {content}
                                </button>
                            )}
                        </React.Fragment>
                    );

                    return (
                        <li key={itemIdx}>
                            {hasSubmenu && (
                                <MobileMenuPanelController
                                    label={item.title}
                                    content={<MobileMenuLinks items={item.submenu} onItemClick={onItemClick} />}
                                >
                                    {(open) => renderLink(
                                        (event, item) => {
                                            open();
                                            onInnerItemClick(event, item);
                                        },
                                    )}
                                </MobileMenuPanelController>
                            )}

                            {!hasSubmenu && renderLink(onInnerItemClick)}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default MobileMenuLinks;
