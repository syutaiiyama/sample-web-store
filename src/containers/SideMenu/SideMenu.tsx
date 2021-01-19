import React from "react";
import {
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
} from "@material-ui/core";
import ListAltIcon from "@material-ui/icons/ListAlt";
import SettingsIcon from "@material-ui/icons/Settings";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { useRouter } from "next/router";
import { useUser } from "../../contexts/user/user.context";
import style from "./SideMenu.module.css";

export const SideMenu: React.FC = () => {
  const router = useRouter();
  const { signOut } = useUser();

  return (
    <Grid item xs={3} className={style.side_menu_wrapper}>
      <Paper>
        <List style={{ padding: "30px" }}>
          <ListItem button onClick={() => router.push("/my-page/order-list")}>
            <ListItemIcon>
              <ListAltIcon />
            </ListItemIcon>
            <ListItemText>注文履歴</ListItemText>
          </ListItem>
          <ListItem button onClick={() => router.push("/my-page/settings")}>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText>ユーザー情報</ListItemText>
          </ListItem>
          <ListItem button onClick={() => signOut()}>
            <ListItemIcon>
              <ExitToAppIcon />
            </ListItemIcon>
            <ListItemText>ログアウト</ListItemText>
          </ListItem>
        </List>
      </Paper>
    </Grid>
  );
};
