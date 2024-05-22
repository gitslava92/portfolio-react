import { useCustomTranslation } from "@common/i18n";
import { ItemTitle, Section, Title } from "@components/Atoms/styles";
import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { forwardRef } from "react";

interface ExperienceProps {
  id?: string;
}

const getExperiences = (tc: (msg: string) => string) => {
  return [
    {
      id: 0,
      title: tc("HTML/CSS developer"),
      subtitle: tc("sourse"),
      period: "September, 2021 — September, 2022",
      text: tc(
        "Leading a small team on a variety of development projects and delivering solutions to meet and exceed clients’ briefs."
      ),
    },
    {
      id: 1,
      title: tc("Frontend Developer"),
      subtitle: tc("sourse"),
      period: "September, 2021 — September, 2022",
      text: tc(
        "Designed and developed user-friendly website, including optimized check-out page that increased user clicks, and subsequently customer purchases by 20%."
      ),
    },
    {
      id: 2,
      title: tc("Frontend Developer"),
      subtitle: tc("sourse"),
      period: "September, 2021 — September, 2022",
      text: tc(
        "Designed and developed user-friendly website, including optimized check-out page that increased user clicks, and subsequently customer purchases by 20%."
      ),
    },
    {
      id: 3,
      title: tc("IT Specialist"),
      subtitle: tc("Motion Studio"),
      period: "Dec, 2009 — Present",
      text: tc(
        "Revamped web application security applications, minimizing hacker attacks from 2.3% to 0.02%."
      ),
    },
  ];
};

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
              {tca(
                "active participation in a large startup project allowed me to gain a lot of experience in a short time.",
                ". "
              )}
            </Typography>
          </Grid>
          <Grid item xs={12} md={8}>
            <Grid container spacing={2}>
              {getExperiences(tc).map((experience) => (
                <Grid item xs={12} md={6} key={experience.id}>
                  <Box display="flex" gap={1} mb={1}>
                    <ItemTitle variant="h4">{tc(experience.title)}</ItemTitle>
                    <Typography variant="body1">
                      {tc(experience.subtitle)}
                    </Typography>
                  </Box>
                  <Typography variant="body1" sx={{ marginBottom: 1 }}>
                    {tc(experience.period)}
                  </Typography>
                  <Typography variant="body1" sx={{ fontStyle: "italic" }}>
                    {tc(experience.text)}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Section>
    );
  }
);
