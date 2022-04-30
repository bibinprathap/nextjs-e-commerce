// application
import { cartAddItem, cartRemoveItem, cartUpdateQuantities } from '~/store/cart/cartActions';
import { useAppAction, useAppSelector } from '~/store/hooks';

export const useCart = () => useAppSelector((state) => state.cart);

export const useCartAddItem = () => useAppAction(cartAddItem);

export const useCartRemoveItem = () => useAppAction(cartRemoveItem);

export const useCartUpdateQuantities = () => useAppAction(cartUpdateQuantities);
