// application
import { MOBILE_MENU_NAMESPACE } from '~/store/mobile-menu/mobileMenuReducer';
import { mobileMenuClose, mobileMenuOpen } from '~/store/mobile-menu/mobileMenuActions';
import { useAppAction, useAppSelector } from '~/store/hooks';

export const useMobileMenu = () => useAppSelector((state) => state[MOBILE_MENU_NAMESPACE]);

export const useMobileMenuOpen = () => useAppAction(mobileMenuOpen);

export const useMobileMenuClose = () => useAppAction(mobileMenuClose);
