import styled from "styled-components";
import { useTranslation } from "react-i18next";

import Layout from "../components/Layout";
import ContactForm from "./contact-form";
import { ParagraphLarge, Display2 } from "../components/Typography";

import { BREAKPOINTS, LAMBDA_API_URL } from "../lib/constants";

const DisplayWrapper = styled.div`
  text-align: center;
`;

const ContentContainer = styled.div`
  max-width: ${BREAKPOINTS.LARGE_DEVICES};
  margin: 0 auto;
  padding: 0 1rem;
`;

const HighlightedText = styled.span`
  color: #ee2633;
`;

const EmailLink = styled.a`
  color: #ee2633;
`;

const EMAIL = "info@ministryofprogramming.com";

function Contact() {
  const { t } = useTranslation();

  async function handleSubmit(formik) {
    const response = await fetch(`${LAMBDA_API_URL}/dev/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formik.values),
    });
    const json = await response.json();

    if (json === "MESSAGE_SENT") {
      formik.resetForm();
    }
  }

  return (
    <Layout>
      <ContentContainer>
        <DisplayWrapper>
          <Display2>
            <HighlightedText>{t("Hello.")}</HighlightedText> {t("What can we")}
            <br /> {t("help you with?")}
          </Display2>
        </DisplayWrapper>
        <ParagraphLarge>
          {t(
            "If you have a question or want to work with us you can send an email to"
          )}
          :
          <br />
          <EmailLink href={`mailto:${EMAIL}`}>
            info@ministryofprogramming.com
          </EmailLink>
          , {t("or fill the form below")}
        </ParagraphLarge>
        <ContactForm onSubmit={handleSubmit} />
      </ContentContainer>
    </Layout>
  );
}

export default Contact;
