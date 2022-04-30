// react
import React, { PropsWithChildren, useRef, useState } from 'react';
// third-party
import classNames from 'classnames';
// application
import AppImage from '~/components/shared/AppImage';
import { ArrowDownSm7x5Svg } from '~/svg';
import { useGlobalMousedown } from '~/services/hooks';

export interface IDropdownItem {
    title: string;
    image?: string;
}

interface Props<T extends IDropdownItem> extends PropsWithChildren<{}> {
    label?: React.ReactNode;
    title?: React.ReactNode;
    items?: T[];
    onItemClick?: (item: T) => void;
}

function Dropdown<T extends IDropdownItem>(props: Props<T>) {
    const {
        label,
        title,
        items = [],
        onItemClick,
    } = props;
    const [isOpen, setIsOpen] = useState(false);
    const rootRef = useRef<HTMLDivElement>(null);

    const hasLabel = !!label;
    const hasTitle = !!title;

    const classes = classNames('topbar__item-button topbar__menu', {
        'topbar__menu--open': isOpen,
    });

    const handleButtonClick = () => {
        setIsOpen((prev) => !prev);
    };

    const handleItemClick = (item: T) => {
        setIsOpen(false);

        if (onItemClick) {
            onItemClick(item);
        }
    };

    useGlobalMousedown((event) => {
        if (rootRef.current && !rootRef.current.contains(event.target as HTMLElement)) {
            setIsOpen(false);
        }
    }, [setIsOpen, rootRef]);

    return (
        <div className={classes} ref={rootRef}>
            <button
                className="topbar__button topbar__button--has-arrow topbar__menu-button"
                type="button"
                onClick={handleButtonClick}
            >
                {hasLabel && <span className="topbar__button-label">{label}</span>}
                {hasTitle && <span className="topbar__button-title">{title}</span>}
                <span className="topbar__button-arrow">
                    <ArrowDownSm7x5Svg />
                </span>
            </button>
            <div className="topbar__menu-body">
                {items.map((item, index) => (
                    <button
                        key={index}
                        className="topbar__menu-item"
                        type="button"
                        onClick={() => handleItemClick(item)}
                    >
                        {!!item.image && (
                            <AppImage src={item.image} alt={item.title} />
                        )}
                        <span>{item.title}</span>
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Dropdown;
