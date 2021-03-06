import { TCartItem, TPayment } from "./cart.type";
import React, { createContext, useContext, useEffect } from "react";
import { cartOperations } from "./cart.operations";
import { MuiModal } from "../../components/Modal/MuiModal";
import { CartModalDesktop } from "../../containers/Modal/CartModalDesktop";
import { useApp } from "../app/app.context";
import { CartModalMobile } from "../../containers/Modal/CartModalMobile";
import { TProduct } from "../products/products.type";
import { useUser } from "../user/user.context";

type ContextProps = {
  cartItems: Array<TCartItem>;
  cartPayment: TPayment;
  fetchCart: () => void;
  addToCart: (product: TProduct, quantity: number) => void;
  removeFromCart: (cartItem: TCartItem) => void;
  clearCart: () => void;
  openCartModal: () => void;
  closeCartModal: () => void;
  isCartModalOpen: boolean;
};

const CartContext = createContext({} as ContextProps);

export const CartProvider = ({ children }) => {
  const operations = cartOperations();
  const { deviceType } = useApp();
  const { isAuthenticated } = useUser();

  useEffect(() => {
    if (isAuthenticated) {
      operations.fetchCart();
    } else {
      operations.clearCart();
    }
  }, [isAuthenticated]);

  return (
    <CartContext.Provider value={operations}>
      {children}
      <MuiModal
        isModalOpen={operations.isCartModalOpen}
        onClose={() => operations.closeCartModal()}
      >
        {deviceType === "mobile" ? <CartModalMobile /> : <CartModalDesktop />}
      </MuiModal>
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
