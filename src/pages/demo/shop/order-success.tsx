// react
import React, { useEffect, useState } from 'react';
// application
import ShopPageOrderSuccess from '~/components/shop/ShopPageOrderSuccess';
import { accountApi } from '~/api';
import { IOrder } from '~/interfaces/order';

function Page() {
    const [order, setOrder] = useState<IOrder | null>(null);

    useEffect(() => {
        let canceled = false;

        accountApi.getOrderByToken('b84486c31644eac99f6909a6e8c19101').then((result) => {
            if (canceled) {
                return;
            }

            setOrder(result);
        });

        return () => {
            canceled = true;
        };
    }, []);

    if (!order) {
        return null;
    }

    return <ShopPageOrderSuccess order={order} />;
}

export default Page;
