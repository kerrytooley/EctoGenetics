import SectionTitle, { SectionSubtitle } from "./SectionTitles";
import styled from "styled-components";
import NavigationButton from "./NavigationButton";

const InfoSection = styled.section`
  display: flex;
  flex-direction: row;
  width: 90%;
  max-width: 1000px;
  padding: 1rem;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const WhatWeDoSection = () => {
  return (
    <>
      <SectionTitle id="what-we-do">What we do</SectionTitle>
      <InfoSection>
        <div style={{ flex: 2 }}>
          <SectionSubtitle style={{width: "100%"}}>
            During a bat emergence re-entry survey, we evaluate bat species and
            their habitats within a specified area, typically development
            projects. We conduct field surveys to identify bat roosts, foraging
            areas, and flight paths. The findings help assess potential impacts
            on bat populations, and inform mitigation strategies to protect
            these species and comply with conservation regulations. We offer bat
            surveys across Maidenhead, Berkshire, Buckinghamshire, Greater
            London and more.
          </SectionSubtitle>
        </div>
        <div style={{ flex: 1 }}>
          <NavigationButton
            link={"/bers2"}
            title={"Find out more"}
            type={"nav"}
          />
        </div>
      </InfoSection>
    </>
  );
};

export default WhatWeDoSection;
