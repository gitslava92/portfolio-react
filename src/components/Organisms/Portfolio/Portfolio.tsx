import { useCustomTranslation } from '@common/i18n';
import { Section, Title } from '@components/Atoms/styles';
import { ImageList } from '@components/Molecules/ImageList/ImageList';
import { Button } from '@mui/material';
import { Box } from '@mui/system';
import { forwardRef } from 'react';

export interface PortfolioItem {
  id: number;
  title: string;
  section: string;
  period: string;
  fullTitle: string;
  subtitle: string;
  stack: string;
  img: string;
  link: string;
}

interface PortfolioProps {
  id?: string;
}

const sections = [
  {
    id: 0,
    value: 'all',
    title: 'ALL PROJECTS',
  },
  {
    id: 1,
    value: 'sites',
    title: 'WEB SITES',
  },
  {
    id: 2,
    value: 'ui',
    title: 'UIUX DESIGN',
  },
  {
    id: 3,
    value: 'frontend',
    title: 'FRONTEND',
  },
];

const portfolio: PortfolioItem[] = [
  {
    id: 0,
    title: 'Shop web app “Patty”',
    section: 'sites',
    period: 'April, 2017',
    fullTitle: 'Startup website for Foody',
    subtitle:
      "Foody Startup is the perfect shop. I did my best and prepared 12 highly customizable pages to present all startup's products. Upon opening this product you will see stylish and unique layouts thoroughly organized into their appropriate groups.",
    stack: 'HTML, CSS, Bootstrap, Javascript, SVG',
    img: 'portfolio-1.jpg',
    link: 'https://www.ya.ru',
  },
  {
    id: 1,
    title: 'Startup website “Phoenix”',
    period: 'March, 2016',
    section: 'frontend',
    fullTitle: 'Startup website for Foody',
    subtitle:
      "Foody Startup is the perfect shop. I did my best and prepared 12 highly customizable pages to present all startup's products. Upon opening this product you will see stylish and unique layouts thoroughly organized into their appropriate groups.",
    stack: 'HTML, CSS, Bootstrap, Javascript, SVG',
    img: 'portfolio-2.jpg',
    link: 'https://www.ya.ru',
  },
  {
    id: 2,
    title: 'Corporate chat “eWesta”',
    period: 'December, 2015',
    section: 'sites',
    fullTitle: 'Startup website for Foody',
    subtitle:
      "Foody Startup is the perfect shop. I did my best and prepared 12 highly customizable pages to present all startup's products. Upon opening this product you will see stylish and unique layouts thoroughly organized into their appropriate groups.",
    stack: 'HTML, CSS, Bootstrap, Javascript, SVG',
    img: 'portfolio-3.jpg',
    link: 'https://www.ya.ru',
  },
  {
    id: 3,
    title: 'Restaraunt web app “Foody”',
    period: 'May, 2014',
    section: 'frontend',
    fullTitle: 'Startup website for Foody',
    subtitle:
      "Foody Startup is the perfect shop. I did my best and prepared 12 highly customizable pages to present all startup's products. Upon opening this product you will see stylish and unique layouts thoroughly organized into their appropriate groups.",
    stack: 'HTML, CSS, Bootstrap, Javascript, SVG',
    img: 'portfolio-4.jpg',
    link: 'https://www.ya.ru',
  },
  {
    id: 4,
    title: 'Game website “Stark”',
    period: 'June, 2014',
    section: 'ui',
    fullTitle: 'Startup website for Foody',
    subtitle:
      "Foody Startup is the perfect shop. I did my best and prepared 12 highly customizable pages to present all startup's products. Upon opening this product you will see stylish and unique layouts thoroughly organized into their appropriate groups.",
    stack: 'HTML, CSS, Bootstrap, Javascript, SVG',
    img: 'portfolio-5.jpg',
    link: 'https://www.ya.ru',
  },
  {
    id: 5,
    title: 'Blogger website “Te4h”',
    period: 'April, 2014',
    section: 'sites',
    fullTitle: 'Startup website for Foody',
    subtitle:
      "Foody Startup is the perfect shop. I did my best and prepared 12 highly customizable pages to present all startup's products. Upon opening this product you will see stylish and unique layouts thoroughly organized into their appropriate groups.",
    stack: 'HTML, CSS, Bootstrap, Javascript, SVG',
    img: 'portfolio-6.jpg',
    link: 'https://www.ya.ru',
  },
  {
    id: 6,
    title: 'Product website “Lamp”',
    period: 'December, 2013',
    section: 'frontend',
    fullTitle: 'Startup website for Foody',
    subtitle:
      "Foody Startup is the perfect shop. I did my best and prepared 12 highly customizable pages to present all startup's products. Upon opening this product you will see stylish and unique layouts thoroughly organized into their appropriate groups.",
    stack: 'HTML, CSS, Bootstrap, Javascript, SVG',
    img: 'portfolio-7.jpg',
    link: 'https://www.ya.ru',
  },
];

export const Portfolio = forwardRef<HTMLDivElement, PortfolioProps>(
  (props, ref) => {
    const { id } = props;
    const { tc } = useCustomTranslation();

    return (
      <Section component="section" ref={ref} id={id}>
        <Title variant="h2" sx={{ marginBottom: 1 }}>
          {tc('portfolio')}
        </Title>
        <Box display="flex" gap={3}>
          {sections.map((section) => (
            <Button variant="text" key={section.id}>{tc(section.title)}</Button>
          ))}
        </Box>
        <ImageList portfolio={portfolio} />
      </Section>
    );
  }
);
