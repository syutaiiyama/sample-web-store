import { TCartItem, TPayment } from "./cart.type";
import { createContext, useContext } from "react";
import { cartOperations } from "./cart.operations";

type ContextProps = {
  cartItems: Array<TCartItem>;
  cartPayment: TPayment;
  addToCart: (cartItem: TCartItem) => void;
  removeFromCart: (cartItem: TCartItem) => void;
};

const CartContext = createContext({} as ContextProps);

export const CartProvider = ({ children }) => {
  const operations = cartOperations();

  return (
    <CartContext.Provider value={operations}>{children}</CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
