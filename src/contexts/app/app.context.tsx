import { TDeviceType } from "./app.type";
import React, { createContext, useContext } from "react";
import { appOperations } from "./app.operations";
import { GridSpacing } from "@material-ui/core";

type AppContextProps = {
  isSticky: boolean;
  isSidebarSticky: boolean;
  updateIsSticky: (isSticky: boolean) => void;
  updateIsSidebarSticky: (isSidebarSticky: boolean) => void;
  deviceType: TDeviceType;
  containerSpacing: GridSpacing;
};

const AppContext = createContext({} as AppContextProps);

export const AppProvider = ({ children }) => {
  const operations = appOperations();

  return (
    <AppContext.Provider value={operations}>{children}</AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
