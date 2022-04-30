// react
import React, { useCallback, useEffect, useState } from 'react';
// third-party
import classNames from 'classnames';
import { FormattedMessage } from 'react-intl';
import { Modal } from 'reactstrap';
// application
import AsyncAction from '~/components/shared/AsyncAction';
import RadioButton from '~/components/shared/RadioButton';
import VehicleForm from '~/components/shared/VehicleForm';
import { Cross12Svg, RecycleBin16Svg } from '~/svg';
import { IVehicle } from '~/interfaces/vehicle';
import { useGarageAddItem, useGarageRemoveItem, useUserVehicles } from '~/store/garage/garageHooks';

interface Props {
    value?: IVehicle | null;
    isOpen?: boolean;
    onClose?: () => void;
    onSelect?: (vehicle: IVehicle | null) => void;
}

function VehiclePickerModal(props: Props) {
    const {
        value = null,
        isOpen = false,
        onClose,
        onSelect,
    } = props;
    const vehicles = useUserVehicles();
    const garageRemoveItem = useGarageRemoveItem();
    const garageAddItem = useGarageAddItem();
    const [currentPanel, setCurrentPanel] = useState('list');
    const [innerValue, setInnerValue] = useState<IVehicle | null>(null);
    const [controlValue, setControlValue] = useState<IVehicle | null>(null);

    const onSelectClick = () => {
        if (onSelect) {
            onSelect(innerValue);
        }
        if (onClose) {
            onClose();
        }
    };

    const toggle = useCallback(() => {
        if (isOpen && onClose) {
            onClose();
        }
    }, [isOpen, onClose]);

    const onAddVehicleClick = async () => {
        if (!controlValue) {
            return;
        }

        await garageAddItem(controlValue.id);

        setCurrentPanel('list');
        setInnerValue(controlValue);
    };

    useEffect(() => {
        if (isOpen) {
            setCurrentPanel('list');
            setInnerValue(value);
        }
    }, [isOpen, value]);

    return (
        <Modal isOpen={isOpen} toggle={toggle} centered className="vehicle-picker-modal">
            <button type="button" className="vehicle-picker-modal__close" onClick={onClose}>
                <Cross12Svg />
            </button>

            <div
                className={classNames('vehicle-picker-modal__panel', {
                    'vehicle-picker-modal__panel--active': currentPanel === 'list' && vehicles.length !== 0,
                })}
            >
                <div className="vehicle-picker-modal__title card-title">
                    <FormattedMessage id="HEADER_SELECT_VEHICLE" />
                </div>

                <div className="vehicle-picker-modal__text">
                    <FormattedMessage id="TEXT_SELECT_VEHICLE_TO_FIND_EXACT_FIT_PARTS" />
                </div>

                <div className="vehicles-list">
                    <div className="vehicles-list__body">
                        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                        <label className="vehicles-list__item">
                            <RadioButton
                                className="vehicles-list__item-radio"
                                checked={innerValue === null}
                                onChange={() => setInnerValue(null)}
                            />
                            <span className="vehicles-list__item-info">
                                <span className="vehicles-list__item-name">
                                    <FormattedMessage id="TEXT_ALL_VEHICLES" />
                                </span>
                            </span>
                        </label>
                        {vehicles.map((vehicle, vehicleIdx) => (
                            // eslint-disable-next-line jsx-a11y/label-has-associated-control
                            <label key={vehicleIdx} className="vehicles-list__item">
                                <RadioButton
                                    className="vehicles-list__item-radio"
                                    checked={innerValue !== null && innerValue.id === vehicle.id}
                                    onChange={() => setInnerValue(vehicle)}
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
                        ))}
                    </div>
                </div>

                <button
                    type="button"
                    className="btn btn-sm btn-secondary btn-block mt-2 vehicle-picker-modal__add-button"
                    onClick={() => setCurrentPanel('form')}
                >
                    <FormattedMessage id="BUTTON_ADD_VEHICLE_LONG" />
                </button>

                <div className="vehicle-picker-modal__actions">
                    <button
                        type="button"
                        className="btn btn-sm btn-secondary"
                        onClick={onClose}
                    >
                        <FormattedMessage id="BUTTON_CANCEL" />
                    </button>
                    <button
                        type="button"
                        className="btn btn-sm btn-primary"
                        onClick={onSelectClick}
                    >
                        <FormattedMessage id="BUTTON_SELECT_VEHICLE" />
                    </button>
                </div>
            </div>

            <div
                className={classNames('vehicle-picker-modal__panel', {
                    'vehicle-picker-modal__panel--active': currentPanel === 'form' || vehicles.length === 0,
                })}
            >
                <div className="vehicle-picker-modal__title card-title">
                    <FormattedMessage id="HEADER_ADD_VEHICLE" />
                </div>
                <VehicleForm location="modal" onVehicleChange={setControlValue} />
                <div className="vehicle-picker-modal__actions">
                    {vehicles.length !== 0 && (
                        <button
                            type="button"
                            className="btn btn-sm btn-secondary"
                            onClick={() => setCurrentPanel('list')}
                        >
                            <FormattedMessage id="BUTTON_BACK_TO_LIST" />
                        </button>
                    )}

                    <AsyncAction
                        action={onAddVehicleClick}
                        render={({ run, loading }) => (
                            <button
                                type="button"
                                className={classNames('btn', 'btn-sm', 'btn-primary', {
                                    'btn-loading': loading,
                                })}
                                disabled={controlValue === null}
                                onClick={run}
                            >
                                <FormattedMessage id="BUTTON_ADD_VEHICLE" />
                            </button>
                        )}
                    />
                </div>
            </div>
        </Modal>
    );
}

export default VehiclePickerModal;
