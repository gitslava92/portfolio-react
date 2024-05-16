import { useCustomTranslation } from "@common/i18n";
import { ItemTitle, Section, Title } from "@components/Atoms/styles";
import { Grid, Typography } from "@mui/material";
import { forwardRef } from "react";

interface ExperienceProps {
  id?: string;
}

const experiences = [
  {
    id: 0,
    title: "Web Developer",
    subtitle: "Coolor Studio",
    period: "May, 2014 — Present",
    text: "Leading a small team on a variety of development projects and delivering solutions to meet and exceed clients’ briefs.",
  },
  {
    id: 1,
    title: "Middle Frontend Developer",
    subtitle: "Illskill Agency",
    period: "Jan, 2013 — May, 2014",
    text: "Designed and developed user-friendly website, including optimized check-out page that increased user clicks, and subsequently customer purchases by 20%.",
  },
  {
    id: 2,
    title: "IT Specialist",
    subtitle: "Motion Studio",
    period: "Dec, 2009 — Jan, 2013",
    text: "Revamped web application security applications, minimizing hacker attacks from 2.3% to 0.02%.",
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
              {tca(
                "active participation in a large startup project allowed me to gain a lot of experience in a short time.",
                ". "
              )}
            </Typography>
          </Grid>
          <Grid item xs={12} md={8}>
            <Grid container spacing={2}>
              {experiences.map((experience) => (
                <Grid item xs={12} md={6} key={experience.id}>
                  <ItemTitle variant="h4">{tc(experience.title)}</ItemTitle>
                  <Typography variant="body1">{tc(experience.text)}</Typography>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Section>
    );
  }
);
