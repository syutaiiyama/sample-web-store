import React from "react";
import { Header } from "../../components/Header/Header";
import styles from "./AppLayout.module.css";

export const AppLayout: React.FC = ({ children }) => {
  return (
    <div className={styles.app_layout}>
      <Header />
      <div style={{ height: "80px" }} />
      <div className={styles.main}>{children}</div>
    </div>
  );
};
