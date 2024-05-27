import { useCustomTranslation } from "@common/i18n";
import { ItemTitle, Section, Title } from "@components/Atoms/styles";
import { Grid, Typography } from "@mui/material";
import { forwardRef } from "react";

interface SkillsProps {
  id?: string;
}

const getSkills = (tc: (msg: string) => string) => {
  return [
    {
      id: 0,
      title: tc("key skills"),
      text: "Javascript, Typescript, ReactJS, VueJS, HTML, CSS, SASS, MaterialUI, Styled Components, GraphQl, Apollo, REST, WebSocket, Axios, Redux, Redux Toolkit, Redux-Saga, Git, Docker, Webpack, Vite, StoryBook",
    },
    {
      id: 1,
      title: tc("additional skills"),
      text: tc(
        "the ability to work in a team, the ability to understand someone else's code, SCRUM, Photoshop, Figma, high learning speed"
      ),
    },
  ];
};

export const Skills = forwardRef<HTMLDivElement, SkillsProps>((props, ref) => {
  const { id } = props;
  const { tc } = useCustomTranslation();

  return (
    <Section component="section" ref={ref} id={id}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Title variant="h2" sx={{ marginBottom: 1 }}>
            {tc("skills")}
          </Title>
          <Typography variant="body1" sx={{ marginBottom: 2 }}>
            {tc(
              "i am inspired by the opportunity to work with professionals who, like me, are passionate about creating something truly unique and meaningful."
            )}
          </Typography>
        </Grid>
        <Grid item xs={12} md={8}>
          <Grid container spacing={2}>
            {getSkills(tc).map((skill) => (
              <Grid item xs={12} md={6} key={skill.id}>
                <ItemTitle variant="h4">{tc(skill.title)}</ItemTitle>
                <Typography variant="body1">{tc(skill.text)}</Typography>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Section>
  );
});
