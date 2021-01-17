import { TUser } from "../../contexts/user/user.type";
import { apiClientBase } from "./apiClient.base";

export const apiClientPatch = {
  user: async (difference: Partial<TUser>, idToken: string): Promise<void> => {
    const body = JSON.stringify(difference);
    await apiClientBase.patch("/user", body, idToken);
  },
};
