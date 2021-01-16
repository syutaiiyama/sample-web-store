import App, { Container } from "next/app";
import React from "react";
import { AppLayout } from "../containers/LayoutContainer/AppLayout";

export default function ExtendedApp({ Component, pageProps, query }) {
  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
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
