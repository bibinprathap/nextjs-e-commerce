import { NextApiRequest, NextApiResponse } from "next"
import { getClient } from '~/api/fake-api/redis';
import { IProduct } from "~/interfaces/product";
import { shopApi } from '~/api';
export default async (_: NextApiRequest, res: NextApiResponse) => {
    const params = _.query;
    console.log("RECEIVED", _.query) // logs as undefined
    const { text } = _.query
    const slug = typeof params?.slug === 'string' ? params?.slug.replace(" ", "+") : "";
    const redis = await getClient();
    const toDosCache: string | null = await redis.get(slug)
    if (slug && toDosCache !== null) {
        const pres: IProduct = JSON.parse(toDosCache)
        console.log(pres)
        res.status(200).json({
            product: pres
        })
    } else {
        const p: IProduct = await shopApi.getProductBySlug(slug);
        if (p.slug)
            redis.set(slug, JSON.stringify(p));
        res.status(200).json({
            productDetails: slug ? p : null,
        })
    }

}
