"use client";

import { styled } from "styled-components";
import { useState } from "react";
import { Ban } from "lucide-react";
import { useMediaQuery } from "react-responsive";

const BannerInfoItemContainer = styled.div`
  cursor: pointer;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: inherit;
  width: 100%;
  max-width: 100%;
  height: 80px;
`;

const ContainerDiv = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  flex-direction: column;
  transition: opacity 0.4s ease;
  opacity: 0;
  pointer-events: none;

  &.visible {
    opacity: 1;
    pointer-events: auto;
  }
`;

const Image = styled.img`
  height: 30px;
  width: auto;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    height: 15px;
  }
`;

const BannerTitle = styled.p`
  font-size: 1.1rem;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const BannerDescription = styled.p`
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

interface BannerInfoItemProps {
  vectorImage?: string;
  title?: string;
  description?: string;
}

const BannerInfoItem = ({
  vectorImage,
  title,
  description,
}: BannerInfoItemProps) => {

  const [isClicked, setIsClicked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const isDesktop = useMediaQuery({ minWidth: 768 });

  const showDescription = isDesktop ? isClicked || isHovered : isClicked;

  return (
    <BannerInfoItemContainer
      onClick={() => setIsClicked((prev) => !prev)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <ContainerDiv className={showDescription ? "visible" : ""}>
        <BannerDescription>
          {description || "This is a default description for the banner."}
        </BannerDescription>
      </ContainerDiv>
      <ContainerDiv className={!showDescription ? "visible" : ""}>
        <Image src={vectorImage || "globe.svg"} alt={title} />
        <BannerTitle>{title || "Default Title"}</BannerTitle>
      </ContainerDiv>
    </BannerInfoItemContainer>
  );
};

export default BannerInfoItem;
