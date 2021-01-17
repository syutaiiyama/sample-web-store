import { TUser } from "../../contexts/user/user.type";
import { apiClientBase } from "./apiClient.base";
import { TCartItem } from "../../contexts/cart/cart.type";

export const apiClientPatch = {
  user: async (difference: Partial<TUser>, idToken: string): Promise<void> => {
    const body = JSON.stringify(difference);
    await apiClientBase.patch("/user", body, idToken);
  },
  cart: async (
    difference: Partial<TCartItem>,
    idToken: string
  ): Promise<void> => {
    const body = JSON.stringify(difference);
    await apiClientBase.patch("/cart", body, idToken);
  },
};
