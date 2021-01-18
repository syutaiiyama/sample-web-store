import React from "react";
import { getTestOrders } from "../../infrastructure/testData/orders";
import { useOrder } from "../../contexts/order/order.context";

const OrderReceivedPage: React.FC = () => {
  const { orderList } = useOrder();
  console.log(orderList);

  return <div>received</div>;
};

export default OrderReceivedPage;
