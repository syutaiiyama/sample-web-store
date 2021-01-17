import React from "react";
import { Backdrop, Fade, Grow, Modal } from "@material-ui/core";

type MuiModalProps = {
  isModalOpen: boolean;
  onClose: () => void;
  animation?: "grow" | "fade";
};

export const MuiModal: React.FC<MuiModalProps> = ({
  children,
  onClose,
  isModalOpen,
  animation = "fade",
}) => {
  return (
    <Modal
      open={isModalOpen}
      onClose={onClose}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
      }}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      {animation === "grow" ? (
        <Grow in={isModalOpen}>
          <div
            style={{ maxWidth: "90%", maxHeight: "90%", overflow: "scroll" }}
          >
            {children}
          </div>
        </Grow>
      ) : (
        <Fade in={isModalOpen}>
          <>{children}</>
        </Fade>
      )}
    </Modal>
  );
};
