// react
import React, { useRef, useState } from 'react';
// third-party
import classNames from 'classnames';
import { FormattedMessage, useIntl } from 'react-intl';
// application
import AppLink from '~/components/shared/AppLink';
import MobileLogo from '~/components/mobile/MobileLogo';
import url from '~/services/url';
import VehiclePickerModal from '~/components/shared/VehiclePickerModal';
import { IVehicle } from '~/interfaces/vehicle';
import { useCart } from '~/store/cart/cartHooks';
import { useGarageCurrent, useGarageSetCurrent } from '~/store/garage/garageHooks';
import { useGlobalMousedown } from '~/services/hooks';
import { useMobileMenuOpen } from '~/store/mobile-menu/mobileMenuHooks';
import { useWishlist } from '~/store/wishlist/wishlistHooks';
import {
    Car20Svg,
    Cart20Svg,
    Cross20Svg,
    Heart20Svg,
    Menu18x14Svg,
    Person20Svg,
    Search20Svg,
} from '~/svg';

function MobileHeader() {
    const intl = useIntl();
    const mobileMenuOpen = useMobileMenuOpen();
    const wishlist = useWishlist();
    const cart = useCart();
    const vehicle: Enumerable<IVehicle> | null = useGarageCurrent();
    const garageSetCurrent = useGarageSetCurrent();
    const searchFormRef = useRef<HTMLDivElement | null>(null);
    const searchInputRef = useRef<HTMLInputElement | null>(null);
    const searchIndicatorRef = useRef<HTMLDivElement | null>(null);
    const [searchIsOpen, setSearchIsOpen] = useState(false);
    const [vehiclePickerIsOpen, setVehiclePickerIsOpen] = useState(false);

    const openSearch = () => {
        setSearchIsOpen(true);

        if (searchInputRef.current) {
            searchInputRef.current.focus();
        }
    };

    const closeSearch = () => {
        setSearchIsOpen(false);
    };

    const openVehiclePicker = () => {
        setVehiclePickerIsOpen(true);
    };

    const onVehiclePickerClose = () => {
        setVehiclePickerIsOpen(false);

        if (searchInputRef.current) {
            searchInputRef.current.focus();
        }
    };

    const onVehiclePickerSelect = (selectedVehicle: IVehicle | null) => {
        garageSetCurrent(selectedVehicle?.id || null);
    };

    const onSearchSubmit = (event: React.FormEvent) => {
        event.preventDefault();
    };

    useGlobalMousedown((event) => {
        const outsideIndicator = (
            searchIndicatorRef.current
            && !searchIndicatorRef.current.contains(event.target as HTMLElement)
        );
        const outsideForm = (
            searchFormRef.current
            && !searchFormRef.current.contains(event.target as HTMLElement)
        );

        if (outsideIndicator && outsideForm) {
            if (searchIsOpen && !vehiclePickerIsOpen) {
                closeSearch();
            }
        }
    }, [searchFormRef, searchIndicatorRef, searchIsOpen, vehiclePickerIsOpen]);

    const searchPlaceholder = vehicle
        ? intl.formatMessage({ id: 'INPUT_SEARCH_PLACEHOLDER_VEHICLE' }, vehicle)
        : intl.formatMessage({ id: 'INPUT_SEARCH_PLACEHOLDER' });

    return (
        <div className="mobile-header">
            <VehiclePickerModal
                value={vehicle}
                isOpen={vehiclePickerIsOpen}
                onClose={onVehiclePickerClose}
                onSelect={onVehiclePickerSelect}
            />

            <div className="container">
                <div className="mobile-header__body">
                    <button
                        className="mobile-header__menu-button"
                        type="button"
                        onClick={mobileMenuOpen}
                    >
                        <Menu18x14Svg />
                    </button>
                    <AppLink href={url.home()} className="mobile-header__logo">
                        <MobileLogo />
                    </AppLink>
                    <div
                        ref={searchFormRef}
                        className={classNames('mobile-header__search mobile-search', {
                            'mobile-header__search--open': searchIsOpen,
                        })}
                    >
                        <form className="mobile-search__body" onSubmit={onSearchSubmit}>
                            <label className="sr-only" htmlFor="mobile-site-search">
                                <FormattedMessage id="INPUT_SEARCH_LABEL" />
                            </label>
                            <input
                                ref={searchInputRef}
                                type="text"
                                id="mobile-site-search"
                                className="mobile-search__input"
                                placeholder={searchPlaceholder}
                            />
                            <button
                                type="button"
                                className="mobile-search__vehicle-picker"
                                onClick={openVehiclePicker}
                            >
                                <Car20Svg />
                                <span className="mobile-search__vehicle-picker-label">
                                    <FormattedMessage id="BUTTON_SEARCH_SELECT_VEHICLE_MOBILE" />
                                </span>
                            </button>
                            <button type="submit" className="mobile-search__button mobile-search__button--search">
                                <Search20Svg />
                            </button>
                            <button
                                type="button"
                                className="mobile-search__button mobile-search__button--close"
                                onClick={closeSearch}
                            >
                                <Cross20Svg />
                            </button>
                            <div className="mobile-search__field" />
                        </form>
                    </div>
                    <div className="mobile-header__indicators">
                        <div className="mobile-indicator d-md-none" ref={searchIndicatorRef}>
                            <button type="button" className="mobile-indicator__button" onClick={openSearch}>
                                <span className="mobile-indicator__icon">
                                    <Search20Svg />
                                </span>
                            </button>
                        </div>
                        <div className="mobile-indicator d-none d-md-block">
                            <AppLink href={url.accountDashboard()} className="mobile-indicator__button">
                                <span className="mobile-indicator__icon">
                                    <Person20Svg />
                                </span>
                            </AppLink>
                        </div>
                        <div className="mobile-indicator d-none d-md-block">
                            <AppLink href={url.wishlist()} className="mobile-indicator__button">
                                <span className="mobile-indicator__icon">
                                    <Heart20Svg />
                                    {wishlist.items.length > 0 && (
                                        <span className="mobile-indicator__counter">
                                            {wishlist.items.length}
                                        </span>
                                    )}
                                </span>
                            </AppLink>
                        </div>
                        <div className="mobile-indicator">
                            <AppLink href={url.cart()} className="mobile-indicator__button">
                                <span className="mobile-indicator__icon">
                                    <Cart20Svg />
                                    {cart.quantity > 0 && (
                                        <span className="mobile-indicator__counter">
                                            {cart.quantity}
                                        </span>
                                    )}
                                </span>
                            </AppLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default React.memo(MobileHeader);
