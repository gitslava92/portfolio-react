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
      text: "Javascript, Typescript, ReactJS, VueJS, HTML, CSS, SASS, MaterialUI, GraphQl, REST, WebSocket, Axios, Redux Toolkit, Redux-Saga, Git, Docker, Webpack, Vite, Styled Components",
    },
    {
      id: 1,
      title: tc("additional skills"),
      text: "Teamwork, SCRUM, the ability to understand someone else's code, Photoshop, Figma, high learning speed",
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
              "i am inspired by creating great work with people who are as passionate as I am about building something awesome."
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
