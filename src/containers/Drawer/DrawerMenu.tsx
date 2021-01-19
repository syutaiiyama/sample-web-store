import React, { useCallback, useState } from "react";
import {
  Collapse,
  createStyles,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Theme,
} from "@material-ui/core";
import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import WorkSharpIcon from "@material-ui/icons/WorkSharp";
import FastfoodOutlinedIcon from "@material-ui/icons/FastfoodOutlined";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import { useRouter } from "next/router";
import { useUser } from "../../contexts/user/user.context";
import ListAltIcon from "@material-ui/icons/ListAlt";
import SettingsIcon from "@material-ui/icons/Settings";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { ExpandLess, ExpandMore } from "@material-ui/icons";

type DrawerMenuProps = {
  closeDrawer: () => void;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    nested: {
      paddingLeft: theme.spacing(4),
    },
  })
);

export const DrawerMenu: React.FC<DrawerMenuProps> = ({ closeDrawer }) => {
  const styles = useStyles();
  const router = useRouter();
  const { isAuthenticated, openAuthModal, signOut } = useUser();

  const [isOpenMyPageList, setIsOpenMyPageList] = useState<boolean>(false);

  const handleButtonClick = useCallback((url: string) => {
    router.push(url);
    closeDrawer();
  }, []);

  const handleMyPageButtonClick = useCallback(() => {
    if (!isAuthenticated) {
      closeDrawer();
      openAuthModal();
    } else {
      if (isOpenMyPageList) {
        setIsOpenMyPageList(false);
      } else {
        setIsOpenMyPageList(true);
      }
    }
  }, [isAuthenticated, isOpenMyPageList]);

  return (
    <List style={{ width: "300px" }}>
      <ListItem button onClick={closeDrawer}>
        <ListItemIcon>
          <CloseOutlinedIcon />
        </ListItemIcon>
      </ListItem>
      <ListItem button onClick={() => handleButtonClick("/products/books")}>
        <ListItemIcon>
          <MenuBookIcon />
        </ListItemIcon>
        <ListItemText>Book</ListItemText>
      </ListItem>
      <ListItem button onClick={() => handleButtonClick("/products/clothes")}>
        <ListItemIcon>
          <WorkSharpIcon />
        </ListItemIcon>
        <ListItemText>Clothes</ListItemText>
      </ListItem>
      <ListItem button onClick={() => handleButtonClick("/products/foods")}>
        <ListItemIcon>
          <FastfoodOutlinedIcon />
        </ListItemIcon>
        <ListItemText>Food</ListItemText>
      </ListItem>
      <ListItem button onClick={handleMyPageButtonClick}>
        <ListItemIcon>
          <AccountCircleOutlinedIcon />
        </ListItemIcon>
        <ListItemText>My Page</ListItemText>
        {isOpenMyPageList ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={isOpenMyPageList}>
        <List disablePadding>
          <ListItem
            button
            onClick={() => {
              handleButtonClick("/my-page/order-list");
              setIsOpenMyPageList(false);
            }}
            className={styles.nested}
          >
            <ListItemIcon>
              <ListAltIcon />
            </ListItemIcon>
            <ListItemText>注文履歴</ListItemText>
          </ListItem>
          <ListItem
            button
            onClick={() => {
              handleButtonClick("/my-page/settings");
              setIsOpenMyPageList(false);
            }}
            className={styles.nested}
          >
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText>ユーザー情報</ListItemText>
          </ListItem>
          <ListItem
            button
            onClick={() => {
              signOut();
              setIsOpenMyPageList(false);
            }}
            className={styles.nested}
          >
            <ListItemIcon>
              <ExitToAppIcon />
            </ListItemIcon>
            <ListItemText>ログアウト</ListItemText>
          </ListItem>
        </List>
      </Collapse>
    </List>
  );
};
