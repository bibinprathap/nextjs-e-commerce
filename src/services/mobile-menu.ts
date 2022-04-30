// react
import React from 'react';

interface MobileMenuContextData {
    lastPanelIdRef: React.MutableRefObject<number>,
    containerRef: React.RefObject<HTMLElement> | null;
    open: (id: number) => void;
    close: () => void;
    stack: number[];
    bin: number[];
}

export const MobileMenuContext = React.createContext<MobileMenuContextData>({
    lastPanelIdRef: { current: 0 },
    containerRef: null,
    open: () => {},
    close: () => {},
    stack: [],
    bin: [],
});

export const MobileMenuLevelContext = React.createContext<number>(0);
