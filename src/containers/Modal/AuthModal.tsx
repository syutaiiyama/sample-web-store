import React from "react";
import { useUser } from "../../contexts/user/user.context";
import { SignUpModal } from "./SignUpModal";
import { SignInModal } from "./SignInModal";

export const AuthModal: React.FC = () => {
  const { isSignUpModalOpen } = useUser();

  if (isSignUpModalOpen) {
    return <SignUpModal />;
  } else {
    return <SignInModal />;
  }
};
