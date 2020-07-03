import styled from "styled-components";
import { useTranslation } from "react-i18next";

import Layout from "../components/Layout";
import {
  ParagraphLarge,
  HeadingXSmall,
  Display2,
} from "../components/Typography";

import { BREAKPOINTS } from "../lib/constants";

const DisplayWrapper = styled.div`
  text-align: center;
  margin-bottom: 2rem;
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
  const { t } = useTranslation();

  return (
    <Layout>
      <ContentContainer>
        <DisplayWrapper>
          <Display2>{t("Ministry of Programming Privacy Policy")}</Display2>
        </DisplayWrapper>
        <Section>
          <HeadingXSmall>
            {t("Privacy Statement for Ministry of Programming")}
          </HeadingXSmall>
          <StyledParagraphLarge>
            {t(
              "Ministry of programming („MoP“) has created this privacy policy to demonstrate our company’s commitment to protection of privacy."
            )}
          </StyledParagraphLarge>
          <StyledParagraphLarge>
            {t(
              "This privacy notice applies solely to data collected by this website."
            )}
          </StyledParagraphLarge>
          <StyledParagraphLarge>
            {t(
              "The following discloses our information gathering and dissemination practices."
            )}
          </StyledParagraphLarge>
        </Section>
        <Section>
          <HeadingXSmall>
            {t("Collection of Information from Service Visitors")}
          </HeadingXSmall>
          <StyledParagraphLarge>
            {t(
              "MoP only collects the information that you voluntarily give us via email or other direct contact from you."
            )}
          </StyledParagraphLarge>
          <StyledParagraphLarge>
            {t(
              "MoP uses cookies to help us provide you with a personalized service, and to help make our websites, applications and services better for you."
            )}
          </StyledParagraphLarge>
          <StyledParagraphLarge>
            {t(
              "MoP is the sole owner of the information collected on this site. We will not sell or rent this information to anyone"
            )}
          </StyledParagraphLarge>
        </Section>
        <Section>
          <HeadingXSmall>{t("Use of Data Collected")}</HeadingXSmall>
          <StyledParagraphLarge>
            {t(
              "Personal data collected by MoP may be used for marketing and promotional purposes, for a statistical analysis of users’ behavior, for product development, for content improvement, or to customize the content and layout of our service."
            )}
          </StyledParagraphLarge>
          <StyledParagraphLarge>
            {t(
              "We keep customers contact information strictly confidential and use it only to send important information to our customers."
            )}
          </StyledParagraphLarge>
        </Section>
        <Section>
          <HeadingXSmall>{t("Cross Border Transfers")}</HeadingXSmall>
          <StyledParagraphLarge>
            {t(
              "Your personal information may be transferred, accessed and stored globally as necessary for the uses stated above in accordance with this policy."
            )}
          </StyledParagraphLarge>
          <StyledParagraphLarge>
            {t(
              "By using MoP websites, you consent to the transfer of information to countries outside of your country of residence, which may have different data protection rules than those of your country."
            )}
          </StyledParagraphLarge>
        </Section>
        <Section>
          <HeadingXSmall>{t("Links")}</HeadingXSmall>
          <StyledParagraphLarge>
            {t(
              "This website contains links to other sites. Please be aware that we are not responsible for the content or privacy practices of such other sites."
            )}
          </StyledParagraphLarge>
        </Section>
        <Section>
          <HeadingXSmall>{t("Legal Disclaimer")}</HeadingXSmall>
          <StyledParagraphLarge>
            {t(
              "We may disclose your personally identifiable information if required by law."
            )}
          </StyledParagraphLarge>
        </Section>
        <Section>
          <HeadingXSmall>{t("Contact Information")}</HeadingXSmall>
          <StyledParagraphLarge>
            {t(
              "If you have comments or questions about our privacy policy, please contact us. We will address any issue to the best of our abilities."
            )}
          </StyledParagraphLarge>
        </Section>
        <Section>
          <HeadingXSmall>{t("Changes to Policy Privacy")}</HeadingXSmall>
          <StyledParagraphLarge>
            {t(
              "MoP will occasionally update this privacy policy. When we do, we will post a prominent notice in this section of this policy notifying users when it is updated."
            )}
          </StyledParagraphLarge>
          <StyledParagraphLarge>
            {t(
              "If we are going to use your personal information in a manner different from that stated at the time of collection, we will notify you via email, and you will have a choice as to whether or not we use your personal information in this different manner."
            )}
          </StyledParagraphLarge>
        </Section>
        <Section>
          <HeadingXSmall>{t("Consent")}</HeadingXSmall>
          <StyledParagraphLarge>
            {t(
              "By using MoP website, you signify your agreement to the terms and conditions of this privacy policy."
            )}
          </StyledParagraphLarge>
        </Section>
      </ContentContainer>
    </Layout>
  );
}

export default Policy;
