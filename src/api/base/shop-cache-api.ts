// application
import { IFilterValues, IListOptions } from '~/interfaces/list';
import { IProductsList } from '~/interfaces/product';


export abstract class ShopCacheApi {
    abstract getProductsList(options?: IListOptions, filters?: IFilterValues): Promise<IProductsList>;
}
