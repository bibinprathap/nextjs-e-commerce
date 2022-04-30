// react
import React from 'react';
// third-party
import { GetServerSideProps } from 'next';
// application
import ShopPageCategory from '~/components/shop/ShopPageCategory';
import { IShopCategory } from '~/interfaces/category';
import { shopApi } from '~/api';
import { NextSeo } from 'next-seo';

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
        <React.Fragment>
            <NextSeo
                title="car auto spare parts online trade uae"
                description="NO 1 online mercedes spare parts Buy 100% genuine auto parts at reasonable prices  at abu dhabi,sharjah,Ras Al Khaimah ,dubai just dial.."
            />
            <ShopPageCategory
                layout="columns-4-sidebar"
                subcategories={subcategories}
            />
        </React.Fragment>
    );
}

export default Page;
