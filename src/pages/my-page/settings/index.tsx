import React, { useEffect, useMemo, useState } from "react";
import {
  Button,
  createStyles,
  Grid,
  makeStyles,
  Paper,
  TextField,
  Theme,
  Typography,
} from "@material-ui/core";
import { SideMenu } from "../../../containers/SideMenu/SideMenu";
import { InputForm } from "../../../components/Input/InputForm";
import { useUser } from "../../../contexts/user/user.context";
import { TAddress, TProfile } from "../../../contexts/user/user.type";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import { useRouter } from "next/router";
import {
  isEmpty,
  isPostalCodeFilled,
  isTelFilled,
} from "../../../utils/isEmpty";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      padding: "40px 0 0",
      margin: "0 auto",
      maxWidth: "100%",
    },
    paperWrapper: {
      width: "800px",
      maxWidth: "100%",
      padding: "20px",
      boxSizing: "border-box",
    },
  })
);

const SettingPage: React.FC = () => {
  const styles = useStyles();

  const {
    profile,
    address,
    card,
    updateProfile,
    updateAddress,
    isAuthenticated,
    openCardModal,
  } = useUser();
  const router = useRouter();

  const [name, setName] = useState<string>(profile?.name);
  const [email, setEmail] = useState<string>(profile?.email);
  const [postalCode, setPostalCode] = useState<string>(address?.postalCode);
  const [prefecture, setPrefecture] = useState<string>(address?.prefecture);
  const [city, setCity] = useState<string>(address?.city);
  const [addressLine, setAddressLine] = useState<string>(address?.addressLine);
  const [building, setBuilding] = useState<string>(address?.building);
  const [tel, setTel] = useState<string>(address?.tel);

  const handleProfileSave = async () => {
    const updatedProfile: TProfile = {
      name: name,
      email: email,
    };
    await updateProfile(updatedProfile);
  };

  const handleAddressSave = async () => {
    const updatedAddress: TAddress = {
      postalCode: postalCode,
      prefecture: prefecture,
      city: city,
      addressLine: addressLine,
      building: building,
      tel: tel,
    };
    await updateAddress(updatedAddress);
  };

  const isAddressFilled = useMemo(
    () =>
      !isPostalCodeFilled(postalCode) &&
      !isEmpty(prefecture) &&
      !isEmpty(city) &&
      !isEmpty(addressLine) &&
      !isTelFilled(tel),
    [postalCode, prefecture, city, addressLine, tel]
  );

  const isProfileFilled = useMemo(() => !isEmpty(name) && !isEmpty(email), [
    name,
    email,
  ]);

  useEffect(() => {
    if (!isAuthenticated) router.push("/");
  }, []);

  return (
    <div className={styles.wrapper}>
      <Grid container justify={"center"} spacing={2}>
        <SideMenu />
        <Grid item md={8} sm={12} xs={12}>
          <Paper className={styles.paperWrapper}>
            <Grid container direction={"column"} spacing={6}>
              <Grid container item spacing={3}>
                <Grid container item>
                  <Typography>ユーザー情報</Typography>
                </Grid>
                <Grid container item spacing={4}>
                  <Grid container alignItems={"center"} item spacing={2}>
                    <Grid item xs={12} md={3}>
                      <Typography>名前</Typography>
                    </Grid>
                    <Grid item xs={12} md={9}>
                      <TextField
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        variant={"outlined"}
                        size={"small"}
                        style={{ width: "100%" }}
                      />
                    </Grid>
                  </Grid>
                  <Grid container alignItems={"center"} item spacing={2}>
                    <Grid item xs={12} md={3}>
                      <Typography>メールアドレス</Typography>
                    </Grid>
                    <Grid item xs={12} md={9}>
                      <TextField
                        value={email}
                        variant={"outlined"}
                        size={"small"}
                        style={{ width: "100%" }}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid container item justify={"flex-end"}>
                  <Button
                    onClick={() => handleProfileSave()}
                    color={"primary"}
                    variant={"contained"}
                    disabled={!isProfileFilled}
                  >
                    保存
                  </Button>
                </Grid>
              </Grid>
              <Grid container item spacing={3}>
                <Grid container item>
                  <Typography>お届け先情報</Typography>
                </Grid>
                <Grid container item spacing={4}>
                  <InputForm
                    label={"郵便番号"}
                    value={postalCode}
                    onChange={(e) => setPostalCode(e.target.value)}
                  />
                  <InputForm
                    label={"都道府県"}
                    value={prefecture}
                    onChange={(e) => setPrefecture(e.target.value)}
                  />
                </Grid>
                <Grid container item spacing={4}>
                  <InputForm
                    label={"市区町村"}
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                  <InputForm
                    label={"番地"}
                    value={addressLine}
                    onChange={(e) => {
                      setAddressLine(e.target.value);
                    }}
                  />
                </Grid>
                <Grid container item spacing={4}>
                  <InputForm
                    label={"建物名"}
                    value={building}
                    onChange={(e) => {
                      setBuilding(e.target.value);
                    }}
                  />
                  <InputForm
                    label={"電話番号"}
                    value={tel}
                    onChange={(e) => {
                      setTel(e.target.value);
                    }}
                  />
                </Grid>
                <Grid container item justify={"flex-end"}>
                  <Button
                    color={"primary"}
                    variant={"contained"}
                    onClick={handleAddressSave}
                    disabled={!isAddressFilled}
                  >
                    保存
                  </Button>
                </Grid>
              </Grid>
              <Grid container item spacing={3}>
                <Grid container item>
                  <Typography>クレジットカード情報</Typography>
                </Grid>
                <Grid container item spacing={4}>
                  <Grid
                    container
                    alignItems={"center"}
                    justify={"space-between"}
                    item
                    spacing={2}
                  >
                    <Grid
                      item
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <CreditCardIcon />
                      <Typography style={{ margin: "0 20px" }}>
                        **** **** **** {card?.last4}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Button variant={"outlined"} onClick={openCardModal}>
                        編集
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default SettingPage;
