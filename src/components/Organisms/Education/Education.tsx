import { useCustomTranslation } from "@common/i18n";
import { ItemTitle, Section, Title } from "@components/Atoms/styles";
import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { forwardRef } from "react";

interface EducationProps {
  id?: string;
}

const getEducations = (tc: (msg: string) => string) => {
  return [
    {
      id: 0,
      title: tc("Vadim Prokopchuk's layout course"),
      subtitle: tc("from 0 to 1"),
      period: "Apr, 2015 — May, 2015",
      text: tc(
        "Learn to use App Engine, Google's Platform as a Service, to build the backend for web apps that scale not only as your user base grows but as request volumes peaks with sudden demand."
      ),
    },
  ];
};

export const Education = forwardRef<HTMLDivElement, EducationProps>(
  (props, ref) => {
    const { id } = props;
    const { tc, tca } = useCustomTranslation();

    const educations = getEducations(tc);

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
                    {tc(education.period)}
                  </Typography>
                  <Typography variant="body1">{tc(education.text)}</Typography>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Section>
    );
  }
);
