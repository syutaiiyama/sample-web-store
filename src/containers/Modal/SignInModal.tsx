import React, { useState } from "react";
import { useUser } from "../../contexts/user/user.context";
import style from "./ProductModal.module.css";
import { Button, Grid, TextField, Typography } from "@material-ui/core";

export const SignInModal: React.FC = () => {
  const { signIn, toggleAuthModal, error } = useUser();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  return (
    <div className={style.auth_wrapper}>
      <Grid
        container
        spacing={4}
        direction={"column"}
        justify={"center"}
        alignItems={"center"}
      >
        <Grid
          item
          container
          direction={"column"}
          justify={"center"}
          alignItems={"center"}
        >
          <Grid item>
            <Typography color={"primary"}>ログイン</Typography>
          </Grid>
          <Grid item>
            <Typography variant={"caption"}>
              メールアドレスとパスワードでログイン
            </Typography>
          </Grid>
        </Grid>
        {error && (
          <Grid item container justify={"center"}>
            <Typography style={{ color: "red" }}>{error}</Typography>
          </Grid>
        )}
        <Grid
          item
          container
          direction={"column"}
          justify={"center"}
          alignItems={"center"}
        >
          <Grid item style={{ width: "100%" }}>
            <TextField
              style={{ width: "100%" }}
              label={"メールアドレス"}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
          <Grid item style={{ width: "100%" }}>
            <TextField
              style={{ width: "100%" }}
              label={"パスワード"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Grid>
        </Grid>
        <Grid
          item
          container
          spacing={2}
          direction={"column"}
          justify={"center"}
          alignItems={"center"}
        >
          <Grid item>
            <Button
              variant={"contained"}
              color={"primary"}
              onClick={() => signIn(email, password)}
            >
              ログイン
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant={"outlined"}
              color={"primary"}
              onClick={() => toggleAuthModal()}
            >
              新規会員登録
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
