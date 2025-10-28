"use client";

import NavigationButton from "@/components/NavigationButton";
import OurServicesSection from "@/components/OurServices";
import SectionTitle, { Text } from "@/components/SectionTitles";
import { colors } from "@/styles/theme";
import { styled } from "styled-components";

const NumberList = styled.ol`
  color: ${colors.dark};
  margin-left: 2rem;
`;

const BulletList = styled.ul`
  color: ${colors.dark};
  margin-left: 2rem;
`;

export default function Bers2Screen() {
  return (
    <>
      <OurServicesSection variant="bers2Screen" />
      <div
        style={{
          backgroundColor: colors.light,
          padding: "1rem",
          width: "90vw",
          maxWidth: "1000px",
          margin: "1rem auto",
        }}
      >
        <SectionTitle style={{ marginTop: 0 }}>
          BERS/Phase 2 Bat Survey
        </SectionTitle>
        <Text>
          In the UK, a Phase 2 bat survey is a detailed investigation conducted
          to assess the presence, distribution, and activity of bats within a
          specific area. These surveys are typically required when initial Phase
          1 surveys (such as Preliminary Ecological Appraisals or Preliminary
          Roost Assessments) indicate that bats might be present and potentially
          impacted by proposed developments.
        </Text>
        <SectionTitle>Purpose of a Phase 2 Bat Survey</SectionTitle>
        <Text>The main objectives of a Phase 2 bat survey are to:</Text>
        <NumberList>
          <li>Confirm the presence or likely absence of bats.</li>
          <li>Identify the species present.</li>
          <li>
            Understand the use of the site by bats (e.g., roosting, foraging,
            commuting).
          </li>
          <li>
            Determine the significance of any bat activity in relation to the
            proposed development.
          </li>
        </NumberList>
        <SectionTitle>Methods Used in Phase 2 Bat Surveys</SectionTitle>
        <Text>
          Phase 2 bat surveys involve more intensive and specific methods
          compared to Phase 1 surveys. Common techniques include:
        </Text>
        <Text style={{ textDecoration: "underline" }}>
          You need to have this phase 1 completed
        </Text>
        <NumberList>
          <li>Phase 1</li>
          <BulletList>
            <li>
              Internal and External Inspections: Detailed inspections of
              buildings, trees, and other structures using ladders, endoscopes,
              and thermal imaging cameras to find signs of bats.
            </li>
          </BulletList>
        </NumberList>
        <Text style={{ textDecoration: "underline", marginTop: "1rem" }}>
          What We Do during Phase 2{" "}
        </Text>
        <NumberList>
          <li>Field surveys</li>
          <BulletList>
            <li>
              Conducted at appropriate times of the year when bats are most
              active (usually between May and September in temperate regions).
              This can include:
            </li>
            <BulletList>
              <li>
                Use IR camera equipment and experienced surveyors to conduct
                Emergence/Re-entry Surveys: Observing bat activity at dusk and
                dawn to see bats emerging from or returning to roosts.
              </li>
              <li>
                Activity Surveys: Using bat detectors to record bat calls and
                identify species through echolocation
              </li>
            </BulletList>
          </BulletList>
          <li style={{ marginTop: "1rem" }}>Survey Methods:</li>
          <BulletList>
            <li>Visual Surveys: Conducted by ecologists to spot bats </li>
            <li>
              Acoustic Surveys: Using devices like bat detectors to capture and
              analyse bat calls.
            </li>
            <li>
              Data Analysis: Identification and analysis of bat species using
              sonogram data and IR camera footage, numbers, and activity
              patterns from the field data. This helps in understanding the
              importance of the site for bats.
            </li>
            <li>
              Impact Assessment: Evaluating the potential impact of the proposed
              development on bats and their habitats, including potential loss
              of roosts, foraging areas, and commuting routes.
            </li>
            <li>
              Mitigation Strategies: Development of recommendations to avoid,
              minimize, or mitigate negative impacts on bats. This can include
              timing restrictions on work, creating alternative roosting sites,
              and habitat enhancement.
            </li>
          </BulletList>
          <li style={{ marginTop: "1rem" }}>Report</li>
          <BulletList>
            <li>
              Our report will cover everything you need to submit for you
              planning application.
            </li>
          </BulletList>
        </NumberList>
        <SectionTitle>Timing and Seasonal Considerations</SectionTitle>
        <Text>
          Phase 2 bat surveys are usually conducted during the bat active
          season, which runs from May to September, with the peak activity
          period being between June and August. The timing is crucial to ensure
          accurate results, as bat activity varies seasonally.
        </Text>
      </div>
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <NavigationButton type={"sales"} />
      </div>
    </>
  );
}
