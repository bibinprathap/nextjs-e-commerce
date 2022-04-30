// react
import React, { useEffect, useState } from 'react';
// third-party
import classNames from 'classnames';
import { FormattedMessage, useIntl } from 'react-intl';
import { FormProvider, useForm } from 'react-hook-form';
// application
import AccountLayout from '~/components/account/AccountLayout';
import AddressForm, { getAddressFormDefaultValue, IAddressForm } from '~/components/shared/AddressForm';
import Checkbox from '~/components/shared/Checkbox';
import PageTitle from '~/components/shared/PageTitle';
import url from '~/services/url';
import { accountApi } from '~/api';
import { IAddress } from '~/interfaces/address';
import { IEditAddressData } from '~/api/base';
import { useAppRouter } from '~/services/router';
import { useAsyncAction } from '~/store/hooks';

interface IForm {
    address: IAddressForm;
    default: boolean;
}

function Page() {
    const router = useAppRouter();
    const intl = useIntl();
    const addressId = router.query.id === 'new' || typeof router.query.id !== 'string'
        ? null
        : parseFloat(router.query.id);

    const formMethods = useForm<IForm>({
        defaultValues: {
            address: getAddressFormDefaultValue(),
            default: false,
        },
    });
    const { register, handleSubmit, reset } = formMethods;

    const [firstOrDefaultAddress, setFirstOrDefaultAddress] = useState(false);
    const [submit, submitInProgress] = useAsyncAction((data: IForm) => {
        const addressData: IEditAddressData = {
            ...data.address,
            default: data.default || firstOrDefaultAddress,
        };

        let saveMethod: Promise<IAddress>;

        if (addressId) {
            saveMethod = accountApi.editAddress(addressId, addressData);
        } else {
            saveMethod = accountApi.addAddress(addressData);
        }

        return saveMethod.then(() => router.push(url.accountAddresses()));
    }, [router, addressId, firstOrDefaultAddress]);

    useEffect(() => {
        let canceled = false;

        (async () => {
            const [address, defaultAddress] = await Promise.all([
                addressId ? accountApi.getAddress(addressId) : Promise.resolve(null),
                accountApi.getDefaultAddress(),
            ]);

            if (canceled) {
                return;
            }

            const firstOrDefaultAddress = defaultAddress === null || (address !== null && address.default);

            setFirstOrDefaultAddress(firstOrDefaultAddress);

            reset({
                address: getAddressFormDefaultValue(address),
                default: firstOrDefaultAddress,
            });
        })();

        return () => {
            canceled = true;
        };
    }, [reset, addressId]);

    return (
        <div className="card">
            <PageTitle>
                {addressId
                    ? intl.formatMessage({ id: 'HEADER_EDIT_ADDRESS' })
                    : intl.formatMessage({ id: 'HEADER_NEW_ADDRESS' })}
            </PageTitle>

            <div className="card-header">
                <h5>
                    {addressId
                        ? <FormattedMessage id="HEADER_EDIT_ADDRESS" />
                        : <FormattedMessage id="HEADER_NEW_ADDRESS" /> }
                </h5>
            </div>
            <div className="card-divider" />
            <div className="card-body card-body--padding--2">
                <div className="row no-gutters">
                    <FormProvider {...formMethods}>
                        <form className="col-12 col-lg-10 col-xl-8" onSubmit={handleSubmit(submit)}>
                            <AddressForm
                                namespace="address"
                                idPrefix="address"
                            />

                            <div className="form-group mt-3">
                                <div className="form-check">
                                    <Checkbox
                                        id="address-form-id-default"
                                        name="default"
                                        className="form-check-input"
                                        disabled={firstOrDefaultAddress}
                                        inputRef={register()}
                                    />
                                    <label htmlFor="address-form-id-default" className="form-check-label">
                                        <FormattedMessage id="INPUT_SET_AS_MY_DEFAULT_ADDRESS_LABEL" />
                                    </label>
                                </div>
                            </div>

                            <div className="form-group mb-0 pt-3 mt-3">
                                <button
                                    type="submit"
                                    className={classNames('btn', 'btn-primary', {
                                        'btn-loading': submitInProgress,
                                    })}
                                >
                                    <FormattedMessage id="BUTTON_SAVE" />
                                </button>
                            </div>
                        </form>
                    </FormProvider>
                </div>
            </div>
        </div>
    );
}

Page.Layout = AccountLayout;

export default Page;
