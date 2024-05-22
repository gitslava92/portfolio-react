import { useCustomTranslation } from "@common/i18n";
import { ItemTitle, Section, Title } from "@components/Atoms/styles";
import { Avatar, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { forwardRef } from "react";

interface FeedbackProps {
  id?: string;
}

const getFeedbacks = (tc: (msg: string) => string) => {
  return [
    {
      id: 0,
      name: tc("Mihail Boyko"),
      post: tc("director building company “UMS-STROY”"),
      text: "“Considers problems as a challenge and enjoys finding creative yet appropriate solutions. Danny is able to work out his own solutions, but also works well with a group to solve problems. Performs most jobs well and has the habit of checking work outcomes. Danny is achieving excellence in some areas but in others is not yet achieving the highest standards.”",
      img: "./portfolio/ums-stroy/feedback.jpg",
    },
    {
      id: 1,
      name: tc("Dmitriy Kuhar"),
      post: tc("director building company “GRANDSTROY”"),
      text: "“He will always try to do what is required, even if it means performing tasks that are not in the job description or if required to do extra work unexpectedly. However, may sometimes complain about the extra load. Aiming for a top job in the organization. He sets very high standards, aware that this will bring attention and promotion.”",
      img: "./portfolio/grand-stroy/feedback.jpg",
    },
    {
      id: 2,
      name: tc("Aleksandr Kamoza"),
      post: tc("director building company “KAMOZA A.I.”"),
      text: "“When working to a firm but realistic deadline, Danny always completes tasks to a high standard. Care and accuracy is obvious even when put under pressure of time. Prepared to work all the extra hours it takes to meet the deadline.”",
      img: "./portfolio/kamoza/feedback.jpg",
    },
  ];
};

export const Feedback = forwardRef<HTMLDivElement, FeedbackProps>(
  (props, ref) => {
    const { id } = props;
    const { tc } = useCustomTranslation();

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
              {getFeedbacks(tc).map((feedback) => (
                <Grid item xs={12} key={feedback.id}>
                  <Box display="flex" gap={4}>
                    <Box>
                      <Avatar></Avatar>
                    </Box>
                    <Box>
                      <Box display="flex" gap={2}>
                        <ItemTitle variant="h4">{tc(feedback.name)}</ItemTitle>
                        <Typography variant="subtitle2">
                          {feedback.post}
                        </Typography>
                      </Box>

                      <Typography variant="body1">
                        {tc(feedback.text)}
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
