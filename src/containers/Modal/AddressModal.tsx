import React, { useState } from "react";
import { useUser } from "../../contexts/user/user.context";
import { Button, Grid, TextField, Typography } from "@material-ui/core";
import style from "./ProductModal.module.css";
import { TAddress } from "../../contexts/user/user.type";

export const AddressModal: React.FC = () => {
  const { address, updateAddress, closeAddressModal } = useUser();
  const [postalCode, setPostalCode] = useState<string>(address.postalCode);
  const [prefecture, setPrefecture] = useState<string>(address.prefecture);
  const [city, setCity] = useState<string>(address.city);
  const [addressLine, setAddressLine] = useState<string>(address.addressLine);
  const [building, setBuilding] = useState<string>(address.building);
  const [tel, setTel] = useState<string>(address.tel);

  const handleSave = async () => {
    const updatedAddress: TAddress = {
      postalCode: postalCode,
      prefecture: prefecture,
      city: city,
      addressLine: addressLine,
      building: building,
      tel: tel,
    };
    await updateAddress(updatedAddress);
    closeAddressModal();
    console.log(address);
  };

  return (
    <div className={style.address_wrapper}>
      <Grid container justify={"center"} spacing={2}>
        <Grid
          container
          item
          alignItems={"center"}
          justify={"center"}
          spacing={2}
        >
          <Grid item>
            <Typography>郵便番号</Typography>
          </Grid>
          <Grid item>
            <TextField
              value={postalCode}
              variant={"outlined"}
              onChange={(e) => setPostalCode(e.target.value)}
            />
          </Grid>
        </Grid>
        <Grid
          container
          item
          alignItems={"center"}
          justify={"center"}
          spacing={2}
        >
          <Grid item>
            <Typography>都道府県</Typography>
          </Grid>
          <Grid item>
            <TextField
              value={prefecture}
              variant={"outlined"}
              onChange={(e) => setPrefecture(e.target.value)}
            />
          </Grid>
        </Grid>
        <Grid
          container
          item
          alignItems={"center"}
          justify={"center"}
          spacing={2}
        >
          <Grid item>
            <Typography>市区町村</Typography>
          </Grid>
          <Grid item>
            <TextField
              value={city}
              variant={"outlined"}
              onChange={(e) => setCity(e.target.value)}
            />
          </Grid>
        </Grid>
        <Grid
          container
          item
          alignItems={"center"}
          justify={"center"}
          spacing={2}
        >
          <Grid item>
            <Typography>{"　　"}番地</Typography>
          </Grid>
          <Grid item>
            <TextField
              value={addressLine}
              variant={"outlined"}
              onChange={(e) => setAddressLine(e.target.value)}
            />
          </Grid>
        </Grid>
        <Grid
          container
          item
          alignItems={"center"}
          justify={"center"}
          spacing={2}
        >
          <Grid item>
            <Typography>{"　"}建物名</Typography>
          </Grid>
          <Grid item>
            <TextField
              value={building}
              variant={"outlined"}
              onChange={(e) => setBuilding(e.target.value)}
            />
          </Grid>
        </Grid>
        <Grid
          container
          item
          alignItems={"center"}
          justify={"center"}
          spacing={2}
        >
          <Grid item>
            <Typography>電話番号</Typography>
          </Grid>
          <Grid item>
            <TextField
              value={tel}
              variant={"outlined"}
              onChange={(e) => setTel(e.target.value)}
            />
          </Grid>
        </Grid>
        <Grid container justify={"center"} style={{ padding: "20px" }}>
          <Grid item>
            <Button
              color={"primary"}
              variant={"contained"}
              onClick={handleSave}
            >
              保存
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
