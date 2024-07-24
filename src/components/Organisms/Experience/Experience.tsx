import { getPeriod } from "@common/helpers";
import { useCustomTranslation } from "@common/i18n";
import { ItemTitle, Section, Title } from "@components/Atoms/styles";
import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { forwardRef } from "react";

interface ExperienceProps {
  id?: string;
}

const experiences = [
  {
    id: 0,
    title: "Frontend Developer",
    subtitle: "sourсe, ltd",
    period: ["2022-07-01T00:00:00Z", "present"],
    text: "Experiense.FourthWork.Text",
  },
  {
    id: 1,
    title: "Frontend Developer",
    subtitle: "freelance",
    period: ["2022-05-01T00:00:00Z", "2022-07-01T00:00:00Z"],
    text: "Experiense.ThirdWork.Text",
  },
  {
    id: 2,
    title: "Frontend Developer",
    subtitle: "sourсe, ltd",
    period: ["2022-01-01T00:00:00Z", "2022-05-01T00:00:00Z"],
    text: "Experiense.SecondWork.Text",
  },
  {
    id: 3,
    title: "HTML/CSS developer",
    subtitle: "sourсe, ltd",
    period: ["2021-09-01T00:00:00Z", "2022-01-01T00:00:00Z"],
    text: "Experiense.FirstWork.Text",
  },
];

export const Experience = forwardRef<HTMLDivElement, ExperienceProps>(
  (props, ref) => {
    const { id } = props;

    const { tc, tca } = useCustomTranslation();

    return (
      <Section component="section" ref={ref} id={id}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Title variant="h2" sx={{ marginBottom: 1 }}>
              {tc("experience")}
            </Title>
            <Typography variant="body1" sx={{ marginBottom: 2 }}>
              {tca("Experience.SectionText", ". ")}
            </Typography>
          </Grid>
          <Grid item xs={12} md={8}>
            <Grid container spacing={2}>
              {experiences.map((experience) => (
                <Grid item xs={12} key={experience.id}>
                  <Box display="flex" gap={1} mb={1}>
                    {tca(experience.title, ". ")
                      .split("||")
                      .map((titleItem) => (
                        <ItemTitle variant="h4" key={titleItem}>
                          {titleItem}
                        </ItemTitle>
                      ))}
                    <Typography variant="body1">
                      {tc(experience.subtitle)}
                    </Typography>
                  </Box>
                  <Typography variant="body2" sx={{ marginBottom: 1 }}>
                    {getPeriod(experience.period, tc)}
                  </Typography>
                  {tc(experience.text)
                    .split(" ||")
                    .map((textItem) => (
                      <Typography
                        variant="body1"
                        sx={{ fontStyle: "italic", marginBottom: 1 }}
                        key={textItem}
                      >
                        {textItem}
                      </Typography>
                    ))}
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Section>
    );
  }
);
