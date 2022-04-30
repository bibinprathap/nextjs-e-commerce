// react
import React from 'react';
// third-party
import { FormattedMessage } from 'react-intl';
// application
import CurrencyFormat from '~/components/shared/CurrencyFormat';
import { useCart } from '~/store/cart/cartHooks';

function CheckoutCart() {
    const cart = useCart();

    return (
        <table className="checkout__totals">
            <thead className="checkout__totals-header">
                <tr>
                    <th>
                        <FormattedMessage id="TABLE_PRODUCT" />
                    </th>
                    <th>
                        <FormattedMessage id="TABLE_TOTAL" />
                    </th>
                </tr>
            </thead>
            <tbody className="checkout__totals-products">
                {cart.items.map((item) => (
                    <tr key={item.id}>
                        <td>
                            {`${item.product.name} × ${item.quantity}`}
                        </td>
                        <td><CurrencyFormat value={item.total} /></td>
                    </tr>
                ))}
            </tbody>
            {cart.totals.length > 0 && (
                <tbody className="checkout__totals-subtotals">
                    <tr>
                        <th>
                            <FormattedMessage id="TABLE_SUBTOTAL" />
                        </th>
                        <td><CurrencyFormat value={cart.subtotal} /></td>
                    </tr>
                    {/* {cart.totals.map((total, totalIndex) => (
                        <tr key={totalIndex}>
                            <th>
                                <FormattedMessage id={`TABLE_TOTAL_${total.title}`} />
                            </th>
                            <td><CurrencyFormat value={total.price} /></td>
                        </tr>
                    ))} */}
                </tbody>
            )}
            {/* <tfoot className="checkout__totals-footer">
                <tr>
                    <th>
                        <FormattedMessage id="TABLE_TOTAL" />
                    </th>
                    <td><CurrencyFormat value={cart.total} /></td>
                </tr>
            </tfoot> */}
        </table>
    );
}

export default CheckoutCart;
