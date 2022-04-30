// react
import React from 'react';
// third-party
import classNames from 'classnames';
import { FormattedMessage } from 'react-intl';
// application
import AppImageNew from '~/components/shared/AppImageNew';
import AppLink from '~/components/shared/AppLink';
import AsyncAction from '~/components/shared/AsyncAction';
import CurrencyFormat from '~/components/shared/CurrencyFormat';
import url from '~/services/url';
import { Cross10Svg } from '~/svg';
import { useCart, useCartRemoveItem } from '~/store/cart/cartHooks';

interface Props {
    onCloseMenu: () => void;
}

function Dropcart(props: Props) {
    const { onCloseMenu } = props;
    const cart = useCart();
    const cartRemoveItem = useCartRemoveItem();

    return (
        <div className="dropcart">
            {cart.items.length === 0 && (
                <div className="dropcart__empty">
                    <FormattedMessage id="TEXT_YOUR_SHOPPING_CART_IS_EMPTY" />
                </div>
            )}
            {cart.items.length > 0 && (
                <React.Fragment>
                    <ul className="dropcart__list">
                        {cart.items.map((item, index) => (
                            <React.Fragment key={index}>
                                <li className="dropcart__item">
                                    <div className="dropcart__item-image image image--type--product">
                                        <AppLink
                                            className="image__body"
                                            href={url.product(item.product)}
                                            onClick={onCloseMenu}
                                        >
                                            <AppImageNew
                                                className="image__tag"
                                                src={item.product.images && item.product.images[0]}
                                            />
                                        </AppLink>
                                    </div>
                                    <div className="dropcart__item-info">
                                        <div className="dropcart__item-name">
                                            <AppLink
                                                href={url.product(item.product)}
                                                onClick={onCloseMenu}
                                            >
                                                {item.product.name}
                                            </AppLink>
                                        </div>
                                        {item.options.length > 0 && (
                                            <ul className="dropcart__item-features">
                                                {item.options.map((option, optionIndex) => (
                                                    <li key={optionIndex}>
                                                        {option.name}
                                                        {': '}
                                                        {option.value}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                        <div className="dropcart__item-meta">
                                            <div className="dropcart__item-quantity">{item.quantity}</div>
                                            <div className="dropcart__item-price">
                                                <CurrencyFormat value={item.price} />
                                            </div>
                                        </div>
                                    </div>
                                    <AsyncAction
                                        action={() => cartRemoveItem(item.id)}
                                        render={({ run, loading }) => (
                                            <button
                                                type="button"
                                                className={classNames('dropcart__item-remove', {
                                                    'dropcart__item-remove--loading': loading,
                                                })}
                                                onClick={run}
                                            >
                                                <Cross10Svg />
                                            </button>
                                        )}
                                    />
                                </li>
                                <li className="dropcart__divider" role="presentation" />
                            </React.Fragment>
                        ))}
                    </ul>
                    <div className="dropcart__totals">
                        <table>
                            <tbody>
                                {/* {cart.totals.length > 0 && (
                                    <tr>
                                        <th>
                                            <FormattedMessage id="TABLE_SUBTOTAL" />
                                        </th>
                                        <td>
                                            <CurrencyFormat value={cart.subtotal} />
                                        </td>
                                    </tr>
                                )}
                                {cart.totals.map((total, index) => (
                                    <tr key={index}>
                                        <th>
                                            <FormattedMessage id={`TABLE_TOTAL_${total.title}`} />
                                        </th>
                                        <td>
                                            <CurrencyFormat value={total.price} />
                                        </td>
                                    </tr>
                                ))} */}
                                <tr>
                                    <th>
                                        <FormattedMessage id="TABLE_TOTAL" />
                                    </th>
                                    <td>
                                        <CurrencyFormat value={cart.subtotal} />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="dropcart__actions">
                        <AppLink href={url.cart()} className="btn btn-secondary" onClick={onCloseMenu}>
                            <FormattedMessage id="BUTTON_VIEW_CART" />
                        </AppLink>
                        <AppLink href={url.checkout()} className="btn btn-primary" onClick={onCloseMenu}>
                            <FormattedMessage id="BUTTON_CHECKOUT" />
                        </AppLink>
                    </div>
                </React.Fragment>
            )}
        </div>
    );
}

export default Dropcart;
