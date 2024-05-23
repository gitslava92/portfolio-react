import { Toolbar as MUIToolbar } from "@mui/material";
import { Box, styled } from "@mui/system";

export const Toolbar = styled(MUIToolbar)({
  padding: "0px !important",
  position: "relative",
  justifyContent: "space-between",
});

export const DraverRootBox = styled(Box)(({ theme }) => ({
  textAlign: "center",
  paddingTop: theme.spacing(2),
}));

export const DraverBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: theme.spacing(2),
}));
