import styled from "styled-components";

import Layout from "../components/Layout";
import Container from "../components/Container";
import { ParagraphLarge, ParagraphMedium } from "../components/Typography";

import { BREAKPOINTS } from "../lib/constants";

const Cover = styled.div`
  background-image: url("cover.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 4rem 0;
`;

const CoverContainer = styled(Container)`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2rem;
  align-items: center;
  @media (min-width: ${BREAKPOINTS.SMALL_DEVICES}) {
    grid-template-columns: 1fr auto;
  }
`;

const StyledParagraphLarge = styled(ParagraphLarge)`
  color: #fff;
`;

const StyledParagraphMedium = styled(ParagraphMedium)`
  color: #fff;
`;

const Awards = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
`;

const AwardImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: none;
`;

const Section = styled.section`
  margin: 4rem 0;
`;

const TeamImages = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
  padding: 0 1rem;
  @media (min-width: ${BREAKPOINTS.SMALL_DEVICES}) {
    grid-template-columns: 1fr 1fr;
  }
`;

const TeamImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

function About() {
  return (
    <Layout>
      <Cover>
        <CoverContainer>
          <div>
            <StyledParagraphLarge>
              We are obsessed with building amazing products with the best
              founders
            </StyledParagraphLarge>
            <StyledParagraphMedium>
              Our mission is to help entrepreneurs launch new products &
              services, iterate and succeed faster.
            </StyledParagraphMedium>
          </div>
          <Awards>
            <AwardImage src="deloitte-award.jpg" />
            <AwardImage src="ft-award.png" />
          </Awards>
        </CoverContainer>
      </Cover>
      <Section>
        <Container>
          <ParagraphLarge>About</ParagraphLarge>
          <ParagraphMedium>
            Ministry of Programming is a venture-builder/startup studio. We
            focus on software design and development consulting services for
            early-stage startups and new products. We also invest in a few
            startups every year.
          </ParagraphMedium>
          <ParagraphMedium>
            Unlike the average consultancy or agency, we provide an end-to-end
            support structure for startups. We are very hands-on and we are not
            afraid of any technical challenge. We built over 40 products from
            scratch, including social networks, search engines, crypto trading
            systems, mobile apps and hardware devices. We built FinTech,
            HealthTech, and products in many other verticals.
          </ParagraphMedium>
          <ParagraphMedium>
            We understand that creating successful startups requires focus,
            commitment, and determination and that creating startups is a hard
            challenge in business and technology. We exist to help startups and
            founders survive and thrive in a difficult environment and make an
            impact on the world and the economy.
          </ParagraphMedium>
        </Container>
      </Section>
      <TeamImages>
        <TeamImage src="team-1.jpg" />
        <TeamImage src="team-2.jpg" />
      </TeamImages>
    </Layout>
  );
}

export default About;
