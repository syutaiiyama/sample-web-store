import { apiClientBase } from "./apiClient.base";

export const apiClientDelete = {
  cart: async (cartItemId: string, idToken: string): Promise<void> => {
    await apiClientBase.delete(`/cart/${cartItemId}`, idToken);
  },
  clearCart: async (idToken: string): Promise<void> => {
    await apiClientBase.delete("/cart/all", idToken);
  },
};
