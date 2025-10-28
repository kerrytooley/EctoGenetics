"use client";

import styled from "styled-components";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";

const GallerySlideshow = styled.div`
  display: flex;
  padding: 1rem;
  flex-direction: row;
  border-radius: 1rem;
  height: 350px;
  width: 100%;
  max-width: 100vw;
  margin-top: 2rem;

  @media (max-width: 768px) {
    height: 250px;
  }
`;

const SlideShowWrapper = styled.div`
  display: flex;
  width: auto;
  max-width: 100%;
  overflow-x: auto;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
`;

const SlideTrack = styled.div<{ $slideCount: number }>`
  transition: transform 0.5s ease-in-out;
  display: flex;
  transform: translateX(${(props) => -props.$slideCount * 20}%);
  width: 100%;

  @media (max-width: 768px) {
    transform: translateX(${(props) => -props.$slideCount * 100}%);
  }
`;

const Slide = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`;

const NavButton = styled.button`
  border: none;
  background: none;

  svg {
    width: 50px;
    height: 50px;
    transition:
      width 0.2s,
      height 0.2s;
  }

  @media (max-width: 782px) {
    svg {
      width: 25px;
      height: 25px;
    }
  }
`;

const GalleryImage = styled(Image)`
  object-fit: cover;
  position: relative;
  padding: 3px;
`;

const Images: ImageProps[] = [
  {
    source: "/surveys/Survey1.jpg",
    alternateText: "Survey 1",
    orientation: "landscape",
  },
  {
    source: "/surveys/Survey2.jpg",
    alternateText: "Survey 2",
    orientation: "portrait",
  },
  {
    source: "/surveys/Survey2.jpg",
    alternateText: "Survey 2",
    orientation: "square",
  },
  {
    source: "/surveys/Survey2.jpg",
    alternateText: "Survey 2",
    orientation: "landscape",
  },
  {
    source: "/surveys/Survey2.jpg",
    alternateText: "Survey 2",
    orientation: "portrait",
  },
  {
    source: "/surveys/Survey2.jpg",
    alternateText: "Survey 2",
    orientation: "landscape",
  },
  {
    source: "/forest.jpg",
    alternateText: "Forest",
    orientation: "square",
  },
  {
    source: "/forest.jpg",
    alternateText: "Forest",
    orientation: "landscape",
  },
];

interface ImageProps {
  source: string;
  alternateText: string;
  orientation: "portrait" | "landscape" | "square";
}

const ImageSlide = ({ source, alternateText, orientation }: ImageProps) => {
    const isDesktop = useMediaQuery({ minWidth: 768 });
    const imageHeight = isDesktop ? 300 : 200 ;
  const size =
    orientation === "portrait"
      ? imageHeight * (3 / 4)
      : orientation === "landscape"
      ? imageHeight * (4 / 3)
      : imageHeight;
  return (
    <Slide>
      <GalleryImage
        src={source}
        alt={alternateText}
        width={size}
        height={`${imageHeight}`}
      />
    </Slide>
  );
};

const Gallery = () => {
  const [current, setCurrent] = useState(0);
  const totalSlides = Images.length;

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % totalSlides);
  };
  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <>
      <GallerySlideshow id="gallery-section">
        <NavButton onClick={prevSlide}>
          <ChevronLeft size={50} />
        </NavButton>
        <SlideShowWrapper>
          <SlideTrack $slideCount={current}>
            {Images.map((image, index) => (
              <ImageSlide
                key={index}
                source={image.source}
                alternateText={image.alternateText}
                orientation={image.orientation}
              />
            ))}
          </SlideTrack>
        </SlideShowWrapper>
        <NavButton onClick={nextSlide}>
          <ChevronRight size={50} />
        </NavButton>
      </GallerySlideshow>
    </>
  );
};

export default Gallery;
