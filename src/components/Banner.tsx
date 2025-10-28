"use client";

import styled from "styled-components";
import BannerInfoItem from "./BannerInfoItem";
import NavigationButton from "./NavigationButton";
import { Header } from "./SectionTitles";
import { colors } from "@/styles/theme";

const BannerContainer = styled.div`
  padding: 0.5rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${colors.dark};
  color: ${colors.light};
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);

  &.info {
    flex-direction: row;
    background-color: ${colors.light};
    color: ${colors.dark};
  }

  &.sales {
    flex-direction: column;
    background-color: ${colors.dark};
    color: ${colors.light};
  }
`;

interface BannerProps {
  title?: string;
  description?: string;
  vectorImage?: string;
  link?: string;
  variant?: "info" | "sales";
}

const infoItemProps = [
  {
    vectorImage: "clock.svg",
    title: "Ten day report turnaround",
    description: "Receive your report within ten days of the survey date.",
  },
  {
    vectorImage: "coins.svg",
    title: "Price cut guarantee",
    description:
      "You won't find a better quote than us! But if you do - we'll beat it by 20%.",
  },
  {
    vectorImage: "uk2.svg",
    title: "South UK coverage",
    description:
      "We offer services across the south of the UK and the Midlands.",
  },
];

const infoBanner = () => {
  return (
    <BannerContainer className="info">
      {infoItemProps.map((prop) => (
        <BannerInfoItem
          key={prop.title}
          vectorImage={prop.vectorImage}
          title={prop.title}
          description={prop.description}
        />
      ))}
    </BannerContainer>
  );
};

const salesBanner = ({ title, description, link }: BannerProps) => {
  return (
    <BannerContainer className="sales">
      <Header className="light">
        {title ||
          "- Limited Availability 2025 - Now Scheduling Bat Surveys (BERS) -"}
      </Header>
      <p>
        {description ||
          "Planning a project that may require a bat survey? Ensure you're compliant and on schedule—submit your survey request today."}
      </p>
      <NavigationButton type="sales" />
    </BannerContainer>
  );
};

const Banner = ({ variant, title, description, link }: BannerProps) => {
  return (
    <>
      {variant === "info"
        ? infoBanner()
        : salesBanner({ title, description, link })}
    </>
  );
};

export default Banner;
