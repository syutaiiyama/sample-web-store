import { TAddress, TProfile, TUser } from "../../contexts/user/user.type";
import { apiClientBase } from "./apiClient.base";
import { TPatchCartItemRequest } from "./apiClient.type";

export const apiClientPatch = {
  user: async (
    difference: Partial<TProfile>,
    idToken: string
  ): Promise<void> => {
    const body = JSON.stringify(difference);
    await apiClientBase.patch("/shop/user", body, idToken);
  },
  address: async (
    difference: Partial<TAddress>,
    idToken: string
  ): Promise<void> => {
    const body = JSON.stringify(difference);
    await apiClientBase.patch("/address", body, idToken);
  },
  cart: async (
    cartItemId: string,
    difference: TPatchCartItemRequest,
    idToken: string
  ): Promise<void> => {
    const body = JSON.stringify(difference);
    await apiClientBase.patch(`/cart/${cartItemId}`, body, idToken);
  },
};
