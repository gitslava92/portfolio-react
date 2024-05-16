import { LANDING_SECTIONS } from "@common/constants";
import { useCustomTranslation } from "@common/i18n";
import { Contact } from "@components/Organisms/Contact/Contact";
import { Education } from "@components/Organisms/Education/Education";
import { Experience } from "@components/Organisms/Experience/Experience";
import { Feedback } from "@components/Organisms/Feedback/Feedback";
import { Footer } from "@components/Organisms/Footer/Footer";
import { Header } from "@components/Organisms/Header/Header";
import { Hello } from "@components/Organisms/Hello/Hello";
import { Portfolio } from "@components/Organisms/Portfolio/Portfolio";
import { Skills } from "@components/Organisms/Skills/Skills";
import { getMenuItems } from "@components/Pages/LandingPage/LandingPage.helpers";
import { CssBaseline, Toolbar } from "@mui/material";
import { Box, Container } from "@mui/system";
import { Ref, createRef } from "react";

export interface MenuItemType {
  id: number;
  to: LANDING_SECTIONS;
  title: string;
}

const visibleSections = [
  LANDING_SECTIONS.Hello,
  LANDING_SECTIONS.Skills,
  LANDING_SECTIONS.Experience,
  LANDING_SECTIONS.Education,
  LANDING_SECTIONS.Portfolio,
  LANDING_SECTIONS.Feedback,
  LANDING_SECTIONS.Contact,
];

export const LandingPage = () => {
  const { tc } = useCustomTranslation();
  const menuItems = getMenuItems(visibleSections, tc);

  const refs: { [key: string]: Ref<HTMLDivElement> } = {};

  menuItems.forEach((item) => {
    refs[item.to] = createRef();
  });

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <CssBaseline />
      <Header menuItems={menuItems} refs={refs} id="header" />
      <Toolbar />
      <Container>
        <Box component="main">
          <Hello ref={refs.hello} id="hello" />
          <Skills ref={refs.skills} id="skills" />
          <Experience ref={refs.experience} id="experience" />
          <Education ref={refs.education} id="education" />
          <Portfolio ref={refs.portfolio} id="portfolio" />
          <Feedback ref={refs.feedback} id="feedback" />
          <Contact ref={refs.contact} id="contact" />
        </Box>
      </Container>
      <Footer id="footer" />
    </Box>
  );
};
