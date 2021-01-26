import { TAddress, TProfile, TUser } from "../../contexts/user/user.type";
import { TOrder } from "../../contexts/order/order.type";
import { apiClientBase } from "./apiClient.base";
import { TPostCartItemRequest } from "./apiClient.type";

export const apiClientPost = {
  user: async (profile: TProfile, idToken: string): Promise<void> => {
    const body = JSON.stringify(profile);
    await apiClientBase.post<TUser>("/shop/user", body, idToken);
  },
  address: async (address: TAddress, idToken: string): Promise<void> => {
    const body = JSON.stringify(address);
    await apiClientBase.post<TAddress>("/address", body, idToken);
  },
  order: async (order: TOrder, idToken: string): Promise<void> => {
    const body = JSON.stringify(order);
    // await apiClientBase.post<TOrder>("/order", body, idToken);
  },
  cart: async (
    cartItem: TPostCartItemRequest,
    idToken: string
  ): Promise<void> => {
    const body = JSON.stringify(cartItem);
    await apiClientBase.post<TPostCartItemRequest>("/cart", body, idToken);
  },
};
