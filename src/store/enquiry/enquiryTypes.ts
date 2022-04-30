// application
import { IProduct } from '~/interfaces/product';

export interface IEnquiryState {
    open: boolean;
    product: IProduct | null;
}
