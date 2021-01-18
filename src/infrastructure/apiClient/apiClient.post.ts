import { TProfile } from "../../contexts/user/user.type";
import { TOrder } from "../../contexts/order/order.type";

export const apiClientPost = {
  user: async (profile: TProfile, idToken: string): Promise<void> => {
    const body = JSON.stringify(profile);
    // await apiClientBase.post<TUser>("/user", body, idToken);
  },
  order: async (order: TOrder, idToken: string): Promise<void> => {
    const body = JSON.stringify(order);
    // await apiClientBase.post<TOrder>("/order", body, idToken);
  },
};
