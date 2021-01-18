import React, { useCallback, useEffect } from "react";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import WorkSharpIcon from "@material-ui/icons/WorkSharp";
import FastfoodOutlinedIcon from "@material-ui/icons/FastfoodOutlined";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import { useRouter } from "next/router";
import { useUser } from "../../contexts/user/user.context";

type DrawerMenuProps = {
  closeDrawer: () => void;
};

export const DrawerMenu: React.FC<DrawerMenuProps> = ({ closeDrawer }) => {
  const router = useRouter();
  const { isAuthenticated, openAuthModal } = useUser();

  const handleButtonClick = useCallback((url: string) => {
    router.push(url);
    closeDrawer();
  }, []);

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
      <ListItem
        button
        onClick={() => {
          if (!isAuthenticated) {
            closeDrawer();
            openAuthModal();
          } else {
            //router.push("/mypage");
          }
        }}
      >
        <ListItemIcon>
          <AccountCircleOutlinedIcon />
        </ListItemIcon>
        <ListItemText>My Page</ListItemText>
      </ListItem>
    </List>
  );
};
