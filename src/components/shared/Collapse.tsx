// react
import React, {
    useCallback,
    useEffect,
    useMemo,
    useRef,
    useState,
} from 'react';

export interface ICollapseRenderFnData<T extends HTMLElement, P extends HTMLElement> {
    toggle: () => void;
    setItemRef: React.Ref<T>;
    setContentRef: React.Ref<P>;
}

export type ICollapseRenderFn<T extends HTMLElement, P extends HTMLElement>
    = (data: ICollapseRenderFnData<T, P>) => React.ReactNode;

interface Props<T extends HTMLElement, P extends HTMLElement> {
    toggleClass: string;
    render: ICollapseRenderFn<T, P>;
    open?: boolean;
}

function Collapse<T extends HTMLElement, P extends HTMLElement>(props: Props<T, P>) {
    const { toggleClass, render, open } = props;
    const [init, setInit] = useState(false);
    const itemRef = useRef<T>(null);
    const contentRef = useRef<P>(null);

    const expand = useCallback((immediate = false) => {
        const item = itemRef.current;
        const content = contentRef.current || item;

        if (!item || !content) {
            return;
        }

        if (immediate) {
            item.classList.add(toggleClass);
            content.style.height = '';
        } else {
            const startHeight = content.getBoundingClientRect().height;

            item.classList.add(toggleClass);

            const endHeight = content.getBoundingClientRect().height;

            content.style.height = `${startHeight}px`;
            content.getBoundingClientRect(); // force reflow
            content.style.height = `${endHeight}px`;

            if (content.getBoundingClientRect().height === endHeight) {
                content.style.height = '';
            }
        }
    }, [toggleClass, itemRef, contentRef]);

    const collapse = useCallback((immediate = false) => {
        const item = itemRef.current;
        const content = contentRef.current || item;

        if (!item || !content) {
            return;
        }

        if (immediate) {
            item.classList.remove(toggleClass);
            content.style.height = '';
        } else {
            const startHeight = content.getBoundingClientRect().height;

            content.style.height = `${startHeight}px`;
            item.classList.remove(toggleClass);

            content.getBoundingClientRect(); // force reflow
            content.style.height = '';
        }
    }, [toggleClass, itemRef, contentRef]);

    const handleToggle = useCallback(() => {
        const item = itemRef.current;

        if (!item) {
            return;
        }

        if (item.classList.contains(toggleClass)) {
            collapse();
        } else {
            expand();
        }
    }, [expand, collapse, toggleClass, itemRef]);

    useEffect(() => {
        if (typeof open === 'boolean') {
            if (open) {
                expand(!init);
            } else {
                collapse(!init);
            }
        }

        setInit(true);
    }, [expand, collapse, open, init]);

    useEffect(() => {
        const item = itemRef.current;
        const content = contentRef.current || item;

        if (!content) {
            return () => {};
        }

        const handleTransitionEnd = (event: TransitionEvent) => {
            if (content && event.propertyName === 'height') {
                content.style.height = '';
            }
        };

        content.addEventListener('transitionend', handleTransitionEnd);

        return () => {
            if (!content) {
                return;
            }

            content.removeEventListener('transitionend', handleTransitionEnd);
        };
    }, []);

    return useMemo(() => {
        if (render) {
            return (
                <React.Fragment>
                    {render({
                        toggle: handleToggle,
                        setItemRef: itemRef,
                        setContentRef: contentRef,
                    })}
                </React.Fragment>
            );
        }

        return null;
    }, [render, handleToggle, itemRef, contentRef]);
}

export default Collapse;
