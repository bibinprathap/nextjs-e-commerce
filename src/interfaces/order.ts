// application
import { IAddressData } from './address';
import { IProduct } from './product';

export interface IOrderItemOption {
    name: string;
    value: string;
}

export interface IOrderItem {
    product: IProduct;
    options: IOrderItemOption[];
    price: number;
    quantity: number;
    total: number;
}

export interface IOrderTotal {
    title: string;
    price: number;
}

export interface IOrder {
    id: number;
    token: string;
    number: string;
    createdAt: string;
    payment: string;
    status: string;
    items: IOrderItem[];
    quantity: number;
    subtotal: number;
    totals: IOrderTotal[];
    total: number;
    shippingAddress: IAddressData;
    billingAddress: IAddressData;
}
