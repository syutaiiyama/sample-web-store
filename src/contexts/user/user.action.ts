import { TCreditCard, TAddress, TProfile } from "./user.type";

export const UPDATE_IS_AUTHENTICATED = "SUCCESS_SIGN_IN";
export const updateIsAuthenticated = (isAuthenticated: boolean) => {
  return {
    type: UPDATE_IS_AUTHENTICATED,
    payload: isAuthenticated,
  };
};

export const UPDATE_PROFILE = "UPDATE_PROFILE";
export const updateProfileAction = (profile: TProfile) => {
  return {
    type: UPDATE_PROFILE,
    payload: profile,
  };
};

export const UPDATE_USER_ADDRESS = "UPDATE_USER_ADDRESS";
export const updateUserAddressAction = (address: TAddress) => {
  return {
    type: UPDATE_USER_ADDRESS,
    payload: address,
  };
};

export const UPDATE_USER_CREDIT_CARD = "UPDATE_USER_CREDIT_CARD";
export const updateUserCreditCardAction = (card: TCreditCard) => {
  return {
    type: UPDATE_USER_CREDIT_CARD,
    payload: card,
  };
};
