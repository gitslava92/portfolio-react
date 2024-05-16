import { useCustomTranslation } from '@common/i18n';
import { ItemTitle, Section, Title } from '@components/Atoms/styles';
import { Grid, Typography } from '@mui/material';
import { forwardRef } from 'react';


interface FeedbackProps {
  id?: string;
}

const feedbacks = [
  {
    id: 0,
    name: 'Stacey Don',
    post: 'President @ Coolor Studio',
    text: '“Considers problems as a challenge and enjoys finding creative yet appropriate solutions. Danny is able to work out his own solutions, but also works well with a group to solve problems. Performs most jobs well and has the habit of checking work outcomes. Danny is achieving excellence in some areas but in others is not yet achieving the highest standards.”',
    img: 'feedback-1.jpg',
  },
  {
    id: 1,
    name: 'Anson Shura',
    post: 'Project Manager @ Motion Studio',
    text: '“He will always try to do what is required, even if it means performing tasks that are not in the job description or if required to do extra work unexpectedly. However, may sometimes complain about the extra load. Aiming for a top job in the organization. He sets very high standards, aware that this will bring attention and promotion.”',
    img: 'feedback-2.jpg',
  },
  {
    id: 2,
    name: 'Geylord Djefferson',
    post: 'Developer @ Illskill Agency',
    text: '“When working to a firm but realistic deadline, Danny always completes tasks to a high standard. Care and accuracy is obvious even when put under pressure of time. Prepared to work all the extra hours it takes to meet the deadline.”',
    img: 'feedback-3.jpg',
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
              {tc('feedback')}
            </Title>
            <Typography variant="body1" sx={{ marginBottom: 2 }}>
              {tca(
                'take a look at the reviews of my customers and ensure the quality of my services.'
              )}
            </Typography>
          </Grid>
          <Grid item xs={12} md={8}>
            <Grid container spacing={2}>
              {feedbacks.map((feedback) => (
                <Grid item xs={12} key={feedback.id}>
                  <ItemTitle variant="h4">{tc(feedback.name)}</ItemTitle>
                  <Typography variant="body1">{tc(feedback.text)}</Typography>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Section>
    );
  }
);