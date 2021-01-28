import React, { useState } from "react";
import { useUser } from "../../contexts/user/user.context";
import style from "./ProductModal.module.css";
import { Button, Grid, TextField, Typography } from "@material-ui/core";

export const SignUpModal: React.FC = () => {
  const { signUp, toggleAuthModal, error } = useUser();
  const [name, setName] = useState<string>();
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
            <Typography color={"primary"}>新規会員登録</Typography>
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
              label={"名前"}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Grid>
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
              type={"password"}
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
              onClick={() =>
                signUp({ name: name, email: email }, password, password)
              }
            >
              新規会員登録
            </Button>
          </Grid>
          <Grid item>
            <Button onClick={() => toggleAuthModal()}>
              既に会員の方はこちら
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
