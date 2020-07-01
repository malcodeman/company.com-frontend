import styled from "styled-components";

import Heading from "../components/Heading";
import Container from "../components/Container";
import Layout from "../components/Layout";
import ContactForm from "./contact-form";

import { BREAKPOINTS, LAMBDA_API_URL } from "../lib/constants";

const StyledContainer = styled(Container)`
  margin-bottom: 2rem;
`;

const StyledHeading = styled(Heading)`
  text-align: center;
  margin-bottom: 1rem;
`;

const HighlightedText = styled.span`
  color: #ee2633;
`;

const FormWrapper = styled.div`
  max-width: ${BREAKPOINTS.LARGE_DEVICES};
  margin: 0 auto;
  padding: 0 1rem;
`;

const Paragraph = styled.p`
  color: #111;
  font-size: 1rem;
  margin-bottom: 2rem;
  line-height: 1.4;
`;

const EmailLink = styled.a`
  color: #ee2633;
`;

const EMAIL = "info@ministryofprogramming.com";

function Contact() {
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
      <StyledContainer>
        <StyledHeading>
          <HighlightedText>Hello.</HighlightedText> What can we <br /> help you
          with?
        </StyledHeading>
      </StyledContainer>
      <FormWrapper>
        <Paragraph>
          If you have a question or want to work with us you can send an email
          to:
          <br />
          <EmailLink href={`mailto:${EMAIL}`}>
            info@ministryofprogramming.com
          </EmailLink>
          , or fill the form below
        </Paragraph>
        <ContactForm onSubmit={handleSubmit} />
      </FormWrapper>
    </Layout>
  );
}

export default Contact;
