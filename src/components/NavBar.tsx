"use client";

import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";
import { colors } from "@/styles/theme";

const NavbarWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  position: relative;
  overflow: hidden;
  position: sticky;
  top: 0;
  z-index: 1000;
  width: 100%;
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

const Logo = styled.img`
  height: 80px;
  width: auto;

  @media (max-width: 768px) {
    height: 50px;
  }
`;

const NavLinks = styled.div`
  top: 100%;
  right: 2rem;

  gap: 1rem;

  a {
    color: white;
    text-decoration: none;
    font-size: 2rem;
  }

  position: static;
  flex-direction: row;
  display: flex;
  background: none;
  padding: 0;
`;

const MenuWrapper = styled.div`
  position: relative;
`;

const Hamburger = styled.button`
  position: relative;
  width: 30px;
  height: 22px;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 1001;

  div {
    position: absolute;
    width: 100%;
    height: 3px;
    background-color: white;
    transition: 0.3s;
    left: 0;
  }

  div:nth-child(1) {
    top: 0;
  }
  div:nth-child(2) {
    top: 9px;
  }
  div:nth-child(3) {
    top: 18px;
  }

  &.open div:nth-child(1) {
    transform: rotate(45deg);
    top: 9px;
  }

  &.open div:nth-child(2) {
    opacity: 0;
  }

  &.open div:nth-child(3) {
    transform: rotate(-45deg);
    top: 9px;
  }
`;

const Menu = styled.nav<{ open: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 200px;
  background: ${colors.dark};
  color: white;
  padding-top: 60px;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.2);
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.3s ease-in-out;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-left: 1.5rem;
  font-size: 1.5rem;
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

const Navbar: React.FC = () => {
  const isDesktop = useMediaQuery({ minWidth: 768 });
  const [open, setOpen] = useState(false);

  return (
    <NavbarWrapper>
      
      <Link href="/">
        <Logo src="/EctoEcologyLogoWhite.png" alt="EctoEcology Logo" />
      </Link>
      {isDesktop ? (
        <NavLinks>
        </NavLinks>
      ) : (
        <MenuWrapper>
          <Hamburger
            className={open ? "open" : ""}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <div />
            <div />
            <div />
          </Hamburger>
          <Menu open={open}>
          </Menu>
        </MenuWrapper>
      )}
    </NavbarWrapper>
  );
};

export default Navbar;
