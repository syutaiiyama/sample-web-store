import React, { useState } from "react";
import { Button, Grid, TextField, Typography } from "@material-ui/core";
import style from "./ProductModal.module.css";
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
