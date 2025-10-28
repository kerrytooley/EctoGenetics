"use client";

import styled from "styled-components";
import Link from "next/link";
import { Title } from "./SectionTitles";

const NavbarWrapper = styled.nav`
  display: flex;
  align-items: center;
  padding: 1rem 2rem;
  position: relative;
  overflow: hidden;
  position: sticky;
  top: 0;
  z-index: 1000;
  width: 100%;
  flex-direction: column;
  margin-top: 3rem;
`;

const BackgroundVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
  pointer-events: none;
`;

const NavLinks = styled.div`
  justify-content: center;
  gap: 5rem;
  flex-direction: row;
  display: flex;

  a {
    color: white;
    text-decoration: none;
    font-size: 2rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    a {
      font-size: 1rem;
    }
  }
`;

const PageLinks = () => {
  return (
    <>
      <Link href="/">Home</Link>
      <Link href="/bers2">Bat Surveys (BERS/Phase 2)</Link>
      <Link href="/contact">Contact</Link>
    </>
  );
};

const Footer: React.FC = () => {
  return (
    <NavbarWrapper>
      <BackgroundVideo autoPlay loop muted playsInline>
        <source src="/forestVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </BackgroundVideo>
      <Title className="light" style={{ paddingBottom: 0 }}>
        Contact us today at
      </Title>
      <Title className="light" style={{ paddingTop: 0 }}>
        <Link href="mailto:admin@ectoecology.com">admin@ectoecology.com</Link>
      </Title>
      <NavLinks>
        <PageLinks />
      </NavLinks>
    </NavbarWrapper>
  );
};

export default Footer;
