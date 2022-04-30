// application
import { IProduct } from '~/interfaces/product';

export interface ICartItemOption {
    name: string;
    value: string;
}

export interface ICartItem {
    id: number
    product: IProduct;
    options: ICartItemOption[];
    price: number;
    quantity: number;
    total: number;
}

export type ICartTotalType = 'shipping' | 'tax';

export interface ICartTotal {
    type: ICartTotalType;
    title: string;
    price: number;
}

export interface ICart {
    items: ICartItem[];
    quantity: number;
    subtotal: number;
    totals: ICartTotal[];
    total: number;
}

export interface ICartState extends ICart {
    lastItemId: number;
}
