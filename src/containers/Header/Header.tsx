import React, { useCallback, useEffect, useState } from "react";
import {
  TextField,
  IconButton,
  Drawer,
  Badge,
  Button,
  makeStyles,
  Theme,
  createStyles,
} from "@material-ui/core";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import SearchIcon from "@material-ui/icons/Search";
import { HeaderIcon } from "./HeaderIcon";
import { useRouter } from "next/router";
import { PagesType } from "../../interfaces/pages.type";
import { CategorySelector } from "./CategorySelector";
import { useApp } from "../../contexts/app/app.context";
import { DrawerMenu } from "../Drawer/DrawerMenu";
import MenuOutlinedIcon from "@material-ui/icons/MenuOutlined";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import { useUser } from "../../contexts/user/user.context";
import { useCart } from "../../contexts/cart/cart.context";
import { TCartItem } from "../../contexts/cart/cart.type";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    headerWrapper: {
      width: "100%",
      maxWidth: "100%",
      height: "80px",
      boxSizing: "border-box",
      padding: "20px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      position: "fixed",
      zIndex: 1000,
      top: 0,
      left: 0,
      backgroundColor: "#fff",
      boxShadow: "0 3px 7px rgba(0, 0, 0, 0.2)",
    },
    mobileHeaderWrapper: {
      width: "100%",
      maxWidth: "100%",
      height: "80px",
      boxSizing: "border-box",
      padding: "5px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      position: "fixed",
      zIndex: 1000,
      top: 0,
      left: 0,
      backgroundColor: "#fff",
      boxShadow: "0 3px 7px rgba(0, 0, 0, 0.2)",
    },
  })
);

export const Header: React.FC = () => {
  const styles = useStyles();
  const router = useRouter();
  const { openCartModal, cartItems } = useCart();
  const { isAuthenticated, openAuthModal } = useUser();
  const [pageType, setPageType] = useState(PagesType.Book);
  const [searchText, setSearchText] = useState<string>("");
  const { deviceType } = useApp();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleSearch = useCallback(() => {
    router.push({
      pathname: "/products/[item]",
      query: { item: searchText },
    });
  }, [searchText]);

  useEffect(() => {
    if (router.pathname === PagesType.Book) {
      setPageType(PagesType.Book);
    } else if (router.pathname === PagesType.Clothe) {
      setPageType(PagesType.Clothe);
    } else if (router.pathname === PagesType.Food) {
      setPageType(PagesType.Food);
    }
  }, [router.pathname]);

  useEffect(() => {
    if (!router.query.item) {
      setSearchText("");
    }
  }, [router.query, router.pathname]);

  let cartItemQuantity = 0;
  cartItems.forEach((item: TCartItem) => {
    cartItemQuantity += item.quantity;
  });

  if (deviceType === "desktop")
    return (
      <div className={styles.headerWrapper}>
        <HeaderIcon pageType={pageType} />
        <CategorySelector pageType={pageType} />
        {router.pathname === "/checkout" ? (
          <div style={{ flexGrow: 1 }} />
        ) : (
          <>
            <TextField
              style={{ flexGrow: 1 }}
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              variant={"outlined"}
              size={"small"}
              label={"検索"}
              color={"primary"}
            />
            <IconButton
              onClick={() => handleSearch()}
              color={"primary"}
              disabled={searchText.length === 0}
            >
              <SearchIcon />
            </IconButton>
          </>
        )}
        {isAuthenticated ? (
          <IconButton
            onClick={() => {
              if (!isAuthenticated) {
                openAuthModal();
              } else {
                router.push("/my-page/order-list");
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
          <Badge badgeContent={cartItemQuantity} color={"primary"}>
            <ShoppingCartOutlinedIcon fontSize={"large"} />
          </Badge>
        </IconButton>
      </div>
    );
  if (deviceType === "mobile" || deviceType === "tablet")
    return (
      <div className={styles.mobileHeaderWrapper}>
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
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              color={"primary"}
            />
            <IconButton
              onClick={() => handleSearch()}
              color={"primary"}
              disabled={searchText.length === 0}
              style={{ paddingRight: "0" }}
            >
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
          <Badge badgeContent={cartItemQuantity} color={"primary"}>
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
