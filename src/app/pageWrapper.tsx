"use client";

import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import StickyHeader from "@/components/Header";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import { styled } from "styled-components";

const PageWrapper = styled.div`
  position: relative;
  padding-top: var(--header-height);
  width: 100%;
  max-width: 100vw;
  justify-content: center;
  display: grid;

  @media (max-width: 782px) {
    padding-top: var(--header-height);
`;

const BackgroundImage = styled.img`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  object-fit: cover;
  z-index: -10;
  opacity: 0.5;
`;

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const isDesktop = useMediaQuery({ minWidth: 768 });
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  return (
    <div className="page-wrapper">
      <StickyHeader />
      <ParallaxProvider>
        <BackgroundImage src="/LabBackground.png" alt="Lab Background" />
        <Parallax speed={-20} translateY={isDesktop ? [-0, 0] : [0, 0]}>
          <PageWrapper>
            {children}
            
          </PageWrapper>
          <Footer />
        </Parallax>
      </ParallaxProvider>
    </div>
  );
}
