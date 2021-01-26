import { TOrder } from "./order.type";
import { INITIAL_STATE, reducer } from "./order.reducer";
import { useReducer, useState } from "react";
import { useLoadingModal } from "../loading/loading.context";
import { apiClient } from "../../infrastructure/apiClient/apiClient";
import { updateOrders } from "./order.actions";
import { useRouter } from "next/router";
import { useCart } from "../cart/cart.context";

export const orderOperations = (
  initialState: { orderList: Array<TOrder> } = INITIAL_STATE
) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [currentOrder, setCurrentOrder] = useState<TOrder>();
  const { openLoadingModal, closeLoadingModal } = useLoadingModal();
  const { fetchCart } = useCart();
  const router = useRouter();

  const handleCheckout = async (order: TOrder) => {
    openLoadingModal("注文しています...");
    try {
      const idToken = await apiClient.auth.getIdToken();
      const response = await apiClient.post.order(idToken);
      await fetchCart();
      dispatch(updateOrders(order));
      router.push({
        pathname: "/order-received",
        query: {
          orderNo: response.orderNo,
        },
      });
    } catch (e) {
      console.log(e);
    } finally {
      closeLoadingModal();
    }
  };

  const fetchSingleOrder = async (orderNo: string) => {
    openLoadingModal("オーダーを取得しています");
    try {
      const idToken = await apiClient.auth.getIdToken();
      const response = await apiClient.get.order(orderNo, idToken);
      setCurrentOrder(response);
    } catch (e) {
      console.log(e);
    } finally {
      closeLoadingModal();
    }
  };

  return {
    orderList: state.orderList,
    currentOrder,
    fetchSingleOrder,
    handleCheckout,
  };
};
