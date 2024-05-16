import { useCustomTranslation } from "@common/i18n";
import { Section } from "@components/Atoms/styles";
import { Contacts } from "@components/Molecules/Contacts/Contacts";
import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { forwardRef } from "react";

interface HelloProps {
  id?: string;
}

export const Hello = forwardRef<HTMLDivElement, HelloProps>((props, ref) => {
  const { id } = props;
  const { tc, tca } = useCustomTranslation();

  return (
    <Section component="section" ref={ref} id={id}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Typography variant="h1" fontWeight={600} sx={{ marginBottom: 1 }}>
            {tc("i am Viacheslav")}
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: 2 }}>
            {tca(
              'i am a web developer from Russia, Crimea. i am currently working full-time as a junior web developer at a "Source" company. i want to get more work and improve my web developer skills.',
              ". "
            )}
            .
          </Typography>
          <Contacts />
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src="/pustovitslava.jpg"
            alt={tca("Pustovit Viacheslav")}
            sx={{
              maxHeight: { xs: 320, sm: 400, md: 320 },
              objectFit: "cover",
              objectPosition: "top center",
              width: "100%",
            }}
          />
        </Grid>
      </Grid>
    </Section>
  );
});
