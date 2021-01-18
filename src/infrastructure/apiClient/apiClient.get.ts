import { TUser } from "../../contexts/user/user.type";
import { testUser } from "../testData/user";
import { TOrder } from "../../contexts/order/order.type";
import { getTestOrders } from "../testData/orders";
import { TProduct } from "../../contexts/products/products.type";
import { testBooks, testClothes, testFoods } from "../testData/products";

export const apiClientGet = {
  user: async (idToken: string): Promise<TUser> => testUser,
  //(await apiClientBase.get<TUser>("/user", idToken)).data,
  books: async (): Promise<Array<TProduct>> => testBooks,
  //(await apiClientBase.get<Array<TProduct>>("/books", idToken)).data,
  clothes: async (): Promise<Array<TProduct>> => testClothes,
  //(await apiClientBase.get<Array<TProduct>>("/clothes", idToken)).data,
  foods: async (): Promise<Array<TProduct>> => testFoods,
  //(await apiClientBase.get<Array<TProduct>>("/foods", idToken)).data,
  orders: async (idToken: string): Promise<Array<TOrder>> => getTestOrders(),
  //(await apiClientBase.get<Array<TOrder>>("/orders", idToken)).data,
};
