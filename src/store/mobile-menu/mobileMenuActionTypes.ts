export const MOBILE_MENU_OPEN = 'MOBILE_MENU_OPEN';
export const MOBILE_MENU_CLOSE = 'MOBILE_MENU_CLOSE';

export interface MobileMenuOpenAction {
    type: typeof MOBILE_MENU_OPEN;
}

export interface MobileMenuCloseAction {
    type: typeof MOBILE_MENU_CLOSE;
}

export type MobileMenuAction =
    MobileMenuOpenAction |
    MobileMenuCloseAction;
