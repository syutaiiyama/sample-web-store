import { TProfile, TUser } from "../../contexts/user/user.type";
import { apiClientBase } from "./apiClient.base";

export const apiClientPost = {
  user: async (profile: TProfile, idToken: string): Promise<void> => {
    const body = JSON.stringify(profile);
    // await apiClientBase.post<TUser>("/user", body, idToken);
  },
};
