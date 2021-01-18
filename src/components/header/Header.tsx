import React, { useEffect, useState } from "react";
import {
  TextField,
  IconButton,
  Drawer,
  Badge,
  Button,
} from "@material-ui/core";
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
import { useCart } from "../../contexts/cart/cart.context";

export const Header: React.FC = () => {
  const router = useRouter();
  const { openCartModal, cartItems } = useCart();
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
        {router.pathname === "/checkout" ? (
          <div style={{ flexGrow: 1 }} />
        ) : (
          <>
            <TextField
              style={{ flexGrow: 1 }}
              variant={"outlined"}
              size={"small"}
              label={"検索"}
            />
            <IconButton color={"primary"}>
              <SearchIcon />
            </IconButton>
          </>
        )}
        {isAuthenticated ? (
          <IconButton
            onClick={() => {
              if (!isAuthenticated) {
                openAuthModal();
              }
            }}
          >
            <AccountCircleOutlinedIcon />
          </IconButton>
        ) : (
          <Button
            variant={"outlined"}
            onClick={() => {
              if (!isAuthenticated) {
                openAuthModal();
              }
            }}
          >
            ログイン
          </Button>
        )}
        <IconButton
          onClick={() => {
            if (cartItems.length > 0) {
              openCartModal();
            }
          }}
        >
          <Badge badgeContent={cartItems.length} color={"primary"}>
            <ShoppingCartOutlinedIcon fontSize={"large"} />
          </Badge>
        </IconButton>
      </div>
    );
  if (deviceType === "mobile" || deviceType === "tablet")
    return (
      <div className={styles.wrapper}>
        <IconButton color={"primary"} onClick={() => setIsModalOpen(true)}>
          <MenuOutlinedIcon />
        </IconButton>
        {router.pathname === "/checkout" ? (
          <div style={{ flexGrow: 1 }} />
        ) : (
          <>
            <TextField
              style={{ flexGrow: 1 }}
              variant={"outlined"}
              size={"small"}
              label={"検索"}
            />
            <IconButton color={"primary"}>
              <SearchIcon />
            </IconButton>
          </>
        )}
        <IconButton
          onClick={() => {
            if (cartItems.length > 0) {
              openCartModal();
            }
          }}
        >
          <Badge badgeContent={cartItems.length} color={"primary"}>
            <ShoppingCartOutlinedIcon fontSize={"large"} />
          </Badge>
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
