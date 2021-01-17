import React, { useContext } from "react";
import { loadingOperations } from "./loading.operations";
import { createContext } from "react";
import { CircularProgress, Modal } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

type ContextProps = {
  openLoadingModal: (message: string) => void;
  closeLoadingModal: () => void;
};

const LoadingContext = createContext({} as ContextProps);

export const LoadingProvider = ({ children }) => {
  const {
    isLoading,
    loadingMessage,
    openLoadingModal,
    closeLoadingModal,
  } = loadingOperations();
  return (
    <LoadingContext.Provider
      value={{
        openLoadingModal,
        closeLoadingModal,
      }}
    >
      {children}
      <Modal open={isLoading} style={{ zIndex: 10000 }}>
        <div
          style={{
            position: "fixed",
            top: "-10%",
            left: "-10%",
            bottom: "-10%",
            right: "-10%",
            background: "rgba(255,255,255,0.8)",
          }}
        >
          <div
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              width: "200px",
              marginLeft: "-100px",
              marginTop: "-40px",
              textAlign: "center",
            }}
          >
            <CircularProgress
              color="secondary"
              style={{
                width: "50px",
                height: "50px",
              }}
            />
            <div style={{ height: "10px" }} />
            <Typography variant="body2">{loadingMessage}</Typography>
          </div>
        </div>
      </Modal>
    </LoadingContext.Provider>
  );
};

export const useLoadingModal = () => useContext(LoadingContext);
