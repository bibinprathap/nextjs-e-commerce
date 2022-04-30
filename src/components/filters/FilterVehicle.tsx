// react
import React, { useEffect, useState } from 'react';
// third-party
import { FormattedMessage } from 'react-intl';
// application
import Checkbox from '~/components/shared/Checkbox';
import VehiclePickerModal from '~/components/shared/VehiclePickerModal';
import { IVehicle } from '~/interfaces/vehicle';
import { IVehicleFilter, IVehicleFilterValue } from '~/interfaces/filter';
import { useCurrentVehicle } from '~/services/current-vehicle';

interface Props {
    options: IVehicleFilter;
    value: IVehicleFilterValue;
    onChangeValue?: (event: { filter: IVehicleFilter, value: IVehicleFilterValue }) => void;
}

function FilterVehicle(props: Props) {
    const { options, value, onChangeValue } = props;
    const [currentVehicle, setCurrentVehicle] = useCurrentVehicle();
    const [vehiclePickerIsOpen, setVehiclePickerIsOpen] = useState(false);
    const [initialVehicle] = useState(options.vehicle);

    const updateValue = (newValue: IVehicleFilterValue) => {
        if (onChangeValue) {
            onChangeValue({ filter: options, value: newValue });
        }
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked && currentVehicle) {
            updateValue(currentVehicle.id);
        } else {
            updateValue(null);
        }
    };

    const showVehiclePicker = () => {
        setVehiclePickerIsOpen(true);
    };

    const onVehiclePickerClose = () => {
        setVehiclePickerIsOpen(false);
    };

    const onVehiclePickerSelect = (selectedVehicle: IVehicle | null) => {
        setCurrentVehicle(selectedVehicle || null);

        if (value !== null) {
            updateValue(selectedVehicle?.id || null);
        }
    };

    useEffect(() => {
        if (initialVehicle === null) {
            return;
        }

        setTimeout(() => {
            setCurrentVehicle(initialVehicle || null);
        }, 0);
    }, [setCurrentVehicle, initialVehicle]);

    return (
        <div className="filter-vehicle">
            <VehiclePickerModal
                value={currentVehicle}
                isOpen={vehiclePickerIsOpen}
                onClose={onVehiclePickerClose}
                onSelect={onVehiclePickerSelect}
            />

            {currentVehicle !== null && (
                <ul className="filter-vehicle__list">
                    <li className="filter-vehicle__item">
                        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                        <label className="filter-vehicle__item-label">
                            <Checkbox
                                className="filter-list__input"
                                checked={value !== null}
                                onChange={handleChange}
                            />
                            <span className="filter-vehicle__item-title">
                                <FormattedMessage id="INPUT_ONLY_EXACT_FIT_PARTS_LABEL" />
                            </span>
                        </label>
                    </li>
                    <li className="filter-vehicle__vehicle">
                        <div className="filter-vehicle__vehicle-title">
                            {`${currentVehicle.year} ${currentVehicle.make} ${currentVehicle.model}`}
                        </div>
                        <div className="filter-vehicle__vehicle-subtitle">
                            {currentVehicle.engine}
                        </div>
                    </li>
                </ul>
            )}
            {currentVehicle === null && (
                <div className="filter-vehicle__empty">
                    <FormattedMessage id="TEXT_VEHICLE_FILTER_HELP" />
                </div>
            )}

            <div className="filter-vehicle__button">
                <button type="button" className="btn btn-xs btn-secondary" onClick={showVehiclePicker}>
                    <FormattedMessage id="BUTTON_SELECT_VEHICLE" />
                </button>
            </div>
        </div>
    );
}

export default FilterVehicle;
