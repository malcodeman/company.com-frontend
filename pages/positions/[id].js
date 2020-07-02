import styled from "styled-components";

import Layout from "../../components/Layout";
import {
  ParagraphLarge,
  ParagraphMedium,
  HeadingLarge,
  Display2,
} from "../../components/Typography";
import PositionForm from "./position-form";

import { getPosition, getPositions } from "../../lib/api";
import { BREAKPOINTS, LAMBDA_API_URL } from "../../lib/constants";

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

function Position(props) {
  const { position } = props;

  async function handleSubmit(formik) {
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
          <Description>{parseDescription(position.description)}</Description>
        )}
        {position.responsibilities && (
          <ListWrapper>
            <StyledHeadingLarge>Responsibilities:</StyledHeadingLarge>
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
            <StyledHeadingLarge>Qualifications:</StyledHeadingLarge>
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
        <PositionForm position={position.title} onSubmit={handleSubmit} />
      </ContentContainer>
    </Layout>
  );
}

export async function getStaticPaths() {
  const positions = (await getPositions()) || [];
  const paths = positions.map((item) => `/positions/${item.id}`);

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
