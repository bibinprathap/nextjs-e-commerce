// react
import React from 'react';
// third-party
import { FormattedMessage } from 'react-intl';
// application
import AppLink from '~/components/shared/AppLink';
import url from '~/services/url';
import { useWishlist } from '~/store/wishlist/wishlistHooks';
import { useCart } from '~/store/cart/cartHooks';
import { useMobileMenuClose } from '~/store/mobile-menu/mobileMenuHooks';
import {
    Car20Svg,
    Cart20Svg,
    Heart20Svg,
    Person20Svg,
} from '~/svg';

function MobileMenuIndicators() {
    const mobileMenuClose = useMobileMenuClose();
    const wishlist = useWishlist();
    const cart = useCart();

    return (
        <div className="mobile-menu__indicators">
            <AppLink href={url.wishlist()} className="mobile-menu__indicator" onClick={mobileMenuClose}>
                <span className="mobile-menu__indicator-icon">
                    <Heart20Svg />
                    {wishlist.items.length > 0 && (
                        <span className="mobile-menu__indicator-counter">
                            {wishlist.items.length}
                        </span>
                    )}
                </span>
                <span className="mobile-menu__indicator-title">
                    <FormattedMessage id="TEXT_MOBILE_INDICATOR_WISHLIST" />
                </span>
            </AppLink>
            <AppLink href={url.accountDashboard()} className="mobile-menu__indicator" onClick={mobileMenuClose}>
                <span className="mobile-menu__indicator-icon">
                    <Person20Svg />
                </span>
                <span className="mobile-menu__indicator-title">
                    <FormattedMessage id="TEXT_MOBILE_INDICATOR_ACCOUNT" />
                </span>
            </AppLink>
            <AppLink href={url.cart()} className="mobile-menu__indicator" onClick={mobileMenuClose}>
                <span className="mobile-menu__indicator-icon">
                    <Cart20Svg />
                    {cart.items.length > 0 && (
                        <span className="mobile-menu__indicator-counter">
                            {cart.items.length}
                        </span>
                    )}
                </span>
                <span className="mobile-menu__indicator-title">
                    <FormattedMessage id="TEXT_MOBILE_INDICATOR_CART" />
                </span>
            </AppLink>
            <AppLink href={url.accountGarage()} className="mobile-menu__indicator" onClick={mobileMenuClose}>
                <span className="mobile-menu__indicator-icon">
                    <Car20Svg />
                </span>
                <span className="mobile-menu__indicator-title">
                    <FormattedMessage id="TEXT_MOBILE_INDICATOR_GARAGE" />
                </span>
            </AppLink>
        </div>
    );
}

export default MobileMenuIndicators;
