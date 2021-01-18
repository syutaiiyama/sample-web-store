import { TOrder } from "./order.type";

export const UPDATE_ORDERS = "UPDATE_ORDERS";
export const updateOrders = (order: TOrder) => {
  return {
    type: UPDATE_ORDERS,
    payload: order,
  };
};
