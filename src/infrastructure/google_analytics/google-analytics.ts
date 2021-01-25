import Router from "next/router";
import { TProduct } from "../../contexts/products/products.type";

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
// https://developers.google.com/gtagjs/reference/event?hl=ja#begin_checkout
export const pageview = (url) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  window.gtag("config", process.env.GA_TRACKING_ID, {
    page_path: url,
  });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
/** 自分で作ったイベントを発行したい時に使います**/
export const event = ({ action, category, label, value }) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

export const selectContent = (product: TProduct) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  window.gtag("event", "select_content", {
    content_type: product.category,
    items: [
      {
        name: product.name,
        price: product.price,
      },
    ],
  });
};

export const addToCart = (product: TProduct, quantity: number) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  window.gtag("event", "add_to_cart", {
    currency: "JPY",
    items: [
      {
        name: product.name,
        price: product.price,
        quantity: quantity,
      },
    ],
    value: product.price * quantity,
  });
};

export const removeFromCart = (product: TProduct, quantity: number) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  window.gtag("event", "remove_from_cart", {
    currency: "JPY",
    items: [
      {
        name: product.name,
        price: product.price,
        quantity: quantity,
      },
    ],
    value: product.price * quantity,
  });
};

export const signUp = () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  window.gtag("event", "sign_up");
};

export const signIn = () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  window.gtag("event", "login");
};

export const signOut = () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  window.gtag("event", "logout");
};

export const search = (searchText: string) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  window.gtag("event", "search", {
    search_term: searchText,
  });
};

// export const purchase = () => {};

// export const beginCheckout = () => {};

Router.events.on("routeChangeComplete", (url) => pageview(url));
