"use client";

import styled from "styled-components";
import SectionTitle, { SectionSubtitle, Text } from "./SectionTitles";
import { colors } from "@/styles/theme";

const CardSet = styled.div`
  justify-content: center;
  display: flex;
  width: 100%;
  max-width: 90vw;
  overflow-x: hidden;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const InfoCard = styled.div`
  background-color: ${colors.light};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  flex: 0 0 300px;
  padding: 1rem;
  margin: 1rem;

  @media (max-width: 768px) {
    flex: 0 0 200px;
  }
`;

const VectorImage = styled.img`
  height: 3rem;
  width: auto;
  margin-bottom: 0.5rem;
  margin: 1rem;

  svg {
    color: ${colors.dark};
  }

  @media (max-width: 768px) {
    height: 2rem;
  }
`;

interface InfoCardProps {
  title: string;
  description: string;
  vectorImage: string;
}

const InfoCardData = [
  {
    title: "Complete our quote form or email us now",
    description:
      "Complete our quote form below or email us admin@ectoecology.com and we'll respond with a free bat survey quote within 48 hours.",
    vectorImage: "/laptop.svg",
  },
  {
    title: "Schedule your survey",
    description:
      "We'll agree the details and arrange the dates for your survey(s).",
    vectorImage: "/bat.svg",
  },
  {
    title: "Get your report",
    description:
      "Once your survey is complete we'll write up your report, get it reviewed, and send it over within ten days.",
    vectorImage: "/report.svg",
  },
];

const MyInfoCard = ({ title, description, vectorImage }: InfoCardProps) => {
  return (
    <InfoCard>
      <VectorImage src={vectorImage} />
      <SectionSubtitle style={{ textAlign: "center", width: "fit-content" }}>
        {title}
      </SectionSubtitle>
      <Text>{description}</Text>
    </InfoCard>
  );
};

const HowItWorksCards = () => {
  return (
    <>
      <SectionTitle id="how-it-works">How it works</SectionTitle>
      <CardSet>
        {InfoCardData.map((data) => (
          <MyInfoCard
            key={data.title}
            title={data.title}
            description={data.description}
            vectorImage={data.vectorImage}
          />
        ))}
      </CardSet>
    </>
  );
};

export default HowItWorksCards;
