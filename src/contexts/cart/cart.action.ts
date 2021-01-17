import { TCartItem, TPayment } from "./cart.type";

export const UPDATE_CART_ITEMS = "UPDATE_CART_ITEMS";
export const updateCartItem = (cartItem: Array<TCartItem>) => {
  return {
    type: UPDATE_CART_ITEMS,
    payload: cartItem,
  };
};

export const UPDATE_CART_PAYMENT = "UPDATE_CART_PAYMENT";
export const updateCartPayment = (payment: TPayment) => {
  return {
    type: UPDATE_CART_PAYMENT,
    payload: payment,
  };
};

export const CLEAR_CART = "CLEAR_CART";
export const clearCart = () => {
  return {
    type: CLEAR_CART,
  };
};
