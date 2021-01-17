import { TUser } from "../../contexts/user/user.type";
import { testUser } from "../testData/user";

export const apiClientGet = {
  user: async (idToken: string): Promise<TUser> => testUser,
};
