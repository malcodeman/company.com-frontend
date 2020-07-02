import React from "react";
import styled from "styled-components";

import Heading from "../components/Heading";
import Container from "../components/Container";
import Layout from "../components/Layout";
import WorkWithUs from "../components/WorkWithUs";
import { ParagraphMedium, HeadingSmall } from "../components/Typography";
import { Button, KIND } from "../components/button";

import { getProducts } from "../lib/api";
import { NEXT_PUBLIC_STRAPI_API_URL } from "../lib/constants";

const StyledContainer = styled(Container)`
  margin-bottom: 2rem;
`;

const StyledHeading = styled(Heading)`
  text-align: center;
  margin-bottom: 1rem;
`;

const Subheading = styled.p`
  font-size: 1rem;
  color: #111;
  opacity: 0.5;
  padding: 0 1rem;
  text-align: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 6rem;
  margin-bottom: 2rem;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const GridItem = styled.div`
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  margin-bottom: 1rem;
`;

const Title = styled(HeadingSmall)`
  margin-bottom: 1rem;
`;

const Description = styled(ParagraphMedium)`
  margin-bottom: 1rem;
`;

const Footer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const StyledButton = styled(Button)`
  width: 100%;
`;

function Products(props) {
  const { products } = props;

  return (
    <Layout>
      <StyledContainer>
        <StyledHeading>Products we are building</StyledHeading>
        <Subheading>
          We are a group of multi-skilled individuals who are entrepreneurial by
          nature and live to make digital products and services that people love
          to use.
        </Subheading>
      </StyledContainer>
      <Container>
        <Grid>
          {products.map((item) => {
            return (
              <GridItem key={item.id} id={item.title}>
                <Image src={`${NEXT_PUBLIC_STRAPI_API_URL}${item.image.url}`} />
                <Title>{item.title}</Title>
                <Description>{item.description}</Description>
                <Footer>
                  {item.app_store && (
                    <a href={item.app_store} target="_blank" rel="noopener">
                      <StyledButton kind={KIND.secondary}>
                        Appstore
                      </StyledButton>
                    </a>
                  )}
                  {item.google_play && (
                    <a href={item.google_play} target="_blank" rel="noopener">
                      <StyledButton kind={KIND.secondary}>
                        Google Play
                      </StyledButton>
                    </a>
                  )}
                  {item.website && (
                    <a href={item.website} target="_blank" rel="noopener">
                      <StyledButton kind={KIND.secondary}>
                        Visit Live
                      </StyledButton>
                    </a>
                  )}
                </Footer>
              </GridItem>
            );
          })}
        </Grid>
        <WorkWithUs question="Ready to get started?" />
      </Container>
    </Layout>
  );
}

export async function getStaticProps() {
  const products = (await getProducts()) || [];

  return {
    props: { products },
  };
}

export default Products;
