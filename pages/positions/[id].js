import styled from "styled-components";
import { useTranslation } from "react-i18next";

import Layout from "../../components/Layout";
import {
  ParagraphLarge,
  ParagraphMedium,
  HeadingLarge,
  Display2,
} from "../../components/Typography";
import PositionForm from "../../components/PositionForm";
import { Notification, KIND } from "../../components/notification";

import { getPosition, getPositions } from "../../lib/api";
import { BREAKPOINTS, LAMBDA_API_URL } from "../../lib/constants";
import translate from "../../utils/translate";

const DisplayWrapper = styled.div`
  text-align: center;
`;

const ContentContainer = styled.div`
  margin: 0 auto;
  padding: 0 1rem;
  max-width: ${BREAKPOINTS.LARGE_DEVICES};
`;

const Description = styled.div`
  margin-bottom: 2rem;
  text-align: center;
`;

const StyledHeadingLarge = styled(HeadingLarge)`
  margin-bottom: 1rem;
  color: ${(props) => props.theme.colors.accent};
`;

const ListWrapper = styled.div`
  margin-bottom: 2rem;
`;

const List = styled.ul`
  padding-left: 0;
  margin: 0;
`;

const ListItem = styled.li`
  margin-bottom: 1rem;
`;

const FormWrapper = styled.div`
  margin-bottom: 1rem;
`;

function Position(props) {
  const { position } = props;
  const { t, i18n } = useTranslation();
  const [showNotification, setShowNotification] = React.useState(false);
  const description = translate("description", position, i18n.language);

  async function handleSubmit(formik) {
    formik.setSubmitting(true);

    const values = {
      ...formik.values,
      age: String(formik.values.age),
    };
    const response = await fetch(`${LAMBDA_API_URL}/dev/job-apply`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    const json = await response.json();

    if (json === "MESSAGE_SENT") {
      setShowNotification(true);
      formik.setSubmitting(false);
      formik.resetForm();
    }
  }

  function parseDescription(description) {
    const lines = description.split("\n");

    return lines.map((item) => {
      return <ParagraphLarge key={item}>{item}</ParagraphLarge>;
    });
  }

  return (
    <Layout>
      <ContentContainer>
        <DisplayWrapper>
          <Display2>{position.title}</Display2>
        </DisplayWrapper>
        {position.description && (
          <Description>{parseDescription(description)}</Description>
        )}
        {position.responsibilities && (
          <ListWrapper>
            <StyledHeadingLarge>{t("Responsibilities")}:</StyledHeadingLarge>
            <List>
              {position.responsibilities.map((item) => {
                return (
                  <ListItem key={item.text}>
                    <ParagraphMedium>{item.text}</ParagraphMedium>
                  </ListItem>
                );
              })}
            </List>
          </ListWrapper>
        )}
        {position.qualifications && (
          <ListWrapper>
            <StyledHeadingLarge>{t("Qualifications")}:</StyledHeadingLarge>
            <List>
              {position.qualifications.map((item) => {
                return (
                  <ListItem key={item.text}>
                    <ParagraphMedium>{item.text}</ParagraphMedium>
                  </ListItem>
                );
              })}
            </List>
          </ListWrapper>
        )}
        <FormWrapper>
          <PositionForm position={position.title} onSubmit={handleSubmit} />
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

export async function getStaticPaths() {
  const positions = (await getPositions()) || [];
  const paths = positions && positions.map((item) => `/positions/${item.id}`);

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const position = (await getPosition(params.id)) || [];

  return {
    props: { position },
  };
}

export default Position;
