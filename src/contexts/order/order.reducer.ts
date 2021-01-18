import { TOrder } from "./order.type";
import { UPDATE_ORDERS } from "./order.actions";

export const INITIAL_STATE = {
  orderList: [],
};

export const reducer = (state: { orderList: Array<TOrder> }, action) => {
  switch (action.type) {
    case UPDATE_ORDERS:
      return { ...state, orderList: [...state.orderList, action.payload] };
  }
};
