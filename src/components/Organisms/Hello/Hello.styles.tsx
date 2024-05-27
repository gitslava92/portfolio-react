import { Box, styled } from "@mui/system";

export const ButtonsBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(3),
  marginTop: theme.spacing(2),
  [theme.breakpoints.down("sm")]: {
    justifyContent: "center",
  },
}));

export const ImageBox = styled(Box)(({ theme }) => ({
  display: "flex",
  width: "100%",
  height: "100%",
  paddingTop: theme.spacing(2),
}));
