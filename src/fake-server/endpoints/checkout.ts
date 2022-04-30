/* eslint-disable import/prefer-default-export */

// application
import { delayResponse } from '~/fake-server/utils';
import { ICheckoutData } from '~/api/base';
import { IOrder, IOrderItem, IOrderTotal } from '~/interfaces/order';
import { products } from '~/fake-server/database/products';
import {
    getNextOrderId,
    getNextOrderNumber,
    getOrderToken,
    orders,
} from '~/fake-server/database/orders';

export function checkout(data: ICheckoutData): Promise<IOrder> {
    const id = getNextOrderId();
    const items: IOrderItem[] = data.items.map((x) => {
        const product = products.find((p) => p.id === x.productId);

        if (!product) {
            throw new Error('Product not found');
        }

        return {
            product,
            options: x.options,
            price: product.price,
            quantity: x.quantity,
            total: product.price * x.quantity,
        };
    });
    const quantity = items.reduce((acc, x) => acc + x.quantity, 0);
    const subtotal = items.reduce((acc, x) => acc + x.total, 0);
    const totals: IOrderTotal[] = [
        {
            title: 'SHIPPING',
            price: 25,
        },
        {
            title: 'TAX',
            price: subtotal * 0.20,
        },
    ];
    const total = subtotal + totals.reduce((acc, x) => acc + x.price, 0);

    const date = new Date();
    const pad = (v: number) => (`00${v}`).substr(-2);
    const createdAt = `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;

    const order: IOrder = {
        id,
        token: getOrderToken(id),
        number: getNextOrderNumber(),
        createdAt,
        payment: data.payment,
        status: 'PENDING',
        items,
        quantity,
        subtotal,
        totals,
        total,
        billingAddress: data.billingAddress,
        shippingAddress: data.shippingAddress,
    };
    debugger;
    fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(order)
    });

    orders.unshift(order);
    console.log(order);
    debugger;
    return delayResponse(Promise.resolve(order));
}
