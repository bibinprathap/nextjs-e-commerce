// react
import React from 'react';
// third-party
import classNames from 'classnames';
// application
import AppLink from '~/components/shared/AppLink';
import { ILink, INestedLink } from '~/interfaces/link';

interface Props extends React.HTMLAttributes<HTMLElement> {
    links: INestedLink[];
    level?: number;
    onItemClick?: (item: ILink) => void;
}

function MegamenuLinks(props: Props) {
    const {
        links,
        level = 0,
        onItemClick,
        className,
        ...rootProps
    } = props;

    const rootClasses = classNames('megamenu-links', className, {
        'megamenu-links--root': level === 0,
    });

    return (
        <ul className={rootClasses} {...rootProps}>
            {links.map((link, linkIndex) => {
                const subLinks = link.links || [];
                const hasSubLinks = subLinks.length > 0;
                const linkClasses = classNames('megamenu-links__item', {
                    'megamenu-links__item--has-submenu': link.links,
                });

                return (
                    <li className={linkClasses} key={linkIndex}>
                        <AppLink
                            className="megamenu-links__item-link"
                            href={link.url}
                            onClick={() => onItemClick && onItemClick(link)}
                            {...link.customFields?.anchorProps}
                        >
                            {link.title}
                        </AppLink>
                        {hasSubLinks && (
                            <MegamenuLinks links={subLinks} onItemClick={onItemClick} level={level + 1} />
                        )}
                    </li>
                );
            })}
        </ul>
    );
}

export default React.memo(MegamenuLinks);
