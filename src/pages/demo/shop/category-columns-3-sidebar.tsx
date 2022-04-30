// react
import React from 'react';
// third-party
import { GetServerSideProps } from 'next';
// application
import ShopPageCategory from '~/components/shop/ShopPageCategory';
import { IShopCategory } from '~/interfaces/category';
import { shopApi } from '~/api';

interface Props {
    subcategories: IShopCategory[];
}

export const getServerSideProps: GetServerSideProps<Props> = async () => ({
    props: {
        subcategories: await shopApi.getCategories({ depth: 1 }),
    },
});

function Page(props: Props) {
    const { subcategories } = props;

    return (
        <ShopPageCategory
            layout="columns-3-sidebar"
            subcategories={subcategories}
        />
    );
}

export default Page;
