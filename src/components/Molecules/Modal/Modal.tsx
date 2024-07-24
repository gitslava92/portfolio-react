import { Box, styled } from "@mui//system";
import { Backdrop, Fade, Modal as MUIModal } from "@mui/material";
import { PropsWithChildren } from "react";

export const RootBox = styled(Box, {
  shouldForwardProp: (prop) => prop !== "maxWidth" && prop !== "maxHeight",
})<{
  maxWidth: string | number | undefined;
  maxHeight: string | number | undefined;
}>(({ theme, maxWidth, maxHeight }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: "100%",
  width: "95%",
  backgroundColor: theme.palette.background.default,
  zIndex: (theme.zIndex as { drawer: number }).drawer + 3,
  padding: theme.spacing(2),
  borderRadius: theme.spacing(1),
  maxHeight: maxHeight || "initial",
  height: maxHeight && maxHeight !== "auto" ? "95%" : "initial",
  overflowY: maxHeight ? "auto" : "unset",
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(4),
    maxWidth: maxWidth || 800,
  },
}));

interface ModalProps {
  open: boolean;
  setClose: () => void;
  maxWidth?: string | number | undefined;
  maxHeight?: string | number | undefined;
}

export const Modal = ({
  children,
  open,
  setClose,
  maxWidth,
  maxHeight,
}: PropsWithChildren<ModalProps>) => {
  return (
    <>
      <MUIModal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={setClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <RootBox maxWidth={maxWidth} maxHeight={maxHeight}>
            {children}
          </RootBox>
        </Fade>
      </MUIModal>
    </>
  );
};
