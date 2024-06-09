import { Typography } from "@mui/material";
import { Box as MUIBox, styled } from "@mui/system";


export const Section = styled(MUIBox)(({ theme }) => ({
  padding: theme.spacing(5, 0),
  position: "relative",
  scrollMarginTop: 56,
  [theme.breakpoints.up('md')]: {
    scrollMarginTop: 64,
  }
}));

export const Title = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontWeight: 600
}));

export const ItemTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontWeight: 600
}));