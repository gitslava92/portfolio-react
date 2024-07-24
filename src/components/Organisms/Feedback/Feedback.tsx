import { useCustomTranslation } from "@common/i18n";
import { ItemTitle, Section, Title } from "@components/Atoms/styles";
import { NameBox } from "@components/Organisms/Feedback/Feedback.styles";
import { Avatar, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { forwardRef } from "react";

interface FeedbackProps {
  id?: string;
}

const feedbacks = [
  {
    id: 0,
    name: "Mihail Boyko",
    post: "Feedback.ThirdFeedback.Post",
    text: "Feedback.ThirdFeedback.Text",
    img: "./portfolio/ums-stroy/feedback.jpg",
  },
  {
    id: 1,
    name: "Dmitriy Kuhar",
    post: "Feedback.SecondFeedback.Post",
    text: "Feedback.SecondFeedback.Text",
    img: "./portfolio/grand-stroy/feedback.jpg",
  },
  {
    id: 2,
    name: "Aleksandr Kamoza",
    post: "Feedback.FirstFeedback.Post",
    text: "Feedback.FirstFeedback.Text",
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
              {feedbacks.map((feedback) => (
                <Grid item xs={12} key={feedback.id}>
                  <Box display="flex" gap={4}>
                    <Box>
                      <Avatar></Avatar>
                    </Box>
                    <Box>
                      <NameBox>
                        <ItemTitle variant="h4">{tc(feedback.name)}</ItemTitle>
                        <Typography variant="body2">
                          {tc(feedback.post)}
                        </Typography>
                      </NameBox>

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
