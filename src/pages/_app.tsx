import App from "next/app";
import React from "react";
import { AppLayout } from "../containers/LayoutContainer/AppLayout";
import { ThemeProvider } from "@material-ui/styles";
import { theme } from "../style/muiTheme";
import { AppProvider } from "../contexts/app/app.context";
import { LoadingProvider } from "../contexts/loading/loading.context";
import * as Sentry from "@sentry/react";
import { UserProvider } from "../contexts/user/user.context";
import { CartProvider } from "../contexts/cart/cart.context";

export default function ExtendedApp({ Component, pageProps, query }) {
  Sentry.init({
    dsn:
      "https://f8b1ea00b7f14d8aaffe22dc5d23efc0@o505953.ingest.sentry.io/5595165",
  });

  return (
    <AppProvider>
      <LoadingProvider>
        <UserProvider>
          <CartProvider>
            <ThemeProvider theme={theme}>
              <AppLayout>
                <Component {...pageProps} />
              </AppLayout>
            </ThemeProvider>
          </CartProvider>
        </UserProvider>
      </LoadingProvider>
    </AppProvider>
  );
}

ExtendedApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  const { req, query } = appContext.ctx;
  const userAgent = req ? req.headers["user-agent"] : navigator.userAgent;
  // const { locale } = parseCookies(req);
  const locale = "ja";
  return { ...appProps, userAgent, query, locale };
};
