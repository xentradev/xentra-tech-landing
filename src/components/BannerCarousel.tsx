import React, { useEffect, useState } from "react";
import { Box, styled } from "@mui/material";
import Image, { StaticImageData } from "next/image";

interface Props {
  images: StaticImageData[];
}

interface CarouselImageProps {
  isActive: boolean;
}

const CarouselImageContainer = styled(Box)<CarouselImageProps>(
  ({ isActive, theme }) => ({
    width: isActive ? "400px" : "100px",
    height: "300px",
    transition: "all 1s ease",
    borderRadius: 10,
    overflow: "hidden",
    position: "relative",
    [theme.breakpoints.down("lg")]: {
      width: isActive ? "250px" : "75px",
    },
    [theme.breakpoints.down("md")]: {
      width: isActive ? "200px" : "75px",
    },
    [theme.breakpoints.down("sm")]: {
      width: isActive ? "190px" : "60px",
    },
    [theme.breakpoints.down("xs")]: {
      width: isActive ? "150px" : "75px",
    },
  })
);

export const BannerCarousel = ({ images }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {images.map((image, index) => (
        <CarouselImageContainer key={index} isActive={index === currentIndex}>
          <Image
            src={image}
            alt={`Image ${index + 1}`}
            layout="fill"
            objectFit="cover"
            quality={100}
            priority
          />
        </CarouselImageContainer>
      ))}
    </Box>
  );
};
