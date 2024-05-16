import { useCustomTranslation } from "@common/i18n";
import { Title } from "@components/Atoms/styles";
import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { forwardRef } from "react";


interface ContactProps {
  id?: string;
}

export const Contact = forwardRef<HTMLDivElement, ContactProps>((props, ref) => {
  const { id } = props;
  const { tc, tca } = useCustomTranslation();

  return (
    <Box
      component="footer"
      ref={ref}
      id={id}
    >
      <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Title variant="h2" sx={{ marginBottom: 1 }}>
              {tc('contact')}
            </Title>
            <Typography variant="body1" sx={{ marginBottom: 2 }}>
              {tca(
                'are you working on something great?! I would love to help make it happen! drop me a letter and start your project right now! just do it.',
                '! '
              )}
            </Typography>
          </Grid>
          <Grid item xs={12} md={8}>
            <Grid container spacing={2}>
              ...
            </Grid>
          </Grid>
        </Grid>
    </Box>
  );
});