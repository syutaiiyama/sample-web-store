import { TCart } from "./cart.type";
import { UPDATE_CART_ITEMS, UPDATE_CART_PAYMENT } from "./cart.action";

export const INITIAL_STATE: TCart = {
  payment: {
    total: 0,
    subtotal: 0,
    tax: 0,
    shipping: 0,
  },
  cartItems: [],
};

export const reducer = (state: TCart, action) => {
  switch (action.type) {
    case UPDATE_CART_ITEMS:
      return { ...state, cartItems: action.payload };
    case UPDATE_CART_PAYMENT:
      return { ...state, payment: action.payload };
  }
};
