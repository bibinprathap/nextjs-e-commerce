/* eslint-disable import/prefer-default-export,class-methods-use-this */

// application

import { IFilterValues, IListOptions } from '~/interfaces/list';
import { IProductFromServer, IProductsList } from '~/interfaces/product';

import { getFinalUrl } from '~/fake-server/utils';
import {
    ShopCacheApi,
} from '~/api/base/shop-cache-api';
import {
    getProductsListCache,
} from '~/fake-server/endpoints';
import { getClient } from './redis';

export class FakeShopApi implements ShopCacheApi {
    async getProductsList(options: IListOptions = {}, filterValues: IFilterValues = {}): Promise<IProductsList> {
        const redis = await getClient();
        const data = {
            parem1: filterValues.model || filterValues.filter_model || filterValues.partsCategory || filterValues.filter_partsCategory || filterValues.filter_slug || filterValues.slug,
            parem2: filterValues.engine || filterValues.filter_engine || null,
            parem3: filterValues.origin || filterValues.filter_origin,
            parem4: filterValues.makeCode || filterValues.filter_makeCode || filterValues.make,
            param5: filterValues.page,
            parem6: filterValues.limit
        };
        const slog = (data.parem1 || '') + (data.parem3 || '') + (data.parem4 || '');
        let res: Array<IProductFromServer>;
        const toDosCache: string | null = await redis.get(slog)
        if (toDosCache !== null) {
            res = JSON.parse(toDosCache)

            console.log(res)
        } else {

            const reso = await fetch(getFinalUrl("Portal/searchproducttrade/"), {
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                mode: 'cors', // no-cors, *cors, same-origin
                headers: {
                    'Content-Type': 'application/json'
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: JSON.stringify(data) // body data type must match "Content-Type" header
            });
            res = await reso
                .json().then(res => {
                    if (!res.InnerException && res.length > 0)
                        redis.set(slog, JSON.stringify(res));

                    return Promise.resolve(res)
                    //filters: filters.map((x) => x.build()),
                })
                .catch(err => {
                    console.log(err);
                });

        }

        return getProductsListCache(options, res);
    }

}

