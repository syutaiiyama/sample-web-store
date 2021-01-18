import { TOrder } from "./order.type";
import { INITIAL_STATE, reducer } from "./order.reducer";
import { useReducer } from "react";
import { useLoadingModal } from "../loading/loading.context";
import { apiClient } from "../../infrastructure/apiClient/apiClient";
import { updateOrders } from "./order.actions";

export const orderOperations = (
  initialState: { orderList: Array<TOrder> } = INITIAL_STATE
) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { openLoadingModal, closeLoadingModal } = useLoadingModal();

  const handleCheckout = async (order: TOrder) => {
    openLoadingModal("注文しています...");
    try {
      const idToken = await apiClient.auth.getIdToken();
      //await apiClient.post.order(order, idToken);
      dispatch(updateOrders(order));
    } catch (e) {
      console.log(e);
    } finally {
      closeLoadingModal();
    }
  };

  return {
    orderList: state.orderList,
    handleCheckout,
  };
};
