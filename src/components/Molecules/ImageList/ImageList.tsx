import { useCustomTranslation } from '@common/i18n';
import { PortfolioItem } from '@components/Organisms/Portfolio/Portfolio';
import { ImageListItem, ImageListItemBar, ImageList as MUIImageList } from '@mui/material';


interface ImageListProps {
  portfolio: PortfolioItem[];
}

export const ImageList = ({ portfolio }: ImageListProps) => {
  const { tc } = useCustomTranslation();

  return (
    <MUIImageList cols={4} sx={{ width: '100%' }}>
      {portfolio.map((item) => (
        <ImageListItem key={item.id}>
          <img
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=248&fit=crop&auto=format`}
            alt={`${item.title} - ${tc('portfolio image')}`}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={<span>{item.period}</span>}
            position="below"
          />
        </ImageListItem>
      ))}
    </MUIImageList>
  );
};