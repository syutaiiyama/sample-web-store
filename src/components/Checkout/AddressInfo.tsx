import { TAddress } from "../../contexts/user/user.type";
import React from "react";
import { Button, Grid, Typography } from "@material-ui/core";

type AddressInfoProps = {
  address: TAddress;
  openAddressModal: () => void;
};

export const AddressInfo: React.FC<AddressInfoProps> = ({
  address,
  openAddressModal,
}) => {
  return (
    <Grid item lg={6} md={6} container direction={"column"}>
      <Grid item>
        <Typography variant={"h6"} style={{ padding: "20px 10px" }}>
          お届け先情報
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
          <Typography>〒{address?.postalCode}</Typography>
          <Typography>{address?.prefecture}</Typography>
          <Typography>{address?.city}</Typography>
          <Typography>{address?.addressLine}</Typography>
          <Typography>{address?.building}</Typography>
          <Typography>{address?.tel}</Typography>
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
              onClick={openAddressModal}
            >
              編集
            </Button>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};
