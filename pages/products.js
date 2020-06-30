import React from "react";
import styled from "styled-components";

import Heading from "../components/Heading";
import Container from "../components/Container";
import Layout from "../components/Layout";

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

const Title = styled.span`
  display: block;
  font-size: 2rem;
  font-weight: 700;
  color: #111;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 0.8rem;
  color: #888;
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

const Link = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #d6d6d6;
  padding: 0.5rem 1rem;
  color: #000;
  &:hover {
    color: #fff;
    background-color: #ef1a24;
    border: 1px solid transparent;
  }
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
              <GridItem key={item.id}>
                <Image src={`${NEXT_PUBLIC_STRAPI_API_URL}${item.image.url}`} />
                <Title>{item.title}</Title>
                <Description>{item.description}</Description>
                <Footer>
                  {item.app_store && (
                    <Link href={item.app_store} target="_blank" rel="noopener">
                      Appstore
                    </Link>
                  )}
                  {item.google_play && (
                    <Link
                      href={item.google_play}
                      target="_blank"
                      rel="noopener"
                    >
                      Google Play
                    </Link>
                  )}
                  {item.website && (
                    <Link href={item.website} target="_blank" rel="noopener">
                      Visit Live
                    </Link>
                  )}
                </Footer>
              </GridItem>
            );
          })}
        </Grid>
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
