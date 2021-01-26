import { TUser } from "../../contexts/user/user.type";
import { testUser } from "../testData/user";
import { TOrder } from "../../contexts/order/order.type";
import { getTestOrders } from "../testData/orders";
import { TProduct } from "../../contexts/products/products.type";
import {
  testBooks,
  testClothes,
  testFoods,
  testProducts,
} from "../testData/products";
import { apiClientBase } from "./apiClient.base";

export const apiClientGet = {
  user: async (idToken: string): Promise<TUser> =>
    await apiClientBase.get<TUser>("/user", idToken), //testUser,

  products: async (): Promise<Array<TProduct>> => //testProducts,
    await apiClientBase.get<Array<TProduct>>("/product"),

  books: async (): Promise<Array<TProduct>> => testBooks,
  //(await apiClientBase.get<Array<TProduct>>("/product/books", idToken)).data,

  clothes: async (): Promise<Array<TProduct>> => testClothes,
  //(await apiClientBase.get<Array<TProduct>>("/product/clothes", idToken)).data,

  foods: async (): Promise<Array<TProduct>> => testFoods,
  //(await apiClientBase.get<Array<TProduct>>("/product/foods", idToken)).data,

  orders: async (idToken: string): Promise<Array<TOrder>> => getTestOrders(),
  //(await apiClientBase.get<Array<TOrder>>("/orders", idToken)).data,
};
