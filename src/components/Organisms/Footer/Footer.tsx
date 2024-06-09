import { useCustomTranslation } from "@common/i18n";
import { Typography } from "@mui/material";
import { useTheme, Theme } from "@mui/material/styles";
import { Box } from "@mui/system";
import { forwardRef } from "react";

interface FooterProps {
  id?: string;
}

export const Footer = forwardRef<HTMLDivElement, FooterProps>((props, ref) => {
  const { id } = props;
  const { tc, t } = useCustomTranslation();
  const theme = useTheme<Theme>();

  return (
    <Box
      component="footer"
      ref={ref}
      id={id}
      sx={{ backgroundColor: theme.palette.background.default, p: 2 }}
    >
      <Typography variant="body1" color="primary" textAlign="center">{`${tc(
        "copyrights"
      )}, ${new Date().getFullYear()} ${t("Pustovit Viacheslav")}`}</Typography>
    </Box>
  );
});
