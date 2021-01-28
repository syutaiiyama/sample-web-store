import { TOrder } from "./order.type";
import { createContext, useContext, useEffect } from "react";
import { orderOperations } from "./order.operations";
import { useUser } from "../user/user.context";

type ContextProps = {
  orderList: Array<TOrder>;
  orders: Array<TOrder>;
  currentOrder: TOrder;
  fetchOrders: () => void;
  fetchSingleOrder: (orderNo: string) => void;
  handleCheckout: (order: TOrder) => void;
};

const OrderContext = createContext({} as ContextProps);

export const OrderProvider = ({ children }) => {
  const operations = orderOperations();
  const { isAuthenticated } = useUser();

  useEffect(() => {
    if (isAuthenticated) {
      operations.fetchOrders();
    } else {
      // operations.clearOrders
    }
  }, []);

  return (
    <OrderContext.Provider value={operations}>{children}</OrderContext.Provider>
  );
};

export const useOrder = () => useContext(OrderContext);
