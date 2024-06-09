import { Box, styled } from "@mui/system";


export const NameBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(2),
  flexDirection: "column",
  marginBottom: theme.spacing(1),
  [theme.breakpoints.up('md')]: {
    flexDirection: "row",
    marginBottom: 0,
  }
}));
