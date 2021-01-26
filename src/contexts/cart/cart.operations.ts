import { TCart, TCartItem, TPayment } from "./cart.type";
import { INITIAL_STATE, reducer } from "./cart.reducer";
import { useEffect, useReducer, useState } from "react";
import { useLoadingModal } from "../loading/loading.context";
import { updateCartItem, updateCartPayment } from "./cart.action";
import {
  TPatchCartItemRequest,
  TPostCartItemRequest,
} from "../../infrastructure/apiClient/apiClient.type";
import { apiClient } from "../../infrastructure/apiClient/apiClient";
import { TProduct } from "../products/products.type";

export const cartOperations = (initialState: TCart = INITIAL_STATE) => {
  const { openLoadingModal, closeLoadingModal } = useLoadingModal();
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isCartModalOpen, setIsCartModalOpen] = useState<boolean>(false);

  const fetchCart = async () => {
    const idToken = await apiClient.auth.getIdToken();
    const cart = await apiClient.get.cart(idToken);
    dispatch(updateCartItem(cart.cartItems));
    dispatch(updateCartPayment(cart.payment));
  };

  const addToCart = async (product: TProduct, quantity: number) => {
    openLoadingModal("カートを更新しています");
    try {
      const cartItems = state.cartItems;
      let updatedCartItems;
      const idToken = await apiClient.auth.getIdToken();

      // カートに同じアイテムがあるか確認
      const sameItem = cartItems.find(
        (item: TCartItem) => item.product.name === product.name
      );
      if (sameItem) {
        updatedCartItems = cartItems.map((item: TCartItem) => {
          if (item.product.name === product.name) {
            return {
              product: item.product,
              quantity: quantity + item.quantity,
            };
          } else {
            return item;
          }
        });
        const patchCartItemRequest: TPatchCartItemRequest = {
          quantity: quantity + sameItem.quantity,
        };
        await apiClient.patch.cart(
          sameItem.product.id,
          patchCartItemRequest,
          idToken
        );
      } else {
        const newCartItem: TCartItem = {
          id: product.id, // 本来backendのidが入る部分
          product: product,
          quantity: quantity,
        };
        cartItems.push(newCartItem);
        updatedCartItems = cartItems;
        const postCartItemRequest: TPostCartItemRequest = {
          productId: newCartItem.product.id,
          quantity: newCartItem.quantity,
        };
        await apiClient.post.cart(postCartItemRequest, idToken);
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

      await fetchCart();
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

      const idToken = await apiClient.auth.getIdToken();
      await apiClient.delete.cart(cartItem.product.id, idToken);

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
      await fetchCart();
    } catch (e) {
      console.log(e);
    } finally {
      closeLoadingModal();
    }
  };

  const clearCart = async () => {
    openLoadingModal("カートを更新しています...");
    try {
      const updatedCartItems: Array<TCartItem> = [];
      const updatedPayment: TPayment = {
        total: 0,
        subtotal: 0,
        tax: 0,
        shipping: 0,
      };
      dispatch(updateCartItem(updatedCartItems));
      dispatch(updateCartPayment(updatedPayment));
      // const idToken = await apiClient.auth.getIdToken();
      // await apiClient.patch.cart(cartItem, idToken);
      await fetchCart();
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

  useEffect(() => {
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
  }, [state.cartItems]);

  return {
    cartItems: state.cartItems,
    cartPayment: state.payment,
    fetchCart,
    addToCart,
    removeFromCart,
    clearCart,
    openCartModal,
    closeCartModal,
    isCartModalOpen,
  };
};
