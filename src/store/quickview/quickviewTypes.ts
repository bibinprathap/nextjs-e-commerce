// application
import { IProduct } from '~/interfaces/product';

export interface IQuickviewState {
    open: boolean;
    product: IProduct | null;
}
