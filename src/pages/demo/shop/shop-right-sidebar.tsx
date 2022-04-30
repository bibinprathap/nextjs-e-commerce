// react
import React from 'react';
// application
import getShopPageData from '~/store/shop/shopHelpers';
import ShopPageShop from '~/components/shop/ShopPageShop';
import { wrapper } from '~/store/store';

export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
    await getShopPageData(context, 'engine-drivetrain');
});

function Page() {
    return (
        <ShopPageShop
            layout="grid"
            gridLayout="grid-4-sidebar"
            sidebarPosition="end"
        />
    );
}

export default Page;
