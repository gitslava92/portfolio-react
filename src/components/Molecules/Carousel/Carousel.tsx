import { useCustomTranslation } from "@common/i18n";
import { Box } from "@mui/system";
import React from "react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";

interface CarouselProps {
  images: string[];
}

export const Carousel = ({ images }: CarouselProps) => {
  const { tc } = useCustomTranslation();
  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
    >
      {images?.map((image, index) => (
        <SwiperSlide key={index}>
          <Box
            component="img"
            src={image}
            alt={`${tc("slide")} ${index}`}
            style={{
              width: "100%",
              maxHeight: 600,
              height: "100%",
              objectFit: "contain",
            }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
