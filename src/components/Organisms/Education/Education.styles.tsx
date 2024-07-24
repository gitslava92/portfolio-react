import { Box, styled } from "@mui/system";

export const TitleBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(1),
  justifyContent: "space-between",
  marginBottom: theme.spacing(1)
}));
