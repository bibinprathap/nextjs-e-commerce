// application
import { IMobileMenuState } from '~/store/mobile-menu/mobileMenuTypes';
import { MOBILE_MENU_CLOSE, MOBILE_MENU_OPEN, MobileMenuAction } from '~/store/mobile-menu/mobileMenuActionTypes';

const initialState: IMobileMenuState = {
    open: false,
};

export const MOBILE_MENU_NAMESPACE = 'mobileMenu';

export default function mobileMenuReducer(state = initialState, action: MobileMenuAction) {
    switch (action.type) {
    case MOBILE_MENU_OPEN:
        return {
            ...state,
            open: true,
        };
    case MOBILE_MENU_CLOSE:
        return {
            ...state,
            open: false,
        };
    default:
        return state;
    }
}
