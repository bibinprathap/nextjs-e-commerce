// react
import React, { useEffect, useState } from 'react';
// application
import ShopPageOrderSuccess from '~/components/shop/ShopPageOrderSuccess';
import { accountApi } from '~/api';
import { IOrder } from '~/interfaces/order';
import { useAppRouter } from '~/services/router';

function Page() {
    const router = useAppRouter();
    const [order, setOrder] = useState<IOrder | null>(null);
    const { token } = router.query;

    useEffect(() => {
        let canceled = false;

        if ((typeof token === 'string')) {
            accountApi.getOrderByToken(token).then((result) => {
                if (canceled) {
                    return;
                }

                setOrder(result);
            });
        } else {
            setOrder(null);
        }

        return () => {
            canceled = true;
        };
    }, [token]);

    if (!order) {
        return null;
    }

    return <ShopPageOrderSuccess order={order} />;
}

export default Page;
