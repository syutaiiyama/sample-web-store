import { TCart, TCartItem } from "./cart.type";
import { INITIAL_STATE, reducer } from "./cart.reducer";
import { useReducer, useState } from "react";
import { useLoadingModal } from "../loading/loading.context";
import { updateCart } from "./cart.action";
import { apiClient } from "../../infrastructure/apiClient/apiClient";

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

      dispatch(updateCart(updatedCartItems));
      const idToken = await apiClient.auth.getIdToken();
      // await apiClient.patch.cart(cartItem, idToken);
      console.log(state);
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
      const updatedCartItems = state.cartItems;
      dispatch(updateCart(updatedCartItems));
      const idToken = await apiClient.auth.getIdToken();
      // await apiClient.patch.cart(cartItem, idToken);
      console.log(state);
    } catch (e) {
      console.log(e);
    } finally {
      closeLoadingModal();
    }
  };

  return {
    cartItems: state.cartItems,
    cartPayment: state.payment,
    addToCart,
    removeFromCart,
  };
};
