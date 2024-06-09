import { Toolbar as MUIToolbar, Drawer as MUIDrawer, IconButton as MUIIconButton } from "@mui/material";
import { Box, styled } from "@mui/system";
import { UI } from "@common/constants";

export const Toolbar = styled(MUIToolbar)({
  padding: "0px !important",
  position: "relative",
  justifyContent: "space-between",
});

export const Drawer = styled(MUIDrawer)(({ theme }) => ({
  display: "block",
  "& .MuiDrawer-paper": {
    boxSizing: "border-box",
    width: UI.DrawerWidth,
  },
  [theme.breakpoints.up('md')]: {
    display: "none"
  }
}));

export const DrawerRootBox = styled(Box)(({ theme }) => ({
  textAlign: "center",
  paddingTop: theme.spacing(2),
}));

export const DrawerBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: theme.spacing(2),
}));

export const MenuItemsBox = styled(Box)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.up('md')]: {
    display: 'block',
  }
}));

export const IconButton = styled(MUIIconButton)(({ theme }) => ({
  marginRight: theme.spacing(2),
  [theme.breakpoints.up('md')]: {
    display: 'none',
  }
}));
