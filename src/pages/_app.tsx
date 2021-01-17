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
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import "../style/global.css";

export default function ExtendedApp({ Component, pageProps, query }) {
  Sentry.init({
    dsn:
      "https://f8b1ea00b7f14d8aaffe22dc5d23efc0@o505953.ingest.sentry.io/5595165",
  });

  const stripePromise = loadStripe(process.env.STRIPE_PUBLIC_KEY);

  return (
    <Elements stripe={stripePromise}>
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
    </Elements>
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
