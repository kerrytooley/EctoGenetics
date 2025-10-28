"use client";

import styled from "styled-components";
import SectionTitle, { SectionSubtitle, Text } from "./SectionTitles";
import { colors } from "@/styles/theme";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ReviewSlideshow = styled.div`
  display: flex;
  padding: 1rem;
  background-color: ${colors.light};
  flex-direction: row;
  border-radius: 1rem;
  max-width: 90vw;
`;

const SlideShowWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 782px;
  margin: 1rem;
  overflow-x: hidden;
`;

const SlideTrack = styled.div<{ $slideCount: number }>`
  transition: transform 0.5s ease-in-out;
  display: flex;
  transform: translateX(${(props) => -props.$slideCount * 100}%);
  width: 100%;
`;

const Slide = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  min-width: 100%;
  flex-shrink: 0;
  flex: 1;

  @media (max-width: 768px) {
    flex-direction: column;
`;

const SlideTitle = styled.div`
  flex: 1;
  text-align: left;
  align-self: center;
`;

const SlideDescription = styled.div`
  flex: 2;
  align-self: center;
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

const Review = [
  {
    reviewerDescription:
      "Client from Cookham Berkshire, Planning received within weeks of BERS report:",
    review:
      "I was very impressed by your communications with me, organised and clear combined with doing the report as quickly as possible. I was equally impressed by not only the thorough report at the end of the BERS survey but also by your reliability and efficiency throughout.  I wouldn’t hesitate to use your services again in the future and am happy to recommend you to anyone looking to do a bat survey.",
  },
  {
    reviewerDescription: "Project Manager at EcoBuild",
    review:
      "EctoEcology provided an exceptional service for our bat survey needs. Their team was professional, knowledgeable, and delivered results quickly. Highly recommend!",
  },
];

interface ReviewProps {
  reviewerDescription: string;
  review: string;
}

const ReviewSlide = ({ reviewerDescription, review }: ReviewProps) => {
  return (
    <Slide>
      <SlideTitle>
        <SectionSubtitle>{reviewerDescription}</SectionSubtitle>
      </SlideTitle>
      <SlideDescription>
        <Text>{review}</Text>
      </SlideDescription>
    </Slide>
  );
};

const RecentReviewsSection = () => {
  const [current, setCurrent] = useState(0);
  const totalSlides = Review.length;

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % totalSlides);
  };
  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <>
      <SectionTitle id="recent-reviews">Recent Reviews</SectionTitle>
      <ReviewSlideshow>
        <NavButton onClick={prevSlide}>
          <ChevronLeft />
        </NavButton>
        <SlideShowWrapper>
          <SlideTrack $slideCount={current}>
            {Review.map((review, index) => (
              <ReviewSlide
                key={index}
                reviewerDescription={review.reviewerDescription}
                review={review.review}
              />
            ))}
          </SlideTrack>
        </SlideShowWrapper>
        <NavButton onClick={nextSlide}>
          <ChevronRight />
        </NavButton>
      </ReviewSlideshow>
    </>
  );
};

export default RecentReviewsSection;
