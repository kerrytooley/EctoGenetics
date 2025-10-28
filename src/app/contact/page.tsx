"use client";

import NavigationButton from "@/components/NavigationButton";
import SectionTitle, { Header, Text } from "@/components/SectionTitles";
import { colors } from "@/styles/theme";
import styled from "styled-components";

const SectionWrapper = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export default function ContactPage() {
  return (
    <>
      <div
        style={{
          backgroundColor: colors.light,
          padding: "1rem",
          width: "90vw",
          height: "300px",
          maxWidth: "1000px",
          margin: "1rem auto",

        }}
      >
        <SectionTitle style={{ marginTop: 0 }}>Contact Us</SectionTitle>
        <SectionWrapper>
          <div style={{ flex: 1 }}>
            <Text>
              Contact us for quotes and information on bat ecology surveys. Our
              team is ready to assist you with expert insights and tailored
              solutions for your needs. Reach out today to learn more about how
              we can help you.
            </Text>
          </div>
          <div style={{ flex: 1}}>
            <Header style={{textAlign: "center"}} >
              <a href="mailto:admin@ectoecology.com?subject=Survey%20Request&body=Hi%20there,%0AI'd%20like%20to%20book%20a%20survey.">
                {" "}
                admin@ectoecology.com
              </a>
            </Header>
          </div>
        </SectionWrapper>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <NavigationButton type="sales" />
      </div>
      </>
  );
}
