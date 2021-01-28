import { TOrder } from "../../contexts/order/order.type";
import { testUser } from "./user";

export const getTestOrders = () => {
  const testOrders: Array<TOrder> = [
    {
      orderNo: "00001",
      user: testUser,
      products: [
        {
          name: "売れる商品はデザインで決まる",
          price: 1000,
          quantity: 2,
        },
        {
          name: "洋服",
          price: 1000,
          quantity: 1,
        },
      ],
      payment: {
        total: 3300,
        subtotal: 3000,
        tax: 300,
        shipping: 0,
      },
      date: "20210118",
    },
    {
      orderNo: "00002",
      user: testUser,
      products: [
        {
          name: "売れる商品はデザインで決まる",
          price: 1000,
          quantity: 1,
        },
      ],
      payment: {
        total: 1000,
        subtotal: 1000,
        tax: 100,
        shipping: 0,
      },
      date: "20210118",
    },
  ];

  return testOrders;
};
