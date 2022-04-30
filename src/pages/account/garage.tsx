// react
import React, { useState } from 'react';
// third-party
import classNames from 'classnames';
import { FormattedMessage, useIntl } from 'react-intl';
// application
import AccountLayout from '~/components/account/AccountLayout';
import AppLink from '~/components/shared/AppLink';
import AsyncAction from '~/components/shared/AsyncAction';
import PageTitle from '~/components/shared/PageTitle';
import url from '~/services/url';
import VehicleForm from '~/components/shared/VehicleForm';
import { IVehicle } from '~/interfaces/vehicle';
import { RecycleBin16Svg } from '~/svg';
import { useGarageAddItem, useGarageRemoveItem, useUserVehicles } from '~/store/garage/garageHooks';

function Page() {
    const intl = useIntl();
    const vehicles = useUserVehicles();
    const [vehicle, setVehicle] = useState<IVehicle | null>(null);
    const garageAddItem = useGarageAddItem();
    const garageRemoveItem = useGarageRemoveItem();

    return (
        <div className="card">
            <PageTitle>{intl.formatMessage({ id: 'HEADER_GARAGE' })}</PageTitle>

            {vehicles.length > 0 && (
                <React.Fragment>
                    <div className="card-header">
                        <h5><FormattedMessage id="HEADER_GARAGE" /></h5>
                    </div>
                    <div className="card-divider" />

                    <div className="card-body card-body--padding--2">
                        <div className="vehicles-list vehicles-list--layout--account">
                            <div className="vehicles-list__body">
                                {vehicles.map((vehicle, index) => (
                                    <div key={index} className="vehicles-list__item">
                                        <div className="vehicles-list__item-info">
                                            <div className="vehicles-list__item-name">
                                                {`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
                                            </div>
                                            <div className="vehicles-list__item-details">
                                                <FormattedMessage
                                                    id="TEXT_VEHICLE_ENGINE"
                                                    values={{ engine: vehicle.engine }}
                                                />
                                            </div>
                                            <div className="vehicles-list__item-links">
                                                <AppLink
                                                    href={url.products({
                                                        filters: {
                                                            filter_vehicle: vehicle.id.toString(),
                                                        },
                                                    })}
                                                >
                                                    <FormattedMessage id="LINK_SHOW_PARTS" />
                                                </AppLink>
                                            </div>
                                        </div>
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
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="card-divider" />
                </React.Fragment>
            )}

            <div className="card-header">
                <h5><FormattedMessage id="HEADER_ADD_VEHICLE" /></h5>
            </div>
            <div className="card-divider" />

            <div className="card-body card-body--padding--2">
                <VehicleForm location="account" onVehicleChange={setVehicle} />

                <div className="mt-4 pt-3">
                    <AsyncAction
                        action={() => (vehicle ? garageAddItem(vehicle.id) : Promise.resolve())}
                        render={({ run, loading }) => (
                            <button
                                type="button"
                                className={classNames('btn', 'btn-primary', {
                                    'btn-loading': loading,
                                })}
                                disabled={vehicle === null}
                                onClick={run}
                            >
                                <FormattedMessage id="BUTTON_ADD_VEHICLE" />
                            </button>
                        )}
                    />
                </div>
            </div>
        </div>
    );
}

Page.Layout = AccountLayout;

export default Page;
