// application
import { error } from '~/fake-server/utils';
import { IGetOrdersListOptions } from '~/api/base';
import { IOrder } from '~/interfaces/order';
import { IOrdersList } from '~/interfaces/list';
import { orders } from '~/fake-server/database/orders';

export function getOrdersList(options?: IGetOrdersListOptions): Promise<IOrdersList> {
    const optionsValue = options || {};

    let items: IOrder[] = JSON.parse(JSON.stringify(orders));

    const page = optionsValue.page || 1;
    const limit = optionsValue.limit || 16;
    const sort = optionsValue.sort || 'default';
    const total = items.length;
    const pages = Math.ceil(items.length / limit);
    const from = (page - 1) * limit + 1;
    const to = page * limit;

    items = items.slice(from - 1, to);

    return Promise.resolve({
        page,
        limit,
        sort,
        total,
        pages,
        from,
        to,
        items,
        products: items
    });
}

export function getOrderById(id: number): Promise<IOrder> {
    const order = orders.find((x) => x.id === id);

    if (order) {
        return Promise.resolve(order);
    }

    return error('Page Not Found');
}

export function getOrderByToken(token: string): Promise<IOrder> {
    const order = orders.find((x) => x.token === token);

    if (order) {
        return Promise.resolve(order);
    }

    return error('Page Not Found');
}
