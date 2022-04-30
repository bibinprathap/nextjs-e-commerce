// react
import React, { useRef, useState } from 'react';
// third-party
import { FormattedMessage, useIntl } from 'react-intl';
import classNames from 'classnames';
// application
import AppImageNew from '~/components/shared/AppImageNew';
import AppLink from '~/components/shared/AppLink';
import AsyncAction from '~/components/shared/AsyncAction';
import CurrencyFormat from '~/components/shared/CurrencyFormat';
import RadioButton from '~/components/shared/RadioButton';
import Rating from '~/components/shared/Rating';
import url from '~/services/url';
import VehicleForm from '~/components/shared/VehicleForm';
import { Car20Svg, RecycleBin16Svg, Search20Svg } from '~/svg';
import { IProduct } from '~/interfaces/product';
import { IShopCategory } from '~/interfaces/category';
import { IVehicle } from '~/interfaces/vehicle';
import { shopApi } from '~/api';
import { useGlobalMousedown } from '~/services/hooks';
import {
    useGarageAddItem,
    useGarageCurrent,
    useGarageRemoveItem,
    useGarageSetCurrent,
    useUserVehicles,
} from '~/store/garage/garageHooks';

export function Search() {
    const intl = useIntl();
    const [query, setQuery] = useState('');
    const [suggestionsIsOpen, setSuggestionsIsOpen] = useState(false);
    const [hasSuggestions, setHasSuggestions] = useState(false);
    const [products, setProducts] = useState<IProduct[]>([]);
    const [categories, setCategories] = useState<IShopCategory[]>([]);
    const [vehiclePickerIsOpen, setVehiclePickerIsOpen] = useState(false);
    const [vehiclePanel, setVehiclePanel] = useState('list');
    const [addVehicle, setAddVehicle] = useState<IVehicle | null>(null);
    const vehicles = useUserVehicles();
    const garageAddItem = useGarageAddItem();
    const garageRemoveItem = useGarageRemoveItem();
    const hasVehicles = vehicles.length > 0;
    const selectVehicleButtonRef = useRef<HTMLButtonElement>(null);
    const vehiclePickerDropdownRef = useRef<HTMLDivElement>(null);

    const currentVehicle = useGarageCurrent();
    const garageSetCurrent = useGarageSetCurrent();

    const searchCancelFnRef = useRef(() => { });
    const rootRef = useRef<HTMLDivElement>(null);

    const search = (value: string) => {
        searchCancelFnRef.current();

        let canceled = false;

        searchCancelFnRef.current = () => {
            canceled = true;
        };

        shopApi.getSearchSuggestions(value, {
            limitProducts: 3,
            limitCategories: 4,
        }).then((result) => {
            if (canceled) {
                return;
            }

            if (result.products.length === 0 && result.categories.length === 0) {
                setHasSuggestions(false);
                return;
            }

            setHasSuggestions(true);
            setProducts(result.products);
            setCategories(result.categories);
        });

        setQuery(value);
    };

    const toggleSuggestions = (force?: boolean) => {
        setSuggestionsIsOpen((prevState) => {
            const newState = force !== undefined ? force : !prevState;

            if (newState) {
                setVehiclePickerIsOpen(false);
            }

            return newState;
        });
    };

    const toggleVehiclePicker = (force?: boolean): void => {
        setVehiclePickerIsOpen((prevState) => {
            const newState = force !== undefined ? force : !prevState;

            if (newState) {
                setSuggestionsIsOpen(false);
            }

            return newState;
        });
    };

    const handleInputFocus = (event: React.FocusEvent<HTMLInputElement>) => {
        const input = event.currentTarget;

        toggleSuggestions(true);
        search(input.value);
    };

    const handleInputChange = (event: React.FormEvent<HTMLInputElement>) => {
        const input = event.currentTarget;

        search(input.value);
    };

    const handleButtonClick = () => {
        toggleVehiclePicker();
    };

    const handleChangeCurrentVehicle = (event: React.FormEvent<HTMLInputElement>) => {
        const vehicleId = event.currentTarget.value === '' ? null : parseFloat(event.currentTarget.value);

        garageSetCurrent(vehicleId);
    };

    const handleVehicleChange = (vehicle: IVehicle | null) => {
        setAddVehicle(vehicle);
    };

    const handleRootBlur = () => {
        setTimeout(() => {
            if (document.activeElement === document.body) {
                return;
            }

            // Close suggestions if the focus received an external element.
            if (document.activeElement && document.activeElement.closest('.search') !== rootRef.current) {
                toggleSuggestions(false);
            }
        }, 10);
    };

    useGlobalMousedown((event) => {
        const outsideButton = (
            selectVehicleButtonRef.current
            && !selectVehicleButtonRef.current.contains(event.target as HTMLElement)
        );
        const outsideDropdown = (
            vehiclePickerDropdownRef.current
            && !vehiclePickerDropdownRef.current.contains(event.target as HTMLElement)
        );

        if (outsideButton && outsideDropdown) {
            setVehiclePickerIsOpen(false);
        }
    }, [setVehiclePickerIsOpen, selectVehicleButtonRef]);

    useGlobalMousedown((event) => {
        const outside = (
            rootRef.current
            && !rootRef.current.contains(event.target as HTMLElement)
        );

        if (outside && suggestionsIsOpen) {
            setHasSuggestions(false);
        }
    }, [rootRef, suggestionsIsOpen, setHasSuggestions]);

    const searchPlaceholder = currentVehicle
        ? intl.formatMessage({ id: 'INPUT_SEARCH_PLACEHOLDER_VEHICLE' }, currentVehicle as Enumerable<IVehicle>)
        : intl.formatMessage({ id: 'INPUT_SEARCH_PLACEHOLDER' });

    return (
        <div className="search" ref={rootRef} onBlur={handleRootBlur}>
            <form className="search__body">
                <div className="search__shadow" />

                <label className="sr-only" htmlFor="site-search">
                    <FormattedMessage id="INPUT_SEARCH_LABEL" />
                </label>

                <input
                    type="text"
                    className="search__input"
                    id="site-search"
                    autoCapitalize="off"
                    autoComplete="off"
                    spellCheck="false"
                    name="search"
                    value={query}
                    placeholder={searchPlaceholder}
                    onFocus={handleInputFocus}
                    onChange={handleInputChange}
                />

                <button
                    type="button"
                    className={classNames('search__button search__button--start', {
                        'search__button--hover': vehiclePickerIsOpen,
                    })}
                    onClick={handleButtonClick}
                    ref={selectVehicleButtonRef}
                >
                    <span className="search__button-icon">
                        <Car20Svg />
                    </span>
                    <span className="search__button-title">
                        <FormattedMessage id="BUTTON_SEARCH_SELECT_VEHICLE_DESKTOP" />
                    </span>
                </button>

                <button className="search__button search__button--end" type="submit">
                    <span className="search__button-icon">
                        <Search20Svg />
                    </span>
                </button>

                <div className="search__box" />
                <div className="search__decor">
                    <div className="search__decor-start" />
                    <div className="search__decor-end" />
                </div>

                <div
                    className={classNames('search__dropdown', 'search__dropdown--suggestions', 'suggestions', {
                        'search__dropdown--open': suggestionsIsOpen && hasSuggestions,
                    })}
                >
                    {products.length > 0 && (
                        <div className="suggestions__group">
                            <div className="suggestions__group-title">
                                <FormattedMessage id="TEXT_PRODUCTS" />
                            </div>
                            <div className="suggestions__group-content">
                                {products.map((product) => (
                                    <AppLink
                                        key={product.id}
                                        href={url.product(product)}
                                        className="suggestions__item suggestions__product"
                                        onClick={() => toggleSuggestions(false)}
                                    >
                                        <div className="suggestions__product-image">
                                            <AppImageNew src={product.images && product.images[0]} />
                                        </div>
                                        <div className="suggestions__product-info">
                                            <div className="suggestions__product-name">
                                                {product.name}
                                            </div>
                                            <div className="suggestions__product-rating">
                                                <div className="suggestions__product-rating-stars">
                                                    <Rating value={product.rating || 0} />
                                                </div>
                                                <div className="suggestions__product-rating-label">
                                                    <FormattedMessage
                                                        id="TEXT_RATING_LABEL"
                                                        values={{
                                                            rating: product.rating,
                                                            reviews: product.reviews,
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className=" suggestions__product-price">
                                            <CurrencyFormat value={product.price} />
                                        </div>

                                    </AppLink>
                                ))}
                            </div>
                        </div>
                    )}
                    {categories.length > 0 && (
                        <div className="suggestions__group">
                            <div className="suggestions__group-title">
                                <FormattedMessage id="TEXT_CATEGORIES" />
                            </div>
                            <div className="suggestions__group-content">
                                {categories.map((category) => (
                                    <AppLink
                                        key={category.id}
                                        href={url.category(category)}
                                        className="suggestions__item suggestions__category"
                                        onClick={() => toggleSuggestions(false)}
                                    >
                                        {category.name}
                                    </AppLink>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                <div
                    className={classNames('search__dropdown', 'search__dropdown--vehicle-picker', 'vehicle-picker', {
                        'search__dropdown--open': vehiclePickerIsOpen,
                    })}
                    ref={vehiclePickerDropdownRef}
                >
                    <div className="search__dropdown-arrow" />

                    <div
                        className={classNames('vehicle-picker__panel', {
                            'vehicle-picker__panel--active': vehiclePanel === 'list' && hasVehicles,
                        })}
                    >
                        <div className="vehicle-picker__panel-body">
                            <div className="vehicle-picker__text">
                                <FormattedMessage id="TEXT_SELECT_VEHICLE_TO_FIND_EXACT_FIT_PARTS" />
                            </div>

                            <div className="vehicles-list">
                                <div className="vehicles-list__body">
                                    {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                                    <label className="vehicles-list__item">
                                        <RadioButton
                                            className="vehicles-list__item-radio"
                                            name="header-current-vehicle"
                                            defaultValue=""
                                            checked={currentVehicle === null}
                                            onChange={handleChangeCurrentVehicle}
                                        />
                                        <span className=" vehicles-list__item-info">
                                            <span className=" vehicles-list__item-name">
                                                <FormattedMessage id="TEXT_ALL_VEHICLES" />
                                            </span>
                                        </span>
                                    </label>
                                    {vehicles.map((vehicle, index) => (
                                        <React.Fragment key={index}>
                                            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                                            <label className="vehicles-list__item">
                                                <RadioButton
                                                    className="vehicles-list__item-radio"
                                                    name="header-current-vehicle"
                                                    defaultValue={vehicle.id}
                                                    checked={currentVehicle?.id === vehicle.id}
                                                    onChange={handleChangeCurrentVehicle}
                                                />
                                                <span className="vehicles-list__item-info">
                                                    <span className="vehicles-list__item-name">
                                                        {`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
                                                    </span>
                                                    <span className="vehicles-list__item-details">
                                                        <FormattedMessage
                                                            id="TEXT_VEHICLE_ENGINE"
                                                            values={{ engine: vehicle.engine }}
                                                        />
                                                    </span>
                                                </span>
                                                <AsyncAction
                                                    action={() => garageRemoveItem(vehicle.id)}
                                                    render={({ run, loading }) => (
                                                        <button
                                                            type="button"
                                                            className={classNames('vehicles-list__item-remove', {
                                                                'vehicles-list__item-remove--loading': loading,
                                                            })}
                                                            onClick={run}
                                                        >
                                                            <RecycleBin16Svg />
                                                        </button>
                                                    )}
                                                />
                                            </label>
                                        </React.Fragment>
                                    ))}
                                </div>
                            </div>

                            <div className="vehicle-picker__actions">
                                <button
                                    type="button"
                                    className="btn btn-primary btn-sm"
                                    onClick={() => setVehiclePanel('form')}
                                >
                                    <FormattedMessage id="BUTTON_ADD_VEHICLE" />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div
                        className={classNames('vehicle-picker__panel', {
                            'vehicle-picker__panel--active': vehiclePanel === 'form' || !hasVehicles,
                        })}
                    >
                        <div className="vehicle-picker__panel-body">
                            <VehicleForm location="search" onVehicleChange={handleVehicleChange} />
                            <div className="vehicle-picker__actions">
                                {hasVehicles && (
                                    <div className="search__car-selector-link">
                                        {/* eslint-disable-next-line */}
                                        <AppLink
                                            anchor
                                            onClick={(event) => {
                                                event.preventDefault();

                                                setVehiclePanel('list');
                                            }}
                                        >
                                            <FormattedMessage id="BUTTON_BACK_TO_LIST" />
                                        </AppLink>
                                    </div>
                                )}

                                <AsyncAction
                                    action={() => (addVehicle ? garageAddItem(addVehicle.id) : Promise.resolve())}
                                    render={({ run, loading }) => (
                                        <button
                                            type="button"
                                            className={classNames('btn', 'btn-primary', 'btn-sm', {
                                                'btn-loading': loading,
                                            })}
                                            disabled={addVehicle === null}
                                            onClick={run}
                                        >
                                            <FormattedMessage id="BUTTON_ADD_VEHICLE" />
                                        </button>
                                    )}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Search;
