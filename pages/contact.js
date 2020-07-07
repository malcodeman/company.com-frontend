import styled from "styled-components";
import { useTranslation } from "react-i18next";

import Layout from "../components/Layout";
import ContactForm from "../components/ContactForm";
import { ParagraphLarge, Display2 } from "../components/Typography";
import { Notification, KIND } from "../components/notification";

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

const FormWrapper = styled.div`
  margin-bottom: 1rem;
`;

const EMAIL = "info@ministryofprogramming.com";

function Contact() {
  const { t } = useTranslation();
  const [showNotification, setShowNotification] = React.useState(false);

  async function handleSubmit(formik) {
    formik.setSubmitting(true);

    const response = await fetch(`${LAMBDA_API_URL}/dev/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formik.values),
    });
    const json = await response.json();

    if (json === "MESSAGE_SENT") {
      setShowNotification(true);
      formik.setSubmitting(false);
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
        <FormWrapper>
          <ContactForm onSubmit={handleSubmit} />
        </FormWrapper>
        {showNotification && (
          <Notification kind={KIND.positive} autoHideDuration={4000}>
            {t("Message sent. Thank you!")}
          </Notification>
        )}
      </ContentContainer>
    </Layout>
  );
}

export default Contact;
