// react
import React from 'react';
// third-party
import { FormattedMessage, useIntl } from 'react-intl';
import { useFormContext } from 'react-hook-form';
// application
import AddressForm from '~/components/shared/AddressForm';
import Checkbox from '~/components/shared/Checkbox';
import Collapse from '~/components/shared/Collapse';
import RegisterForm from '~/components/shared/RegisterForm';
import { useUser } from '~/store/user/userHooks';

function CheckoutForm() {
    const user = useUser();
    const intl = useIntl();
    const { register, watch } = useFormContext();
    const createAccount = watch('createAccount');
    // const shipToDifferentAddress = watch('shipToDifferentAddress');

    return (
        <React.Fragment>
            <h3 className="card-title">
                <FormattedMessage id="HEADER_BILLING_DETAILS" />
            </h3>

            <div className="form-group d-block">
                <AddressForm
                    namespace="billingAddress"
                    idPrefix="checkout-billing-address"
                />
            </div>

            <div className="form-group">
                {!user && (
                    <React.Fragment>
                        <div className="form-check">
                            <Checkbox
                                className="form-check-input"
                                name="createAccount"
                                id="form-checkout-create-account"
                                inputRef={register}
                            />
                            <label className="form-check-label" htmlFor="form-checkout-create-account">
                                <FormattedMessage id="INPUT_CREATE_ACCOUNT_LABEL" />
                            </label>
                        </div>

                        <Collapse<HTMLDivElement, HTMLDivElement>
                            open={createAccount}
                            toggleClass="collapse-area--open"
                            render={({ setItemRef }) => (
                                <div className="collapse-area" ref={setItemRef}>
                                    <div className="pt-2" />

                                    <div className="d-block mb-2 pb-1">
                                        <RegisterForm
                                            namespace="account"
                                            disabled={!createAccount}
                                            idPrefix="checkout-account"
                                        />
                                    </div>
                                </div>
                            )}
                        />

                        <div className="mt-1" />
                    </React.Fragment>
                )}

                {/* <div className="form-check">
                    <Checkbox
                        className="form-check-input"
                        name="shipToDifferentAddress"
                        id="form-checkout-ship-to-different-address"
                        inputRef={register}
                    />
                    <label className="form-check-label" htmlFor="form-checkout-ship-to-different-address">
                        <FormattedMessage id="INPUT_SHIP_TO_DIFFERENT_ADDRESS_LABEL" />
                    </label>
                </div> */}

                {/* <Collapse<HTMLDivElement, HTMLDivElement>
                    open={shipToDifferentAddress}
                    toggleClass="collapse-area--open"
                    render={({ setItemRef }) => (
                        <div className="collapse-area" ref={setItemRef}>
                            <div className="pt-2" />

                            <AddressForm
                                namespace="shippingAddress"
                                disabled={!shipToDifferentAddress}
                                idPrefix="checkout-shipping-address"
                            />
                        </div>
                    )}
                /> */}
            </div>

            <div className="form-group mb-0">
                <label htmlFor="checkout-comment">
                    <FormattedMessage id="INPUT_ORDER_NOTES_LABEL" />
                    <span className="text-muted">
                        {' ('}
                        <FormattedMessage id="TEXT_OPTIONAL" />
                        )
                    </span>
                </label>
                <textarea
                    id="checkout-comment"
                    name="comment"
                    className="form-control"
                    placeholder={intl.formatMessage({ id: 'INPUT_ORDER_NOTES_PLACEHOLDER' })}
                    rows={4}
                    ref={register}
                />
            </div>
        </React.Fragment>
    );
}

export default CheckoutForm;
