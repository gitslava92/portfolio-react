import { getPeriod } from "@common/helpers";
import { useCustomTranslation } from "@common/i18n";
import { ItemTitle, Section, Title } from "@components/Atoms/styles";
import { TitleBox } from "@components/Organisms/Education/Education.styles";
import { Grid, Typography } from "@mui/material";
import { forwardRef } from "react";

interface EducationProps {
  id?: string;
}

const educations = [
  {
    id: 0,
    title: "Education.SecondEducation.Title",
    subtitle: "Education.SecondEducation.SubTitle",
    period: ["2020-12-01T00:00:00Z", "2021-02-14T00:00:00Z"],
    text: "Education.SecondEducation.Text",
  },
  {
    id: 1,
    title: "Education.FirstEducation.Title",
    subtitle: "Education.FirstEducation.SubTitle",
    period: ["1999-09-01T00:00:00Z", "2004-06-01T00:00:00Z"],
    text: "Education.FirstEducation.Text",
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
              {tca("Education.SectionTitle", ". ")}
            </Typography>
          </Grid>

          <Grid item xs={12} md={8}>
            <Grid container spacing={3}>
              {educations.map((education) => (
                <Grid item xs={12} key={education.id}>
                  <TitleBox>
                    <ItemTitle variant="h4">{tc(education.title)}</ItemTitle>
                    <Typography variant="body2" sx={{ whiteSpace: "nowrap" }}>
                      {tc(education.subtitle)}
                    </Typography>
                  </TitleBox>

                  <Typography variant="body2" sx={{ marginBottom: 1 }}>
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
