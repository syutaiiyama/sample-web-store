import React from "react";
import { Header } from "../Header/Header";
import { createStyles, makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appLayout: {
      backgroundColor: "#f7f7f7",
    },
    main: {
      width: "100%",
      display: "flex",
      flexWrap: "wrap",
      boxSizing: "border-box",
      backgroundColor: "#ffffff",
      transition: "padding-right 0.35s ease-in-out",
      padding: "0 10px 40px",
    },
  })
);

export const AppLayout: React.FC = ({ children }) => {
  const styles = useStyles();

  return (
    <div className={styles.appLayout}>
      <Header />
      <div style={{ height: "80px" }} />
      <div className={styles.main}>{children}</div>
    </div>
  );
};
