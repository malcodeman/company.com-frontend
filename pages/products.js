import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

import Container from "../components/Container";
import Layout from "../components/Layout";
import WorkWithUs from "../components/WorkWithUs";
import {
  ParagraphMedium,
  HeadingSmall,
  Display2,
  ParagraphLarge,
} from "../components/Typography";
import { Button, KIND } from "../components/button";
import Trans from "../components/Trans";

import { getProducts } from "../lib/api";
import { NEXT_PUBLIC_STRAPI_API_URL } from "../lib/constants";

const Cover = styled.div`
  margin-bottom: 2rem;
  background-image: url("products-cover.jpg");
  background-size: cover;
  background-position: center;
  height: 30rem;
  position: relative;
`;

const DisplayTextWrapper = styled.div`
  padding: 1rem;
  position: absolute;
  left: 2rem;
  bottom: 0;
  max-width: 60%;
  background-color: ${(props) => props.theme.colors.backgroundPrimary};
`;

const Subdisplay = styled(ParagraphLarge)`
  color: ${(props) => props.theme.colors.contentSecondary};
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2rem;
  margin-bottom: 2rem;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  background-color: ${(props) => props.theme.colors.backgroundSecondary};
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  max-width: 100%;
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
  const { t } = useTranslation();

  return (
    <Layout>
      <Container>
        <Cover>
          <DisplayTextWrapper>
            <Display2>{t("Products we are building")}</Display2>
            <Subdisplay>
              {t(
                "We are a group of multi-skilled individuals who are entrepreneurial by nature and live to make digital products and services that people love to use."
              )}
            </Subdisplay>
          </DisplayTextWrapper>
        </Cover>
        <Grid>
          {products.map((item) => {
            return (
              <GridItem key={item.id} id={item.title}>
                <Image src={`${NEXT_PUBLIC_STRAPI_API_URL}${item.image.url}`} />
                <Title>{item.title}</Title>
                <Description>
                  <Trans field="description" content={item} />
                </Description>
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
        <WorkWithUs question={t("Ready to get started?")} />
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
