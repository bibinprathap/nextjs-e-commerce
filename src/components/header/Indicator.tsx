// react
import React, {
    PropsWithChildren,
    useMemo,
    useRef,
    useState,
} from 'react';
// third-party
import classNames from 'classnames';
// application
import AppLink, { IAppLinkHref } from '~/components/shared/AppLink';
import { useGlobalMousedown } from '~/services/hooks';

type Trigger = 'none' | 'click' | 'hover';

export interface IIndicatorController {
    close: () => void;
}

interface Props extends PropsWithChildren<{}> {
    icon: React.ReactNode;
    href?: IAppLinkHref;
    label?: React.ReactNode;
    value?: React.ReactNode;
    counter?: number;
    trigger?: Trigger;
    controllerRef?: React.MutableRefObject<IIndicatorController | null>;
}

function Indicator(props: Props) {
    const {
        icon,
        href,
        label,
        value,
        counter,
        trigger = 'none',
        children,
        controllerRef,
    } = props;
    const hasLabel = label !== undefined && label !== null;
    const hasValue = value !== undefined && value !== null;
    const buttonType = href !== undefined ? 'link' : 'button';
    const showCounter = counter !== undefined && counter !== null;
    const [isOpen, setIsOpen] = useState(false);
    const rootRef = useRef<HTMLDivElement>(null);

    const controller = useMemo<IIndicatorController>(() => ({
        close: () => setIsOpen(false),
    }), [setIsOpen]);

    if (controllerRef) {
        controllerRef.current = controller;
    }

    useGlobalMousedown((event) => {
        if (rootRef.current && !rootRef.current.contains(event.target as HTMLElement)) {
            setIsOpen(false);
        }
    }, [setIsOpen, rootRef]);

    const handleButtonClick = (event: React.MouseEvent) => {
        if (trigger === 'click') {
            event.preventDefault();

            setIsOpen((prevState) => !prevState);
        }
    };

    const buttonContent = (
        <React.Fragment>
            <span className="indicator__icon">
                {icon}
                {showCounter && <span className="indicator__counter">{counter}</span>}
            </span>

            {hasLabel && <span className="indicator__title">{label}</span>}
            {hasValue && <span className="indicator__value">{value}</span>}
        </React.Fragment>
    );

    const rootClasses = classNames('indicator', `indicator--trigger--${trigger}`, {
        'indicator--open': isOpen,
    });

    return (
        <div className={rootClasses} ref={rootRef}>
            {buttonType === 'button' && (
                <button className="indicator__button" type="button" onClick={handleButtonClick}>
                    {buttonContent}
                </button>
            )}
            {buttonType === 'link' && (
                <AppLink href={href} className="indicator__button" onClick={handleButtonClick}>
                    {buttonContent}
                </AppLink>
            )}
            <div className="indicator__content">
                {children}
            </div>
        </div>
    );
}

export default Indicator;
