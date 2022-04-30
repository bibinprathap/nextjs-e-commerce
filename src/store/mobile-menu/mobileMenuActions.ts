// application
import {
    MOBILE_MENU_CLOSE,
    MOBILE_MENU_OPEN,
    MobileMenuCloseAction,
    MobileMenuOpenAction,
} from '~/store/mobile-menu/mobileMenuActionTypes';

export function mobileMenuOpen(): MobileMenuOpenAction {
    return { type: MOBILE_MENU_OPEN };
}

export function mobileMenuClose(): MobileMenuCloseAction {
    return { type: MOBILE_MENU_CLOSE };
}
