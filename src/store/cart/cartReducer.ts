// application
import { IProduct } from '~/interfaces/product';
import { withClientState } from '~/store/client';
import {
    ICartItem,
    ICartItemOption,
    ICartState,
    ICartTotal,
} from '~/store/cart/cartTypes';
import {
    CART_ADD_ITEM,
    CART_REMOVE_ITEM,
    CART_UPDATE_QUANTITIES,
    CartAction,
    CartItemQuantity,
} from '~/store/cart/cartActionTypes';

function findItemIndex(items: ICartItem[], product: IProduct, options: ICartItemOption[]): number {
    return items.findIndex((item) => {
        if (item.product.id !== product.id || item.options.length !== options.length) {
            return false;
        }

        for (let i = 0; i < options.length; i += 1) {
            const option = options[i];
            const itemOption = item.options.find((itemOption) => (
                itemOption.name === option.name && itemOption.value === option.value
            ));

            if (!itemOption) {
                return false;
            }
        }

        return true;
    });
}

function calcSubtotal(items: ICartItem[]): number {
    return items.reduce((subtotal, item) => subtotal + item.total, 0);
}

function calcQuantity(items: ICartItem[]): number {
    return items.reduce((quantity, item) => quantity + item.quantity, 0);
}

function calcTotal(subtotal: number, totals: ICartTotal[]): number {
    return totals.reduce((acc, extraLine) => acc + extraLine.price, subtotal);
}

function calcTotals(items: ICartItem[]): ICartTotal[] {
    if (items.length === 0) {
        return [];
    }

    const subtotal = calcSubtotal(items);

    return [
        {
            type: 'shipping',
            title: 'SHIPPING',
            price: 25,
        },
        {
            type: 'tax',
            title: 'TAX',
            price: subtotal * 0.2,
        },
    ];
}

function addItem(state: ICartState, product: IProduct, options: ICartItemOption[], quantity: number) {
    const itemIndex = findItemIndex(state.items, product, options);

    let newItems;
    let { lastItemId } = state;

    if (itemIndex === -1) {
        lastItemId += 1;
        newItems = [...state.items, {
            id: lastItemId,
            product: JSON.parse(JSON.stringify(product)),
            options: JSON.parse(JSON.stringify(options)),
            price: product.price,
            total: product.price * quantity,
            quantity,
        }];
    } else {
        const item = state.items[itemIndex];

        newItems = [
            ...state.items.slice(0, itemIndex),
            {
                ...item,
                quantity: item.quantity + quantity,
                total: (item.quantity + quantity) * item.price,
            },
            ...state.items.slice(itemIndex + 1),
        ];
    }

    const subtotal = calcSubtotal(newItems);
    const totals = calcTotals(newItems);
    const total = calcTotal(subtotal, totals);

    return {
        ...state,
        lastItemId,
        subtotal,
        totals,
        total,
        items: newItems,
        quantity: calcQuantity(newItems),
    };
}

function removeItem(state: ICartState, itemId: number) {
    const { items } = state;
    const newItems = items.filter((item) => item.id !== itemId);

    const subtotal = calcSubtotal(newItems);
    const totals = calcTotals(newItems);
    const total = calcTotal(subtotal, totals);

    return {
        ...state,
        items: newItems,
        quantity: calcQuantity(newItems),
        subtotal,
        totals,
        total,
    };
}

function updateQuantities(state: ICartState, quantities: CartItemQuantity[]) {
    let needUpdate = false;

    const newItems = state.items.map((item) => {
        const quantity = quantities.find((x) => x.itemId === item.id && x.value !== item.quantity);

        if (!quantity) {
            return item;
        }

        needUpdate = true;

        return {
            ...item,
            quantity: quantity.value,
            total: quantity.value * item.price,
        };
    });

    if (needUpdate) {
        const subtotal = calcSubtotal(newItems);
        const totals = calcTotals(newItems);
        const total = calcTotal(subtotal, totals);

        return {
            ...state,
            items: newItems,
            quantity: calcQuantity(newItems),
            subtotal,
            totals,
            total,
        };
    }

    return state;
}

const initialState: ICartState = {
    lastItemId: 0,
    quantity: 0,
    items: [],
    subtotal: 0,
    totals: [],
    total: 0,
};

export const CART_NAMESPACE = 'cart';

function cartBaseReducer(state = initialState, action: CartAction): ICartState {
    switch (action.type) {
    case CART_ADD_ITEM:
        return addItem(state, action.product, action.options, action.quantity);

    case CART_REMOVE_ITEM:
        return removeItem(state, action.itemId);

    case CART_UPDATE_QUANTITIES:
        return updateQuantities(state, action.quantities);

    default:
        return state;
    }
}

const cartReducer = withClientState(cartBaseReducer, CART_NAMESPACE);

export default cartReducer;
