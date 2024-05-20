import { useCustomTranslation } from "@common/i18n";
import { theme } from "@common/theme";
import { Title } from "@components/Atoms/styles";
import { Carousel } from "@components/Molecules/Carousel/Carousel";
import { Modal } from "@components/Molecules/Modal/Modal";
import { PortfolioItem } from "@components/Organisms/Portfolio/Portfolio";
import {
  Button,
  ImageListItem,
  ImageListItemBar,
  ImageList as MUIImageList,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";

interface ImageListProps {
  portfolio: PortfolioItem[];
}

export const ImageList = ({ portfolio }: ImageListProps) => {
  const { tc } = useCustomTranslation();
  const [selected, setSelected] = useState<number | null>(null);

  const isPhone = useMediaQuery(theme.breakpoints.down("md"));
  const isDesctop = useMediaQuery(theme.breakpoints.up("xl"));

  const getCols = () => {
    if (isDesctop) {
      return 4;
    }
    if (isPhone) {
      return 1;
    } else return 2;
  };

  const currentPortfolioItem = portfolio.find((item) => item.id === selected);

  const handleModalClose = () => setSelected(null);

  return (
    <>
      <MUIImageList cols={getCols()} gap={16} sx={{ width: "100%" }}>
        {portfolio.map((item) => (
          <ImageListItem
            key={item.id}
            onClick={() => setSelected(item.id)}
            sx={{ cursor: "pointer" }}
          >
            <img
              srcSet={`${item.img[0]}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img[0]}?w=248&fit=crop&auto=format`}
              alt={`${item.title} - ${tc("portfolio image")}`}
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

      {!!selected && (
        <Modal
          open={Boolean(selected)}
          setClose={handleModalClose}
          maxWidth="85vw"
        >
          <Title variant="h2" sx={{ marginBottom: 1 }}>
            {currentPortfolioItem?.title}
          </Title>

          <Typography variant="body1" sx={{ marginBottom: 2 }}>
            {currentPortfolioItem?.subtitle}
          </Typography>

          <Box display="flex" gap={2}>
            <Typography
              variant="body1"
              fontWeight={600}
              sx={{ minWidth: 80 }}
            >{`${tc("stack")}:`}</Typography>
            <Typography variant="body1">
              {currentPortfolioItem?.stack}
            </Typography>
          </Box>

          <Box display="flex" gap={2} mb={3}>
            <Typography
              variant="body1"
              fontWeight={600}
              sx={{ minWidth: 80 }}
            >{`${tc("date")}:`}</Typography>
            <Typography variant="body1">
              {currentPortfolioItem?.period}
            </Typography>
          </Box>

          {!!currentPortfolioItem?.img?.length && (
            <Carousel images={currentPortfolioItem?.img} />
          )}

          <Box display="flex" justifyContent="right" gap={3} mt={3}>
            <Button variant="outlined">{tc("visit website")}</Button>
            <Button type="submit" onClick={handleModalClose}>
              {tc("back to CV")}
            </Button>
          </Box>
        </Modal>
      )}
    </>
  );
};