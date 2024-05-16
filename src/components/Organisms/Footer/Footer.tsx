import { useCustomTranslation } from "@common/i18n";
import { palette } from "@common/theme";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { forwardRef } from "react";

interface FooterProps {
  id?: string;
}

export const Footer = forwardRef<HTMLDivElement, FooterProps>((props, ref) => {
  const { id } = props;
  const { tc, t } = useCustomTranslation();

  return (
    <Box
      component="footer"
      ref={ref}
      id={id}
      sx={{ backgroundColor: palette.secondary.main, p: 2 }}
    >
      <Typography variant="body1" color="primary" textAlign="center">{`${tc(
        "copyrights"
      )} ${new Date().getFullYear()} ${t("Pustovit Viacheslav")}`}</Typography>
    </Box>
  );
});
