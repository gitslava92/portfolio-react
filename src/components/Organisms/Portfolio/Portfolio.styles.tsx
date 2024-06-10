import { Box, styled } from "@mui/system";

export const ImagesListBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: 'center',
  flexWrap: "wrap",
  gap: theme.spacing(3),
  marginBottom: theme.spacing(1),
  marginTop: theme.spacing(2),
  height: '100%',
  [theme.breakpoints.up("md")]: {
    gap: theme.spacing(3)
  }
}));
