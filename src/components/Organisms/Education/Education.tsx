import { useCustomTranslation } from "@common/i18n";
import { ItemTitle, Section, Title } from "@components/Atoms/styles";
import { Grid, Typography } from "@mui/material";
import { forwardRef } from "react";

interface EducationProps {
  id?: string;
}

const educations = [
  {
    id: 0,
    title: "Google Developer Training",
    subtitle: "Google",
    period: "Apr, 2015 — May, 2015",
    text: "Learn to use App Engine, Google's Platform as a Service, to build the backend for web apps that scale not only as your user base grows but as request volumes peaks with sudden demand.",
  },
  {
    id: 1,
    title: "Software Development",
    subtitle: "Boston University",
    period: "Jan, 2005 — May, 2009",
    text: "BSc (Hons) in Software Development. Outstanding Academic Achievement Award.",
  },
];

export const Education = forwardRef<HTMLDivElement, EducationProps>(
  (props, ref) => {
    const { id } = props;
    const { tc, tca } = useCustomTranslation();

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
                <Grid item xs={12} md={6} key={education.id}>
                  <ItemTitle variant="h4">{tc(education.title)}</ItemTitle>
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
