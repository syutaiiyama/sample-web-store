import { TCart, TCartItem, TPayment } from "./cart.type";
import { INITIAL_STATE, reducer } from "./cart.reducer";
import { useReducer, useState } from "react";
import { useLoadingModal } from "../loading/loading.context";
import { updateCartItem, updateCartPayment } from "./cart.action";

export const cartOperations = (initialState: TCart = INITIAL_STATE) => {
  const { openLoadingModal, closeLoadingModal } = useLoadingModal();
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isCartModalOpen, setIsCartModalOpen] = useState<boolean>(false);

  const addToCart = async (cartItem: TCartItem) => {
    openLoadingModal("カートを更新しています");
    try {
      const cartItems = state.cartItems;
      let updatedCartItems;

      // カートに同じアイテムがあるか確認
      const sameItem = cartItems.find(
        (item: TCartItem) => item.product.name === cartItem.product.name
      );
      if (sameItem) {
        updatedCartItems = cartItems.map((item: TCartItem) => {
          if (item.product.name === cartItem.product.name) {
            return {
              product: item.product,
              quantity: cartItem.quantity + item.quantity,
            };
          } else {
            return item;
          }
        });
      } else {
        cartItems.push(cartItem);
        updatedCartItems = cartItems;
      }

      dispatch(updateCartItem(updatedCartItems));

      let subtotal = 0;
      state.cartItems.forEach((item: TCartItem) => {
        subtotal += item.quantity * item.product.price;
      });
      const updatedPayment: TPayment = {
        total: Math.round(subtotal * 1.1),
        subtotal: subtotal,
        tax: Math.round(subtotal * 0.1),
        shipping: 0,
      };
      dispatch(updateCartPayment(updatedPayment));
      // const idToken = await apiClient.auth.getIdToken();
      // await apiClient.patch.cart(cartItem, idToken);
    } catch (e) {
      console.log(e);
    } finally {
      closeLoadingModal();
    }
  };

  const removeFromCart = async (cartItem: TCartItem) => {
    openLoadingModal("カートを更新しています");
    try {
      //TODO: ここが間違っているかも
      const updatedCartItems = state.cartItems.filter(
        (item: TCartItem) => item !== cartItem
      );
      dispatch(updateCartItem(updatedCartItems));

      let subtotal = 0;
      if (updatedCartItems.length > 0) {
        updatedCartItems.forEach((item: TCartItem) => {
          subtotal += item.quantity * item.product.price;
        });
      }
      const updatedPayment: TPayment = {
        total: Math.round(subtotal * 1.1),
        subtotal: subtotal,
        tax: Math.round(subtotal * 0.1),
        shipping: 0,
      };
      dispatch(updateCartPayment(updatedPayment));
      // const idToken = await apiClient.auth.getIdToken();
      // await apiClient.patch.cart(cartItem, idToken);
    } catch (e) {
      console.log(e);
    } finally {
      closeLoadingModal();
    }
  };

  const openCartModal = () => {
    setIsCartModalOpen(true);
  };

  const closeCartModal = () => {
    setIsCartModalOpen(false);
  };

  return {
    cartItems: state.cartItems,
    cartPayment: state.payment,
    addToCart,
    removeFromCart,
    openCartModal,
    closeCartModal,
    isCartModalOpen,
  };
};
