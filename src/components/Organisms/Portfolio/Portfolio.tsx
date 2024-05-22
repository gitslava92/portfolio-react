import { useCustomTranslation } from "@common/i18n";
import { Section, Title } from "@components/Atoms/styles";
import { ImageList } from "@components/Molecules/ImageList/ImageList";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { forwardRef, useState } from "react";

export interface PortfolioItem {
  id: number;
  title: string;
  section: string;
  period: string;
  sectionTitle: string;
  subtitle: string;
  stack: string;
  img: string[];
  link: string;
}

interface PortfolioProps {
  id?: string;
}

const sections = [
  {
    id: 0,
    value: "all",
    title: "all projects",
  },
  {
    id: 1,
    value: "freelance",
    title: "freelance",
  },
  {
    id: 2,
    value: "teamWork",
    title: "team work",
  },
  {
    id: 3,
    value: "petProject",
    title: "pet projects",
  },
];

const getPortfolio = (tc: (msg: string) => string): PortfolioItem[] => {
  return [
    {
      id: 1,
      title: tc("building company “GRANDSTROY”"),
      section: "freelance",
      period: "March, 2024",
      sectionTitle: tc("freelance"),
      subtitle: tc(
        "“GRANDSTROY” company is engaged in construction and repair."
      ),
      stack: "HTML, SCSS, React, Javascript, Typescript, MUI, React-Router",
      img: [
        "./portfolio/grand-stroy/grand-stroy-1.jpg",
        "./portfolio/grand-stroy/grand-stroy-2.jpg",
        "./portfolio/grand-stroy/grand-stroy-3.jpg",
      ],
      link: "https://grandstroy92.ru/",
    },
    {
      id: 2,
      title: tc("building company “UMS-STROY”"),
      section: "freelance",
      period: "April, 2023",
      sectionTitle: tc("freelance"),
      subtitle: tc(
        "“UMS-STROY” company is engaged in construction and repair."
      ),
      stack: "HTML, SCSS, React, Javascript, Typescript, MUI, React-Router",
      img: [
        "./portfolio/ums-stroy/ums-stroy-1.jpg",
        "./portfolio/ums-stroy/ums-stroy-2.jpg",
        "./portfolio/ums-stroy/ums-stroy-3.jpg",
      ],
      link: "https://ums-stroy.ru/",
    },
    {
      id: 3,
      title: tc("building company “KAMOZA A.I.”"),
      section: "freelance",
      period: "April, 2022",
      sectionTitle: tc("freelance"),
      subtitle: tc(
        "“KAMOZA A.I.” company is engaged in construction and repair."
      ),
      stack: "HTML, SCSS, React, Javascript, Typescript, MUI, React-Router",
      img: [
        "./portfolio/kamoza/kamoza-1.jpg",
        "./portfolio/kamoza/kamoza-2.jpg",
        "./portfolio/kamoza/kamoza-3.jpg",
      ],
      link: "https://kamoza.webslava92.ru/",
    },
    {
      id: 4,
      title: tc("marketplace “PROFITAL”"),
      section: "teamWork",
      period: "April, 2023",
      sectionTitle: tc("team work"),
      subtitle: tc(
        "a marketplace “PROFITAL” where buyers and sellers can safely make transactions."
      ),
      stack: "HTML, SCSS, React, Javascript, Typescript, MUI, React-Router",
      img: [
        "./portfolio/profital/profital-1.jpg",
        "./portfolio/profital/profital-2.jpg",
        "./portfolio/profital/profital-3.jpg",
      ],
      link: "https://profital.io",
    },
    {
      id: 5,
      title: tc("electron.js app “CSV EDITOR”"),
      section: "petProject",
      period: "April, 2023",
      sectionTitle: tc("pet projects"),
      subtitle: tc("“Profital” company is engaged in construction and repair."),
      stack: "HTML, SCSS, React, Javascript, Typescript, MUI, React-Router",
      img: [
        "./portfolio/profital/profital-1.jpg",
        "./portfolio/profital/profital-2.jpg",
        "./portfolio/profital/profital-3.jpg",
      ],
      link: "https://profital.io",
    },
  ];
};

export const Portfolio = forwardRef<HTMLDivElement, PortfolioProps>(
  (props, ref) => {
    const { id } = props;

    const { tc } = useCustomTranslation();
    const [filter, setFilter] = useState(sections[0].value);

    const defaultPortfolio = getPortfolio(tc);
    const filteredPortfolio = defaultPortfolio.filter(
      (item) => item.section === filter
    );
    const portfolio =
      filter === sections[0].value ? defaultPortfolio : filteredPortfolio;

    return (
      <Section component="section" ref={ref} id={id}>
        <Title variant="h2" sx={{ marginBottom: 1 }}>
          {tc("portfolio")}
        </Title>
        <Box display="flex" gap={{ xs: 1, md: 3 }} mb={1} flexWrap="wrap">
          {sections.map((section) => (
            <Button
              variant="text"
              key={section.id}
              onClick={() => setFilter(section.value)}
            >
              {tc(section.title)}
            </Button>
          ))}
        </Box>
        <ImageList portfolio={portfolio} />
      </Section>
    );
  }
);
