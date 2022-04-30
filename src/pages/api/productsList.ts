import { NextApiRequest, NextApiResponse } from "next"
import queryString from 'query-string';
import { IProductsList } from "~/interfaces/product";
import { FakeShopApi } from "~/api/fake-api/cache-shop";
import { parseQueryOptions, parseQueryFilters } from '~/store/shop/shopHelpers';
export default async (_: NextApiRequest, res: NextApiResponse) => {
    const fakeShopApi = new FakeShopApi();
    let productsList: IProductsList;
    const param = _.query;
    console.log("RECEIVED", _.query)
    const query = queryString.stringify(param);
    const options = parseQueryOptions(query);
    const filters = parseQueryFilters(query);
    const slug = typeof param?.slug === 'string' ? param?.slug : "";
    if (slug) {
        filters.slug = slug;
    }
    productsList = await fakeShopApi.getProductsList(options, filters);

    res.status(200).json({
        productsList: productsList,
    });
}


