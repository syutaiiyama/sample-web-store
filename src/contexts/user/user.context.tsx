import { TAddress, TCreditCard, TProfile } from "./user.type";
import React, { createContext, useContext } from "react";
import { userOperations } from "./user.operations";
import { MuiModal } from "../../components/Modal/MuiModal";
import { AuthModal } from "../../containers/Modal/AuthModal";

type ContextProps = {
  isAuthenticated: boolean;
  profile?: TProfile;
  address?: TAddress;
  card?: TCreditCard;
  isAuthModalOpen: boolean;
  error: string;
  fetchUser: () => void;
  signUp: (
    profile: TProfile,
    password: string,
    confirmPassword: string
  ) => void;
  signIn: (email: string, password: string) => void;
  signOut: () => void;
  updateProfile: (difference: TProfile) => void;
  updateAddress: (difference: TAddress) => void;
  updateCard: (difference: TCreditCard) => void;
  openAuthModal: () => void;
  closeAuthModal: () => void;
};

const UserContext = createContext({} as ContextProps);

export const UserProvider = ({ children }) => {
  const operations = userOperations();

  return (
    <UserContext.Provider value={operations}>
      {children}
      <MuiModal
        isModalOpen={operations.isAuthModalOpen}
        onClose={() => operations.closeAuthModal()}
      >
        <AuthModal />
      </MuiModal>
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
