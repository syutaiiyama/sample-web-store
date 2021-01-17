import {
  UPDATE_USER_CREDIT_CARD,
  UPDATE_USER_ADDRESS,
  UPDATE_IS_AUTHENTICATED,
  UPDATE_PROFILE,
} from "./user.action";
import { TUser } from "./user.type";

export const INITIAL_STATE: TUser = {
  isAuthenticated: null,
  profile: null,
  address: null,
  card: null,
};

export const reducer = (state: TUser, action) => {
  switch (action.type) {
    case UPDATE_IS_AUTHENTICATED:
      return { ...state, isAuthenticated: action.payload };
    case UPDATE_PROFILE:
      return { ...state, profile: action.payload };
    case UPDATE_USER_ADDRESS:
      return { ...state, address: action.payload };
    case UPDATE_USER_CREDIT_CARD:
      return { ...state, card: action.payload };
  }
};
