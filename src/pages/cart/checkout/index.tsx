/* eslint-disable no-alert */

// react
import React, { useEffect } from 'react';
// third-party
import classNames from 'classnames';
import { FormattedMessage, useIntl } from 'react-intl';
import { FormProvider, useForm } from 'react-hook-form';
// application
import AppLink from '~/components/shared/AppLink';
import BlockHeader from '~/components/blocks/BlockHeader';
import BlockSpace from '~/components/blocks/BlockSpace';
import Checkbox from '~/components/shared/Checkbox';
import CheckoutCart from '~/components/shop/CheckoutCart';
import CheckoutForm from '~/components/shop/CheckoutForm';
import CheckoutPayments from '~/components/shop/CheckoutPayments';
import PageTitle from '~/components/shared/PageTitle';
import url from '~/services/url';
import { getAddressFormDefaultValue, IAddressForm } from '~/components/shared/AddressForm';
import { getRegisterFormDefaultValue, IRegisterForm } from '~/components/shared/RegisterForm';
import { hrefToRouterArgs, useAppRouter } from '~/services/router';
import { ICheckoutData } from '~/api/base';
import { shopApi } from '~/api';
import { useAsyncAction } from '~/store/hooks';
import { useCart } from '~/store/cart/cartHooks';
import { useUser, useUserSignUp } from '~/store/user/userHooks';

interface IForm {
    billingAddress: IAddressForm;
    createAccount: boolean;
    account: IRegisterForm;
    shipToDifferentAddress: boolean;
    shippingAddress: IAddressForm;
    comment: string;
    payment: string;
    agree: boolean;
}

function Page() {
    const router = useAppRouter();
    const intl = useIntl();
    const user = useUser();
    const userSignUp = useUserSignUp();
    const cart = useCart();
    const formMethods = useForm<IForm>({
        defaultValues: {
            billingAddress: getAddressFormDefaultValue(),
            createAccount: false,
            account: getRegisterFormDefaultValue(),
            shipToDifferentAddress: false,
            shippingAddress: getAddressFormDefaultValue(),
            comment: '',
            payment: 'bank',
        },
    });
    const { handleSubmit, register, errors } = formMethods;
    const [checkout, checkoutInProgress] = useAsyncAction(async (data: IForm) => {
        const { billingAddress } = data;
        const shippingAddress = data.shipToDifferentAddress ? data.shippingAddress : data.billingAddress;

        const checkoutData: ICheckoutData = {
            payment: data.payment,
            items: cart.items.map((item) => ({
                productId: item.product.id,
                options: item.options.map((option) => ({
                    name: option.name,
                    value: option.value,
                })),
                quantity: item.quantity,
            })),
            billingAddress,
            shippingAddress,
            comment: data.comment,
        };

        if (data.createAccount) {
            try {
                await userSignUp(data.account.email, data.account.password);
            } catch (error) {
                alert(intl.formatMessage({ id: `ERROR_API_${error.message}` }));

                return;
            }
        }

        const order = await shopApi.checkout(checkoutData);

        await router.push(...hrefToRouterArgs(url.checkoutSuccess(order)));
    }, [intl, cart, userSignUp, router]);

    useEffect(() => {
        if (cart.stateFrom === 'client' && cart.items.length < 1) {
            router.replace(url.cart()).then();
        }
    }, [cart.stateFrom, cart.items.length, router]);

    if (cart.items.length < 1) {
        return null;
    }

    return (
        <React.Fragment>
            <PageTitle>{intl.formatMessage({ id: 'HEADER_CHECKOUT' })}</PageTitle>

            <BlockHeader
                pageTitle={<FormattedMessage id="HEADER_CHECKOUT" />}
                breadcrumb={[
                    { title: (<FormattedMessage id="LINK_HOME" />), url: url.home() },
                    { title: (<FormattedMessage id="LINK_CART" />), url: url.cart() },
                    { title: (<FormattedMessage id="LINK_CHECKOUT" />), url: url.checkout() },
                ]}
            />

            <FormProvider {...formMethods}>
                <form className="checkout block" onSubmit={handleSubmit(checkout)}>
                    <div className="container container--max--xl">
                        <div className="row">
                            {!user && (
                                <div className="col-12 mb-3">
                                    <div className="alert alert-lg alert-primary">
                                        <FormattedMessage
                                            id="TEXT_ALERT_RETURNING_CUSTOMER"
                                            values={{
                                                link: (
                                                    <AppLink href={url.signIn()}>
                                                        <FormattedMessage id="TEXT_ALERT_RETURNING_CUSTOMER_LINK" />
                                                    </AppLink>
                                                ),
                                            }}
                                        />
                                    </div>
                                </div>
                            )}

                            <div className="col-12 col-lg-6 col-xl-7">
                                <div className="card mb-lg-0">
                                    <div className="card-body card-body--padding--2">
                                        <CheckoutForm />
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-lg-6 col-xl-5 mt-4 mt-lg-0">
                                <div className="card mb-0">
                                    <div className="card-body card-body--padding--2">
                                        <h3 className="card-title">
                                            <FormattedMessage id="HEADER_YOUR_ORDER" />
                                        </h3>

                                        <CheckoutCart />

                                        {/* <CheckoutPayments /> */}

                                        <div className="checkout__agree form-group">
                                            <div className="form-check">
                                                <Checkbox
                                                    id="checkout-form-agree"
                                                    name="agree"
                                                    className={classNames('form-check-input', {
                                                        'is-invalid': errors.agree,
                                                    })}
                                                    inputRef={register({ required: true })}
                                                />
                                                <label className="form-check-label" htmlFor="checkout-form-agree">
                                                    <FormattedMessage
                                                        id="INPUT_TERMS_AGREE_LABEL"
                                                        values={{
                                                            link: (
                                                                <AppLink href={url.pageTerms()} target="_blank">
                                                                    <FormattedMessage
                                                                        id="INPUT_TERMS_AGREE_LABEL_LINK"
                                                                    />
                                                                </AppLink>
                                                            ),
                                                        }}
                                                    />
                                                </label>
                                            </div>
                                        </div>

                                        <button
                                            type="submit"
                                            className={classNames(
                                                'btn',
                                                'btn-primary',
                                                'btn-xl',
                                                'btn-block',
                                                {
                                                    'btn-loading': checkoutInProgress,
                                                },
                                            )}
                                        >
                                            <FormattedMessage id="BUTTON_PLACE_ORDER" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </FormProvider>

            <BlockSpace layout="before-footer" />
        </React.Fragment>
    );
}

export default Page;
