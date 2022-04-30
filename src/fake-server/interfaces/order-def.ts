export interface IOrderItemOptionDef {
    name: string;
    value: string;
}

export interface IOrderItemDef {
    product: string;
    options: IOrderItemOptionDef[];
    quantity: number;
}

export interface IOrderDef {
    number: string;
    createdAt: string;
    payment: string;
    status: string;
    items: IOrderItemDef[];
}
