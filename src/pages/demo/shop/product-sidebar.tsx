// react
import React from 'react';
// third-party
import { GetServerSideProps } from 'next';
// application
import ShopPageProduct from '~/components/shop/ShopPageProduct';
import { IProduct } from '~/interfaces/product';
import { shopApi } from '~/api';

interface Props {
    product: IProduct;
}

export const getServerSideProps: GetServerSideProps<Props> = async () => ({
    props: {
        product: await shopApi.getProductBySlug('ENGINE-OIL-BMW-5W30'),
    },
});

function Page(props: Props) {
    const { product } = props;

    return (
        <ShopPageProduct
            product={product}
            layout="sidebar"
            sidebarPosition="start"
        />
    );
}

export default Page;
