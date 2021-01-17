import React from "react";
import style from "./ProductModal.module.css";
import { CardElement } from "@stripe/react-stripe-js";
import { Button, Grid } from "@material-ui/core";
import { useUser } from "../../contexts/user/user.context";

const cardStyle = {
  style: {
    base: {
      color: "#32325d",
      fontFamily: "Arial, sans-serif",
      fontSmoothing: "antialiased",
      fontSize: "16px",
      "::placeholder": {
        color: "#32325d",
      },
      width: "100%",
      maxHeight: "44px",
    },
    invalid: {
      color: "#fa755a",
      iconColor: "#fa755a",
    },
  },
};

export const CardModal: React.FC = () => {
  const { closeCardModal } = useUser();

  return (
    <div className={style.card_wrapper}>
      <CardElement id={"card-element"} options={cardStyle} />
      <Grid container justify={"center"} style={{ padding: "30px 0 0" }}>
        <Grid item>
          <Button
            color={"primary"}
            variant={"contained"}
            onClick={closeCardModal}
          >
            保存
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};
