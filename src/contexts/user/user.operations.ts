import { INITIAL_STATE, reducer } from "./user.reducer";
import { useEffect, useReducer, useState } from "react";
import { TAddress, TCreditCard, TProfile, TUser } from "./user.type";
import { apiClient } from "../../infrastructure/apiClient/apiClient";
import {
  updateIsAuthenticated,
  updateProfileAction,
  updateUserAddressAction,
  updateUserCreditCardAction,
} from "./user.action";
import { useLoadingModal } from "../loading/loading.context";
import * as GoogleAnalytics from "../../infrastructure/google_analytics/google-analytics";
import { useRouter } from "next/router";
import { testUser } from "../../infrastructure/testData/user";

export const userOperations = (initialState: TUser = INITIAL_STATE) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [error, setError] = useState<string>();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState<boolean>(false);
  const [isAddressModalOpen, setIsAddressModalOpen] = useState<boolean>(false);
  const [isCardModalOpen, setIsCardModalOpen] = useState<boolean>(false);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState<boolean>(false);
  const { openLoadingModal, closeLoadingModal } = useLoadingModal();
  const router = useRouter();

  // firebaseへログイン状態の問合せ
  useEffect(() => {
    apiClient.auth.onAuthStateChanged(async (isLoggedIn) => {
      if (!state.isAuthenticated && isLoggedIn) await fetchUser();
      else if (!isLoggedIn) clearUser();
    });
  }, []);

  const fetchUser = async () => {
    try {
      const idToken = await apiClient.auth.getIdToken();
      const { profile, address } = await apiClient.get.user(idToken);
      const card = testUser.card; // カード情報は固定する
      dispatch(updateProfileAction(profile));
      dispatch(updateUserAddressAction(address));
      dispatch(updateUserCreditCardAction(card));
      dispatch(updateIsAuthenticated(true));
    } catch (e) {
      console.log(e);
    }
  };

  const clearUser = () => {
    dispatch(updateIsAuthenticated(false));
    dispatch(updateProfileAction(null));
    dispatch(updateUserAddressAction(null));
    dispatch(updateUserCreditCardAction(null));
  };

  const signUp = async (
    profile: TProfile,
    password: string,
    confirmPassword: string
  ) => {
    openLoadingModal("新規登録しています...");
    try {
      if (password !== confirmPassword) {
        throw SyntaxError("パスワードが一致していません");
      }
      const idToken = await apiClient.auth.createUserWithEmailAndPassword(
        profile.email,
        password
      );
      await apiClient.post.user(profile, idToken);
      await fetchUser();
      GoogleAnalytics.signUp();
      router.push("/");
      closeAuthModal();
    } catch (e) {
      setError(e.message);
    } finally {
      closeLoadingModal();
    }
  };

  const signIn = async (email: string, password: string) => {
    openLoadingModal("ログインしています...");
    try {
      await apiClient.auth.signInWithEmailAndPassword(email, password);
      await fetchUser();
      closeAuthModal();
      GoogleAnalytics.signIn();
    } catch (e) {
      setError(e.message);
    } finally {
      closeLoadingModal();
    }
  };
  const signOut = async () => {
    openLoadingModal("ログアウトしています...");
    try {
      await apiClient.auth.signOut();
      clearUser();
      GoogleAnalytics.signOut();
      router.push("/");
    } catch (e) {
      setError(e.message);
    } finally {
      closeLoadingModal();
    }
  };
  const updateProfile = async (difference: TProfile) => {
    openLoadingModal("ユーザ情報更新中");
    try {
      // const user = await apiClient.auth.getCurrentUser();
      // if (difference.email !== user.email) {
      //   await user.updateEmail(difference.email);
      // }
      // dispatch(updateProfileAction(difference));
      const idToken = await apiClient.auth.getIdToken();
      await apiClient.patch.user(difference, idToken);
      await fetchUser();
    } catch (e) {
      setError(e.message);
    } finally {
      closeLoadingModal();
    }
  };
  const updateAddress = async (difference: TAddress) => {
    openLoadingModal("ユーザ情報更新中");
    try {
      // dispatch(updateUserAddressAction(difference));
      const idToken = await apiClient.auth.getIdToken();
      if (state.address.city) {
        await apiClient.patch.address(difference, idToken);
      } else {
        await apiClient.post.address(difference, idToken);
      }
      await fetchUser();
    } catch (e) {
      setError(e.message);
    } finally {
      closeLoadingModal();
    }
  };

  const updateCard = async (difference: TCreditCard) => {
    openLoadingModal("ユーザ情報更新中");
    try {
      // dispatch(updateUserCreditCardAction(difference));
      // const idToken = await apiClient.auth.getIdToken();
      // await apiClient.patch.user(difference, idToken);
      await fetchUser();
    } catch (e) {
      setError(e.message);
    } finally {
      closeLoadingModal();
    }
  };

  const openAuthModal = () => {
    setIsAuthModalOpen(true);
  };

  const closeAuthModal = () => {
    setIsAuthModalOpen(false);
    setError("");
  };

  const openAddressModal = () => {
    setIsAddressModalOpen(true);
  };

  const closeAddressModal = () => {
    setIsAddressModalOpen(false);
  };

  const openCardModal = () => {
    setIsCardModalOpen(true);
  };

  const closeCardModal = () => {
    setIsCardModalOpen(false);
  };

  const toggleAuthModal = () => {
    setIsSignUpModalOpen(!isSignUpModalOpen);
    setError("");
  };

  return {
    isAuthenticated: state.isAuthenticated,
    profile: state.profile,
    address: state.address,
    card: state.card,
    isAuthModalOpen,
    isSignUpModalOpen,
    isAddressModalOpen,
    isCardModalOpen,
    error,
    fetchUser,
    signUp,
    signIn,
    signOut,
    updateProfile,
    updateAddress,
    updateCard,
    openAuthModal,
    closeAuthModal,
    openAddressModal,
    closeAddressModal,
    openCardModal,
    closeCardModal,
    toggleAuthModal,
  };
};
