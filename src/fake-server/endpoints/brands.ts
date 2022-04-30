/* eslint-disable import/prefer-default-export */

// application
import { brands } from '~/fake-server/database/brands';
import { IBrand } from '~/interfaces/brand';
import { IGetBrandsOptions } from '~/api/base';

export function getBrands(options?: IGetBrandsOptions): Promise<IBrand[]> {
    return Promise.resolve(brands.slice(0, options?.limit));
}
