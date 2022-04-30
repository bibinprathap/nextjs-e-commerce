// react
import React from 'react';
// third-party
import { GetServerSideProps } from 'next';
import { NextSeo } from 'next-seo';
// application
import ShopPageProduct from '~/components/shop/ShopPageProduct';
import { IProduct } from '~/interfaces/product';
import { shopApi } from '~/api';
import SitePageNotFound from '~/components/site/SitePageNotFound';
import { getClient } from '~/api/fake-api/redis';
interface Props {
    product: IProduct | null;
}

export const getServerSideProps: GetServerSideProps<Props> = async ({ params }) => {
    const slug = typeof params?.slug === 'string' ? params?.slug : "";
    const redis = await getClient();
    const toDosCache: string | null = await redis.get(slug)
    if (slug && toDosCache !== null) {
        const res: IProduct = JSON.parse(toDosCache)
        console.log(res)
        return {
            props: {
                product: res,
            },
        };
    } else {
        const p: IProduct = await shopApi.getProductBySlug(slug);
        if (p.slug)
            redis.set(slug, JSON.stringify(p));
        return {
            props: {
                product: slug ? p : null,
            },
        };
    }


};

function Page(props: Props) {
    const { product } = props;

    if (product === null) {
        return <SitePageNotFound />;
    }

    return (
        <>
            <NextSeo
                title={(product.name + product.partNumber + 'buy online at  best  price in UAE') || product.description}
                description={product.excerpt || (product.name + product.partNumber + 'buy online at  best  price in UAE')}
            />
            <ShopPageProduct
                product={product}
                layout="full"
            />
        </>
    );
}

export default Page;
