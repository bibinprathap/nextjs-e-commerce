// react
import React from 'react';
// third-party
import classNames from 'classnames';
import { FormattedMessage } from 'react-intl';
// application
import { IAddressData } from '~/interfaces/address';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    address: IAddressData;
    label?: React.ReactNode;
    featured?: boolean;
    loading?: boolean;
    footer?: React.ReactNode;
}

function AddressCard(props: Props) {
    const {
        address,
        label,
        featured = false,
        loading = false,
        className,
        footer,
        ...rootProps
    } = props;

    const rootClasses = classNames('card', 'address-card', className, {
        'card--loading': loading,
        'address-card--featured': featured,
    });

    return (
        <div className={rootClasses} {...rootProps}>
            <div className="card__loader" />
            {label && (
                <div className="address-card__badge tag-badge tag-badge--theme">{label}</div>
            )}

            <div className="address-card__body">
                <div className="address-card__name">
                    {`${address.firstName} ${address.lastName}`}
                </div>
                {/* <div className="address-card__row">
                    <FormattedMessage id={`COUNTRY_NAME_${address.country}`} />
                    <br />
                    {`${address.postcode}, ${address.city}`}
                    <br />
                    {`${address.address1} ${address.address2}`}
                </div> */}
                <div className="address-card__row">
                    <div className="address-card__row-title">
                        <FormattedMessage id="TEXT_PHONE_NUMBER" />
                    </div>
                    <div className="address-card__row-content">{address.phone}</div>
                </div>
                <div className="address-card__row">
                    <div className="address-card__row-title">
                        <FormattedMessage id="TEXT_EMAIL_ADDRESS" />
                    </div>
                    <div className="address-card__row-content">{address.email}</div>
                </div>

                {footer && (
                    <div className="address-card__footer">
                        {footer}
                    </div>
                )}
            </div>
        </div>
    );
}

export default AddressCard;
