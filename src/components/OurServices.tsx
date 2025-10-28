"use client";

import styled from "styled-components";
import Image from "next/image";
import SectionTitle, { Text, Title } from "./SectionTitles";
import Link from "next/link";
import { colors } from "@/styles/theme";
import NavigationButton from "./NavigationButton";

const OurServicesWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  width: 90vw;
  max-width: 1000px;
  background-color: ${colors.light};
  margin: 1rem;
  height: 350px;

  @media (max-width: 768px) {
    flex-direction: column;
    height: 500px;
  }
`;

const ServicesColumn = styled.div`
  flex: 2;
  flex-direction: column;
  margin: 1rem;
  padding: 1rem;

  display: flex;
`;

const ImageColumn = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  flex: 1;
`;

const BersLink = styled(Link)`
  color: ${colors.dark};
  text-decoration-line: underline;
  padding: 0.5rem;
`;

interface OurServicesProps {
  variant?: "home" | "bers2Screen";
}

const HomeContent = () => {
  return (
    <>
      <BersLink href={"/bers2"}>
        We specialise in Phase 2/BERS surveys for small to medium developments
        across Southern England.
      </BersLink>
      <Text>
        Once you have completed an initial Phase 1 survey we can take over, we
        conduct dusk and dawn surveys between May - September.
      </Text>
      <NavigationButton link={"/bers2"} title={"Find out more"} type={"nav"} />
    </>
  );
};

const BersContent = () => {
  return (
    <>
      <Text>
        We specialise in Phase 2/BERS surveys and follow the professional
        training standards for bat Ecologists as set out by the Bat Conservation
        Trust. Contact us to learn more about our vision and approach.
      </Text>
      <Text>
        With all the correct equipment and experience working on some of the UKs
        largest ecology projects, we&apos;ve got you covered.
      </Text>
      <Text>
        Once you have completed an initial survey we can take over, we conduct
        dusk and dawn surveys between May - September
      </Text>
    </>
  );
};

const OurServicesSection = ({ variant }: OurServicesProps) => {
  return (
    <>
      <SectionTitle id="our-services">Our Services</SectionTitle>
      <OurServicesWrapper>
        <ImageColumn>
          <Image
            src={"/forest.jpg"}
            alt="Image of a bat"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ objectFit: "cover" }}
          />
        </ImageColumn>
        <ServicesColumn>
          <Title>BERS/Phase 2 Bat Survey</Title>
          {variant === "bers2Screen" ? <BersContent /> : <HomeContent />}
        </ServicesColumn>
      </OurServicesWrapper>
    </>
  );
};

export default OurServicesSection;
