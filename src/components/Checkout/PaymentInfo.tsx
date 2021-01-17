import { TCreditCard } from "../../contexts/user/user.type";
import React from "react";
import { Button, Grid, Typography } from "@material-ui/core";
import CreditCardIcon from "@material-ui/icons/CreditCard";

type PaymentInfoProps = {
  card: TCreditCard;
  openCardModal: () => void;
};

export const PaymentInfo: React.FC<PaymentInfoProps> = ({
  card,
  openCardModal,
}) => {
  return (
    <Grid item lg={6} md={6} container direction={"column"}>
      <Grid item>
        <Typography variant={"h6"} style={{ padding: "20px 10px" }}>
          お支払い方法
        </Typography>
      </Grid>
      <Grid item>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            border: "solid 1px rgb(194, 195, 204)",
            borderRadius: "4px",
            padding: "30px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <CreditCardIcon />
            <Typography style={{ margin: "0 20px" }}>
              **** **** **** {card?.last4}
            </Typography>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              margin: "20px 0 0",
            }}
          >
            <Button
              color={"primary"}
              variant={"outlined"}
              onClick={openCardModal}
            >
              編集
            </Button>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};
