import { FirebaseAuthError } from "../../contexts/error/error";

// ref: https://firebase.google.com/docs/reference/js/firebase.auth.Auth

export const getFirebaseAuthError = (
  firebaseErrorCode: string
): FirebaseAuthError => {
  switch (firebaseErrorCode) {
    // ConfirmPasswordReset
    case "auth/expired-action-code":
      return new FirebaseAuthError(
        "パスワード再設定の有効期限がきれました。もう一度お試しください。"
      );
    case "auth/invalid-action-code":
      return new FirebaseAuthError(
        "不具合が発生しました。お時間をおいて、もう一度お試しください。"
      );
    case "auth/user-disabled":
      return new FirebaseAuthError(
        "お客様のアカウントは凍結されています。お問い合わせフォームより、お問い合わせください。"
      );
    case "auth/user-not-found":
      return new FirebaseAuthError(
        "ユーザ情報がありません。ご登録情報をお確かめください。"
      );
    case "auth/weak-password":
      return new FirebaseAuthError(
        "パスワードが安全ではありません。8文字以上の英数記号を入力ください。"
      );
    // CreateUserWithEmailAndPassword
    case "auth/email-already-in-use":
      return new FirebaseAuthError("既に登録済みです。ログインしてください。");
    case "auth/invalid-email":
      return new FirebaseAuthError(
        "不正なメールアドレスです。正しいメールアドレスを入力してください。"
      );
    case "auth/operation-not-allowed":
      return new FirebaseAuthError(
        "不具合が発生しました。お時間をおいて、もう一度お試しください。"
      );
    // SendPasswordResetEmail
    case "auth/missing-android-pkg-name":
      return new FirebaseAuthError(
        "不具合が発生しました。お時間をおいて、もう一度お試しください。"
      );
    case "auth/missing-continue-uri":
      return new FirebaseAuthError(
        "不具合が発生しました。お時間をおいて、もう一度お試しください。"
      );
    case "auth/missing-ios-bundle-id":
      return new FirebaseAuthError(
        "不具合が発生しました。お時間をおいて、もう一度お試しください。"
      );
    case "auth/invalid-continue-uri":
      return new FirebaseAuthError(
        "不具合が発生しました。お時間をおいて、もう一度お試しください。"
      );
    case "auth/unauthorized-continue-uri":
      return new FirebaseAuthError(
        "不具合が発生しました。お時間をおいて、もう一度お試しください。"
      );
    // SetSignInLinkToEmail
    // TODO
    // SignInWithEmailAndPassword
    case "auth/wrong-password":
      return new FirebaseAuthError(
        "入力されたメールアドレスかパスワードが正しくありません。ご確認の上、やりなおしてください。"
      );
    default:
      return new FirebaseAuthError(
        "不具合が発生しました。お時間をおいて、もう一度お試しください。"
      );
  }
};
