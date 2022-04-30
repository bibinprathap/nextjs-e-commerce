// react
import React, { useEffect, useState } from 'react';
// third-party
import { FormattedMessage } from 'react-intl';
// application
import WidgetCategories from '~/components/widgets/WidgetCategories';
import WidgetProducts from '~/components/widgets/WidgetProducts';
import { IProduct } from '~/interfaces/product';
import { IShopCategory } from '~/interfaces/category';
import { shopApi } from '~/api';

function ProductSidebar() {
    const [categories, setCategories] = useState<IShopCategory[]>([]);
    const [products, setProducts] = useState<IProduct[]>([]);

    useEffect(() => {
        let canceled = false;

        shopApi.getCategories({ depth: 1 }).then((result) => {
            if (canceled) {
                return;
            }

            setCategories(result);
        });

        shopApi.getLatestProducts(5).then((result) => {
            if (canceled) {
                return;
            }

            setProducts(result);
        });

        return () => {
            canceled = true;
        };
    }, []);

    return (
        <React.Fragment>
            <WidgetCategories
                widgetTitle={<FormattedMessage id="HEADER_CATEGORIES" />}
                categories={categories}
            />

            <WidgetProducts
                widgetTitle={<FormattedMessage id="HEADER_LATEST_PRODUCTS" />}
                products={products}
            />
        </React.Fragment>
    );
}

export default ProductSidebar;
