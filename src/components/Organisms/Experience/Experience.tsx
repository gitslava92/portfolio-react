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
    subtitle: "sourсe",
    period: ["2022-05-01T00:00:00Z", "present"],
    text: "development of a trading platform (marketplace): routing, authorization (jwt), chats (based on mattermost), offers, responses, transactions, payments, reviews, ratings, disputes, user account, administrator account: authorization, payment administration, dispute resolution, chats, currencies, wallets.",
  },
  {
    id: 1,
    title: "Frontend Developer",
    subtitle: "freelance",
    period: ["2022-05-01T00:00:00Z", "2022-07-01T00:00:00Z"],
    text: "website development on react, vue, pet project: CSV editor - desktop application on electron.js + react.",
  },
  {
    id: 2,
    title: "HTML/CSS developer",
    subtitle: "sourсe",
    period: ["2021-09-01T00:00:00Z", "2022-05-01T00:00:00Z"],
    text: "copying (creating templates) and layout of html, css, js, jquery sites, code and content optimization",
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
                "my love of programming and active participation in a large startup project allowed me to gain a lot of experience in a short time.",
                ". "
              )}
            </Typography>
          </Grid>
          <Grid item xs={12} md={8}>
            <Grid container spacing={2}>
              {experiences.map((experience) => (
                <Grid item xs={12} md={6} key={experience.id}>
                  <Box display="flex" gap={1} mb={1}>
                    <ItemTitle variant="h4">{experience.title}</ItemTitle>
                    <Typography variant="body1">
                      {tc(experience.subtitle)}
                    </Typography>
                  </Box>
                  <Typography variant="body1" sx={{ marginBottom: 1 }}>
                    {getPeriod(experience.period, tc)}
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
