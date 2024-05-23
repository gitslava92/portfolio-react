import { useCustomTranslation } from "@common/i18n";
import { ItemTitle, Section, Title } from "@components/Atoms/styles";
import { Avatar, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { forwardRef } from "react";

interface FeedbackProps {
  id?: string;
}

const аeedbacks = [
  {
    id: 0,
    name: "Mihail Boyko",
    post: "director building company “UMS-STROY”",
    text: "i got exactly what I wanted and in a short time. They are very attentive and comfortable in communication. it was a pleasure to do business.",
    img: "./portfolio/ums-stroy/feedback.jpg",
  },
  {
    id: 1,
    name: "Dmitriy Kuhar",
    post: "director building company “GRANDSTROY”",
    text: "the site was developed quickly and exactly as I had planned. communication is at the highest level. great job!",
    img: "./portfolio/grand-stroy/feedback.jpg",
  },
  {
    id: 2,
    name: "Aleksandr Kamoza",
    post: "director building company “KAMOZA A.I.”",
    text: "a landing page with examples of work was urgently needed. i turned to Slava and he helped. everything is wonderful!",
    img: "./portfolio/kamoza/feedback.jpg",
  },
];

export const Feedback = forwardRef<HTMLDivElement, FeedbackProps>(
  (props, ref) => {
    const { id } = props;
    const { tc, tca } = useCustomTranslation();

    return (
      <Section component="section" ref={ref} id={id}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Title variant="h2" sx={{ marginBottom: 1 }}>
              {tc("feedback")}
            </Title>
            <Typography variant="body1" sx={{ marginBottom: 2 }}>
              {tc(
                "take a look at the reviews of my customers and ensure the quality of my services."
              )}
            </Typography>
          </Grid>
          <Grid item xs={12} md={8}>
            <Grid container spacing={2}>
              {аeedbacks.map((feedback) => (
                <Grid item xs={12} key={feedback.id}>
                  <Box display="flex" gap={4}>
                    <Box>
                      <Avatar></Avatar>
                    </Box>
                    <Box>
                      <Box display="flex" gap={2}>
                        <ItemTitle variant="h4">{tc(feedback.name)}</ItemTitle>
                        <Typography variant="subtitle2">
                          {tc(feedback.post)}
                        </Typography>
                      </Box>

                      <Typography variant="body1">
                        {tca(feedback.text, ". ")}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Section>
    );
  }
);
