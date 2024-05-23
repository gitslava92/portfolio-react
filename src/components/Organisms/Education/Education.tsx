import { getPeriod } from "@common/helpers";
import { useCustomTranslation } from "@common/i18n";
import { ItemTitle, Section, Title } from "@components/Atoms/styles";
import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { forwardRef } from "react";

interface EducationProps {
  id?: string;
}

const educations = [
  {
    id: 0,
    title: "Vadim Prokopchuk's layout course",
    subtitle: "from 0 to 1",
    period: ["2020-12-01T00:00:00Z", "2021-02-14T00:00:00Z"],
    text: "html, css/sass/scss, BEM methodology, jquery basics, js basics, gulp, git, adaptive layout, website hosting",
  },
];

export const Education = forwardRef<HTMLDivElement, EducationProps>(
  (props, ref) => {
    const { id } = props;
    const { t, tc, tca } = useCustomTranslation();

    return (
      <Section component="section" ref={ref} id={id}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Title variant="h2" sx={{ marginBottom: 1 }}>
              {tc("education")}
            </Title>
            <Typography variant="body1" sx={{ marginBottom: 2 }}>
              {tca(
                "i have always been convinced of the importance of education. i try to learn something new every day.",
                ". "
              )}
            </Typography>
          </Grid>
          <Grid item xs={12} md={8}>
            <Grid container spacing={2}>
              {educations.map((education) => (
                <Grid
                  item
                  xs={12}
                  md={educations.length > 1 ? 6 : 12}
                  key={education.id}
                >
                  <Box display="flex" gap={1} mb={1}>
                    <ItemTitle variant="h4">{tc(education.title)}</ItemTitle>
                    <Typography variant="body1">
                      {tc(education.subtitle)}
                    </Typography>
                  </Box>
                  <Typography variant="body1" sx={{ marginBottom: 1 }}>
                    {getPeriod(education.period, tc)}
                  </Typography>
                  <Typography variant="body1">{t(education.text)}</Typography>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Section>
    );
  }
);
