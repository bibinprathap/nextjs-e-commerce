// react
import React, { useEffect, useState } from 'react';
// third-party
import { FormattedMessage, useIntl } from 'react-intl';
// application
import AccountLayout from '~/components/account/AccountLayout';
import AddressCard from '~/components/shared/AddressCard';
import AppLink from '~/components/shared/AppLink';
import CurrencyFormat from '~/components/shared/CurrencyFormat';
import PageTitle from '~/components/shared/PageTitle';
import url from '~/services/url';
import { accountApi } from '~/api';
import { IOrder } from '~/interfaces/order';
import { useAppRouter } from '~/services/router';

function Page() {
    const intl = useIntl();
    const router = useAppRouter();
    const orderId = parseFloat(typeof router.query.id === 'string' ? router.query.id : '0');
    const [order, setOrder] = useState<IOrder | null>(null);

    useEffect(() => {
        let canceled = false;

        accountApi.getOrderById(orderId).then((result) => {
            if (canceled) {
                return;
            }

            setOrder(result);
        });

        return () => {
            canceled = true;
        };
    }, [orderId]);

    if (!order) {
        return null;
    }

    return (
        <React.Fragment>
            <div className="card">
                <PageTitle>{intl.formatMessage({ id: 'TEXT_ORDER_WITH_NUMBER' }, { number: order.number })}</PageTitle>

                <div className="order-header">
                    <div className="order-header__actions">
                        <AppLink href={url.accountOrders()} className="btn btn-xs btn-secondary">
                            <FormattedMessage id="BUTTON_BACK_TO_LIST" />
                        </AppLink>
                    </div>
                    <h5 className="order-header__title">
                        <FormattedMessage id="TEXT_ORDER_WITH_NUMBER" values={{ number: order.number }} />
                    </h5>
                    <div className="order-header__subtitle">
                        <FormattedMessage
                            id="TEXT_ORDER_SUMMARY"
                            values={{
                                date: (
                                    <mark>
                                        <FormattedMessage
                                            id="TEXT_ORDER_SUMMARY_FORMAT_DATE"
                                            values={{ date: Date.parse(order.createdAt) }}
                                        />
                                    </mark>
                                ),
                                status: <mark><FormattedMessage id={`TEXT_ORDER_STATUS_${order.status}`} /></mark>,
                            }}
                        />
                    </div>
                </div>
                <div className="card-divider" />
                <div className="card-table">
                    <div className="table-responsive-sm">
                        <table>
                            <thead>
                                <tr>
                                    <th>
                                        <FormattedMessage id="TABLE_PRODUCT" />
                                    </th>
                                    <th>
                                        <FormattedMessage id="TABLE_TOTAL" />
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="card-table__body card-table__body--merge-rows">
                                {order.items.map((item, index) => (
                                    <tr key={index}>
                                        <td>{`${item.product.name} × ${item.quantity}`}</td>
                                        <td><CurrencyFormat value={item.total} /></td>
                                    </tr>
                                ))}
                            </tbody>
                            {order.totals.length > 0 && (
                                <tbody className="card-table__body card-table__body--merge-rows">
                                    <tr>
                                        <th>
                                            <FormattedMessage id="TABLE_SUBTOTAL" />
                                        </th>
                                        <td><CurrencyFormat value={order.subtotal} /></td>
                                    </tr>
                                    {order.totals.map((total, index) => (
                                        <tr key={index}>
                                            <th>
                                                <FormattedMessage id={`TABLE_TOTAL_${total.title}`} />
                                            </th>
                                            <td><CurrencyFormat value={total.price} /></td>
                                        </tr>
                                    ))}
                                </tbody>
                            )}
                            <tfoot>
                                <tr>
                                    <th>
                                        <FormattedMessage id="TABLE_TOTAL" />
                                    </th>
                                    <td><CurrencyFormat value={order.total} /></td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>

            <div className="row mt-3 no-gutters mx-n2">
                <div className="col-sm-6 col-12 px-2">
                    <AddressCard
                        address={order.billingAddress}
                        featured
                        label={<FormattedMessage id="TEXT_BILLING_ADDRESS" />}
                    />
                </div>
                <div className="col-sm-6 col-12 px-2 mt-sm-0 mt-3">
                    <AddressCard
                        address={order.shippingAddress}
                        featured
                        label={<FormattedMessage id="TEXT_SHIPPING_ADDRESS" />}
                    />
                </div>
            </div>
        </React.Fragment>
    );
}

Page.Layout = AccountLayout;

export default Page;
