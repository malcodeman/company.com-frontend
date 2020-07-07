import styled from "styled-components";
import { useTranslation } from "react-i18next";

import Container from "../components/Container";
import Layout from "../components/Layout";
import {
  ParagraphMedium,
  ParagraphSmall,
  Display2,
} from "../components/Typography";
import Trans from "../components/Trans";

import { getTestimonials } from "../lib/api";
import { NEXT_PUBLIC_STRAPI_API_URL } from "../lib/constants";

const DisplayWrapper = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
`;

const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  background-color: ${(props) => props.theme.colors.backgroundSecondary};
`;

const Header = styled.div`
  margin-bottom: 1rem;
`;

const Image = styled.img`
  height: 48px;
  max-width: 100%;
  object-fit: cover;
`;

const Quote = styled.span`
  font-size: 1.2rem;
  color: ${(props) => props.theme.colors.contentPrimary};
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
`;

const AuthorImage = styled.img`
  height: 48px;
  width: 48px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 1rem;
`;

function Testimonials(props) {
  const { testimonials } = props;
  const { t } = useTranslation();

  return (
    <Layout>
      <Container>
        <DisplayWrapper>
          <Display2>{t("What our partners say")}</Display2>
        </DisplayWrapper>
        <Grid>
          {testimonials &&
            testimonials.map((item) => {
              return (
                <GridItem key={item.id}>
                  <Header>
                    <a href={item.url} target="_blank" rel="noopener">
                      <Image
                        src={`${NEXT_PUBLIC_STRAPI_API_URL}${item.image.url}`}
                      />
                    </a>
                  </Header>
                  <ParagraphMedium>
                    <Quote>“</Quote>
                    <Trans field="text" content={item} />
                    <Quote>“</Quote>
                  </ParagraphMedium>
                  <Footer>
                    <AuthorImage
                      src={`${NEXT_PUBLIC_STRAPI_API_URL}${item.author_image.url}`}
                    />
                    <div>
                      <ParagraphSmall>{item.author_name}</ParagraphSmall>
                      <ParagraphSmall>{item.author_description}</ParagraphSmall>
                    </div>
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
  const testimonials = (await getTestimonials()) || [];

  return {
    props: { testimonials },
  };
}

export default Testimonials;
