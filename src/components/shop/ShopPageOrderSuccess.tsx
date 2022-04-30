// react
import React from 'react';
// third-party
import { FormattedMessage, useIntl } from 'react-intl';
// application
import AddressCard from '~/components/shared/AddressCard';
import AppImageNew from '~/components/shared/AppImageNew';
import AppLink from '~/components/shared/AppLink';
import BlockSpace from '~/components/blocks/BlockSpace';
import CurrencyFormat from '~/components/shared/CurrencyFormat';
import PageTitle from '~/components/shared/PageTitle';
import url from '~/services/url';
import { Check100Svg } from '~/svg';
import { IOrder } from '~/interfaces/order';

interface Props {
    order: IOrder;
}

function ShopPageOrderSuccess(props: Props) {
    const intl = useIntl();
    const { order } = props;

    return (
        <React.Fragment>
            <PageTitle>
                {
                    intl.formatMessage(
                        { id: 'HEADER_ORDER' },
                        {
                            number: intl.formatMessage(
                                { id: 'FORMAT_ORDER_NUMBER' },
                                { number: order.number },
                            ),
                        },
                    )
                }
            </PageTitle>

            <BlockSpace layout="spaceship-ledge-height" />

            <div className="block order-success">
                <div className="container">
                    <div className="order-success__body">
                        <div className="order-success__header">
                            <Check100Svg className="order-success__icon" />
                            <h1 className="order-success__title">
                                <FormattedMessage id="HEADER_ORDER_SUCCESS_TITLE" />
                            </h1>
                            <div className="order-success__subtitle">
                                <FormattedMessage id="HEADER_ORDER_SUCCESS_SUBTITLE" />
                            </div>
                            <div className="order-success__actions">
                                <AppLink href={url.home()} className="btn btn-sm btn-secondary">
                                    <FormattedMessage id="BUTTON_GO_TO_HOMEPAGE" />
                                </AppLink>
                            </div>
                        </div>

                        <div className="card order-success__meta">
                            <ul className="order-success__meta-list">
                                <li className="order-success__meta-item">
                                    <span className="order-success__meta-title">
                                        <FormattedMessage id="TEXT_ORDER_NUMBER" />
                                        :
                                    </span>
                                    <span className="order-success__meta-value">
                                        <FormattedMessage id="FORMAT_ORDER_NUMBER" values={{ number: order.number }} />
                                    </span>
                                </li>
                                <li className="order-success__meta-item">
                                    <span className="order-success__meta-title">
                                        <FormattedMessage id="TEXT_CREATED_AT" />
                                        :
                                    </span>
                                    <span className="order-success__meta-value">
                                        <FormattedMessage
                                            id="FORMAT_DATE_MEDIUM"
                                            values={{ date: Date.parse(order.createdAt) }}
                                        />
                                    </span>
                                </li>
                                <li className="order-success__meta-item">
                                    <span className="order-success__meta-title">
                                        <FormattedMessage id="TEXT_TOTAL" />
                                        :
                                    </span>
                                    <span className="order-success__meta-value">
                                        <CurrencyFormat value={order.subtotal} />
                                    </span>
                                </li>
                                <li className="order-success__meta-item">
                                    <span className="order-success__meta-title">
                                        <FormattedMessage id="TEXT_PAYMENT_METHOD" />
                                        :
                                    </span>
                                    <span className="order-success__meta-value">
                                        {order.payment}
                                    </span>
                                </li>
                            </ul>
                        </div>

                        <div className="card">
                            <div className="order-list">
                                <table>
                                    <thead className="order-list__header">
                                        <tr>
                                            <th className="order-list__column-label" colSpan={2}>
                                                <FormattedMessage id="TABLE_PRODUCT" />
                                            </th>
                                            <th className="order-list__column-quantity">
                                                <FormattedMessage id="TABLE_QUANTITY" />
                                            </th>
                                            <th className="order-list__column-total">
                                                <FormattedMessage id="TABLE_TOTAL" />
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="order-list__products">
                                        {order.items.map((item, itemIndex) => (
                                            <tr key={itemIndex}>
                                                <td className="order-list__column-image">
                                                    <div className="image image--type--product">
                                                        <AppLink
                                                            href={url.product(item.product)}
                                                            className="image__body"
                                                        >
                                                            <AppImageNew
                                                                className="image__tag"
                                                                src={item.product.images && item.product.images[0]}
                                                            />
                                                        </AppLink>
                                                    </div>
                                                </td>
                                                <td className="order-list__column-product">
                                                    <AppLink href={url.product(item.product)}>
                                                        {item.product.name}
                                                    </AppLink>
                                                    {item.options.length > 0 && (
                                                        <div className="order-list__options">
                                                            <ul className="order-list__options-list">
                                                                {item.options.map((option, optionIndex) => (
                                                                    <li
                                                                        key={optionIndex}
                                                                        className="order-list__options-item"
                                                                    >
                                                                        <span className="order-list__options-label">
                                                                            {option.name}
                                                                            {': '}
                                                                        </span>
                                                                        <span className="order-list__options-value">
                                                                            {option.value}
                                                                        </span>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    )}
                                                </td>
                                                <td
                                                    className="order-list__column-quantity"
                                                    data-title={`${intl.formatMessage({ id: 'TABLE_QUANTITY' })}:`}
                                                >
                                                    {item.quantity}
                                                </td>
                                                <td className="order-list__column-total">
                                                    <CurrencyFormat value={item.total} />
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                    {order.totals.length > 0 && (
                                        <tbody className="order-list__subtotals">
                                            <tr>
                                                <th className="order-list__column-label" colSpan={3}>
                                                    <FormattedMessage id="TABLE_SUBTOTAL" />
                                                </th>
                                                <td className="order-list__column-total">
                                                    <CurrencyFormat value={order.subtotal} />
                                                </td>
                                            </tr>
                                            {/* {order.totals.map((total, totalIndex) => (
                                                <tr key={totalIndex}>
                                                    <th className="order-list__column-label" colSpan={3}>
                                                        <FormattedMessage id={`TABLE_TOTAL_${total.title}`} />
                                                    </th>
                                                    <td className="order-list__column-total">
                                                        <CurrencyFormat value={total.price} />
                                                    </td>
                                                </tr>
                                            ))} */}
                                        </tbody>
                                    )}
                                    {/* <tfoot className="order-list__footer">
                                        <tr>
                                            <th className="order-list__column-label" colSpan={3}>
                                                <FormattedMessage id="TABLE_TOTAL" />
                                            </th>
                                            <td className="order-list__column-total">
                                                <CurrencyFormat value={order.total} />
                                            </td>
                                        </tr>
                                    </tfoot> */}
                                </table>
                            </div>
                        </div>

                        <div className="order-success__addresses">
                            <AddressCard
                                className="order-success__address"
                                address={order.shippingAddress}
                                label={intl.formatMessage({ id: 'TEXT_SHIPPING_ADDRESS' })}
                            />
                            {/* <AddressCard
                                className="order-success__address"
                                address={order.billingAddress}
                                label={intl.formatMessage({ id: 'TEXT_BILLING_ADDRESS' })}
                            /> */}
                        </div>
                    </div>
                </div>
            </div>

            <BlockSpace layout="before-footer" />
        </React.Fragment>
    );
}

export default ShopPageOrderSuccess;
