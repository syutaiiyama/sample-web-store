import React, { useEffect, useState } from "react";
import { TextField, IconButton, Drawer } from "@material-ui/core";
import styles from "./Header.module.css";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import SearchIcon from "@material-ui/icons/Search";
import { HeaderIcon } from "./HeaderIcon";
import { useRouter } from "next/router";
import { Pages } from "../../interfaces/pages";
import { CategorySelector } from "./CategorySelector";
import { useApp } from "../../contexts/app/app.context";
import { DrawerMenu } from "../Drawer/DrawerMenu";
import MenuOutlinedIcon from "@material-ui/icons/MenuOutlined";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import { useUser } from "../../contexts/user/user.context";

export const Header: React.FC = () => {
  const router = useRouter();
  const { isAuthenticated, openAuthModal } = useUser();
  const [pageType, setPageType] = useState(Pages.Book);
  const { deviceType } = useApp();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    if (router.pathname === Pages.Book) {
      setPageType(Pages.Book);
    } else if (router.pathname === Pages.Clothe) {
      setPageType(Pages.Clothe);
    } else if (router.pathname === Pages.Food) {
      setPageType(Pages.Food);
    }
  }, [router.pathname]);

  if (deviceType === "desktop")
    return (
      <div className={styles.wrapper}>
        <HeaderIcon pageType={pageType} />
        <CategorySelector pageType={pageType} />
        <TextField
          style={{ flexGrow: 1 }}
          variant={"outlined"}
          size={"small"}
          label={"検索"}
        />
        <IconButton color={"primary"}>
          <SearchIcon />
        </IconButton>
        <IconButton
          onClick={() => {
            if (!isAuthenticated) {
              openAuthModal();
            }
          }}
        >
          <AccountCircleOutlinedIcon />
        </IconButton>
        <IconButton>
          <ShoppingCartOutlinedIcon fontSize={"large"} />
        </IconButton>
      </div>
    );
  if (deviceType === "mobile" || deviceType === "tablet")
    return (
      <div className={styles.wrapper}>
        <IconButton color={"primary"} onClick={() => setIsModalOpen(true)}>
          <MenuOutlinedIcon />
        </IconButton>
        <TextField
          style={{ flexGrow: 1 }}
          variant={"outlined"}
          size={"small"}
          label={"検索"}
        />
        <IconButton
          color={"primary"}
          style={{ padding: "0", margin: "0 0 0 10px" }}
        >
          <SearchIcon />
        </IconButton>
        <IconButton>
          <ShoppingCartOutlinedIcon />
        </IconButton>
        <Drawer
          anchor={"left"}
          open={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        >
          <DrawerMenu closeDrawer={() => setIsModalOpen(false)} />
        </Drawer>
      </div>
    );
  return <></>;
};
