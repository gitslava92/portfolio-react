import { useCustomTranslation } from "@common/i18n";
import { Section, Title } from "@components/Atoms/styles";
import { ImageList } from "@components/Molecules/ImageList/ImageList";
import { Button } from "@mui/material";
import { forwardRef, useState } from "react";
import { ImagesListBox } from "@components/Organisms/Portfolio/Portfolio.styles";

export interface PortfolioItem {
  id: number;
  title: string;
  section: string;
  period: string[];
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
    value: "teamWork",
    title: "team work",
  },
  {
    id: 2,
    value: "freelance",
    title: "freelance",
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
      id: 0,
      title: tc("marketplace"),
      section: "teamWork",
      period: ["present"],
      sectionTitle: tc("team work"),
      subtitle: tc(
        "a marketplace where buyers and sellers can safely make transactions."
      ),
      stack:
        "HTML, SCSS, Javascript, Typescript, React, React-Router, Graphql, Apollo, MUI",
      img: [
        "./portfolio/profital/profital-1.jpg",
        "./portfolio/profital/profital-2.jpg",
        "./portfolio/profital/profital-3.jpg",
        "./portfolio/profital/profital-4.jpg",
      ],
      link: "https://profital.io",
    },
    {
      id: 1,
      title: tc("building company “GRANDSTROY”"),
      section: "freelance",
      period: ["2024-03-01T00:00:00Z"],
      sectionTitle: tc("freelance"),
      subtitle: tc(
        "“GRANDSTROY” company is engaged in construction and repair."
      ),
      stack:
        "HTML, SCSS, React, Javascript, Typescript, MUI, React-Router, Redux-ToolKit",
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
      period: ["2022-06-01T00:00:00Z"],
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
      period: ["2022-05-01T00:00:00Z"],
      sectionTitle: tc("freelance"),
      subtitle: tc(
        "“KAMOZA A.I.” company is engaged in construction and repair."
      ),
      stack: "HTML, SCSS, Javascript, Vue, Vue-router, Vuetify",
      img: [
        "./portfolio/kamoza/kamoza-1.jpg",
        "./portfolio/kamoza/kamoza-2.jpg",
        "./portfolio/kamoza/kamoza-3.jpg",
      ],
      link: "https://kamoza.webslava92.ru/",
    },
    {
      id: 4,
      title: tc("electron.js app “CSV-EDITOR”"),
      section: "petProject",
      period: ["2023-04-01T00:00:00Z"],
      sectionTitle: tc("pet projects"),
      subtitle: tc(
        '"CSV-editor" is an application for quickly checking and editing data in csv files'
      ),
      stack: "Electron, HTML, SCSS, React, Javascript, Typescript, MUI",
      img: [
        "./portfolio/csv-editor/csv-editor-1.jpg",
        "./portfolio/csv-editor/csv-editor-2.jpg",
        "./portfolio/csv-editor/csv-editor-3.jpg",
        "./portfolio/csv-editor/csv-editor-4.jpg",
        "./portfolio/csv-editor/csv-editor-5.jpg",
        "./portfolio/csv-editor/csv-editor-6.jpg",
        "./portfolio/csv-editor/csv-editor-7.jpg",
        "./portfolio/csv-editor/csv-editor-8.jpg",
        "./portfolio/csv-editor/csv-editor-9.jpg",
        "./portfolio/csv-editor/csv-editor-10.jpg",
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
        <ImagesListBox>
          {sections.map((section) => (
            <Button
              variant="text"
              key={section.id}
              onClick={() => setFilter(section.value)}
            >
              {tc(section.title)}
            </Button>
          ))}
        </ImagesListBox>
        <ImageList portfolio={portfolio} />
      </Section>
    );
  }
);
