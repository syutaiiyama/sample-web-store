import { auth } from "./firebase";
import { getFirebaseAuthError } from "./getFirebaseAuthError";

export const firebaseClient = {
  currentUser: auth.currentUser,

  getCurrentUser: async () => {
    try {
      return await auth.currentUser;
    } catch (e) {
      console.log(e);
      throw getFirebaseAuthError(e.code);
    }
  },

  onAuthStateChanged: (onNext: (isLoggedIn: boolean) => void): void => {
    auth.onAuthStateChanged(
      async (user) => {
        if (user) onNext(true);
        else onNext(false);
      },
      (e) => {
        throw getFirebaseAuthError(e.code);
      }
    );
  },

  getIdToken: async () => {
    try {
      const idToken = await auth.currentUser.getIdToken();
      return idToken;
      // return "test-id-token";
    } catch (e) {
      console.log(e);
      throw getFirebaseAuthError(e.code);
    }
  },

  createUserWithEmailAndPassword: async (
    email: string,
    password: string
  ): Promise<string> => {
    try {
      const response = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      return await response.user.getIdToken();
      return "test-id-token";
    } catch (e) {
      console.log(e);
      throw getFirebaseAuthError(e.code);
    }
  },

  signInWithEmailAndPassword: async (
    email: string,
    password: string
  ): Promise<string> => {
    try {
      const response = await auth.signInWithEmailAndPassword(email, password);
      return await response.user.getIdToken();
    } catch (e) {
      console.log(e);
      throw getFirebaseAuthError(e.code);
    }
  },

  signOut: async (): Promise<void> => {
    try {
      await auth.signOut();
    } catch (e) {
      console.log(e);
      throw getFirebaseAuthError(e.code);
    }
  },

  sendPasswordResetEmail: async (email: string): Promise<void> => {
    try {
      await auth.sendPasswordResetEmail(email);
    } catch (e) {
      console.log(e);
      throw getFirebaseAuthError(e.code);
    }
  },
};
