import { TAddress, TCreditCard, TProfile } from "./user.type";
import React, { createContext, useContext } from "react";
import { userOperations } from "./user.operations";
import { MuiModal } from "../../components/Modal/MuiModal";
import { AuthModal } from "../../containers/Modal/AuthModal";
import { AddressModal } from "../../containers/Modal/AddressModal";
import { CardModal } from "../../containers/Modal/CardModal";

type ContextProps = {
  isAuthenticated: boolean;
  profile?: TProfile;
  address?: TAddress;
  card?: TCreditCard;
  isAuthModalOpen: boolean;
  isAddressModalOpen: boolean;
  isCardModalOpen: boolean;
  isSignUpModalOpen: boolean;
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
  openAddressModal: () => void;
  closeAddressModal: () => void;
  openCardModal: () => void;
  closeCardModal: () => void;
  toggleAuthModal: () => void;
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
      <MuiModal
        isModalOpen={operations.isAddressModalOpen}
        onClose={() => operations.closeAddressModal()}
      >
        <AddressModal />
      </MuiModal>
      <MuiModal
        isModalOpen={operations.isCardModalOpen}
        onClose={() => operations.closeCardModal()}
      >
        <CardModal />
      </MuiModal>
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
