import styled from "styled-components";

import Heading from "../components/Heading";
import Container from "../components/Container";
import Layout from "../components/Layout";
import { ParagraphLarge, HeadingXSmall } from "../components/Typography";

import { BREAKPOINTS } from "../lib/constants";

const StyledContainer = styled(Container)`
  margin-bottom: 2rem;
`;

const StyledHeading = styled(Heading)`
  text-align: center;
`;

const ContentContainer = styled.div`
  margin: 0 auto;
  max-width: ${BREAKPOINTS.LARGE_DEVICES};
  padding: 0 1rem;
`;

const Section = styled.section`
  margin-bottom: 2rem;
`;

const StyledParagraphLarge = styled(ParagraphLarge)`
  color: ${(props) => props.theme.colors.contentSecondary};
`;

function Policy() {
  return (
    <Layout>
      <StyledContainer>
        <StyledHeading>Ministry of Programming Privacy Policy</StyledHeading>
      </StyledContainer>
      <ContentContainer>
        <Section>
          <HeadingXSmall>
            Privacy Statement for Ministry of Programming
          </HeadingXSmall>
          <StyledParagraphLarge>
            Ministry of programming („MoP“) has created this privacy policy to
            demonstrate our company’s commitment to protection of privacy.
          </StyledParagraphLarge>
          <StyledParagraphLarge>
            This privacy notice applies solely to data collected by this
            website.
          </StyledParagraphLarge>
          <StyledParagraphLarge>
            The following discloses our information gathering and dissemination
            practices.
          </StyledParagraphLarge>
        </Section>
        <Section>
          <HeadingXSmall>
            Collection of Information from Service Visitors
          </HeadingXSmall>
          <StyledParagraphLarge>
            MoP only collects the information that you voluntarily give us via
            email or other direct contact from you.
          </StyledParagraphLarge>
          <StyledParagraphLarge>
            MoP uses cookies to help us provide you with a personalized service,
            and to help make our websites, applications and services better for
            you.
          </StyledParagraphLarge>
          <StyledParagraphLarge>
            MoP is the sole owner of the information collected on this site. We
            will not sell or rent this information to anyone
          </StyledParagraphLarge>
        </Section>
        <Section>
          <HeadingXSmall>Use of Data Collected</HeadingXSmall>
          <StyledParagraphLarge>
            Personal data collected by MoP may be used for marketing and
            promotional purposes, for a statistical analysis of users’ behavior,
            for product development, for content improvement, or to customize
            the content and layout of our service.
          </StyledParagraphLarge>
          <StyledParagraphLarge>
            We keep customers contact information strictly confidential and use
            it only to send important information to our customers.
          </StyledParagraphLarge>
        </Section>
        <Section>
          <HeadingXSmall>Cross Border Transfers</HeadingXSmall>
          <StyledParagraphLarge>
            Your personal information may be transferred, accessed and stored
            globally as necessary for the uses stated above in accordance with
            this policy.
          </StyledParagraphLarge>
          <StyledParagraphLarge>
            By using MoP websites, you consent to the transfer of information to
            countries outside of your country of residence, which may have
            different data protection rules than those of your country.
          </StyledParagraphLarge>
        </Section>
        <Section>
          <HeadingXSmall>Links</HeadingXSmall>
          <StyledParagraphLarge>
            This website contains links to other sites. Please be aware that we
            are not responsible for the content or privacy practices of such
            other sites.
          </StyledParagraphLarge>
        </Section>
        <Section>
          <HeadingXSmall>Legal Disclaimer</HeadingXSmall>
          <StyledParagraphLarge>
            We may disclose your personally identifiable information if required
            by law.
          </StyledParagraphLarge>
        </Section>
        <Section>
          <HeadingXSmall>Contact Information</HeadingXSmall>
          <StyledParagraphLarge>
            If you have comments or questions about our privacy policy, please
            contact us. We will address any issue to the best of our abilities.
          </StyledParagraphLarge>
        </Section>
        <Section>
          <HeadingXSmall>Changes to Policy Privacy</HeadingXSmall>
          <StyledParagraphLarge>
            MoP will occasionally update this privacy policy. When we do, we
            will post a prominent notice in this section of this policy
            notifying users when it is updated.
          </StyledParagraphLarge>
          <StyledParagraphLarge>
            If we are going to use your personal information in a manner
            different from that stated at the time of collection, we will notify
            you via email, and you will have a choice as to whether or not we
            use your personal information in this different manner.
          </StyledParagraphLarge>
        </Section>
        <Section>
          <HeadingXSmall>Consent</HeadingXSmall>
          <StyledParagraphLarge>
            By using MoP website, you signify your agreement to the terms and
            conditions of this privacy policy.
          </StyledParagraphLarge>
        </Section>
      </ContentContainer>
    </Layout>
  );
}

export default Policy;
