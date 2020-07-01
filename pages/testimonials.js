import styled from "styled-components";

import Heading from "../components/Heading";
import Container from "../components/Container";
import Layout from "../components/Layout";

import { getTestimonials } from "../lib/api";
import { NEXT_PUBLIC_STRAPI_API_URL } from "../lib/constants";

const StyledContainer = styled(Container)`
  margin-bottom: 2rem;
`;

const StyledHeading = styled(Heading)`
  text-align: center;
  margin-bottom: 1rem;
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
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
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
  color: #475059;
`;

const Text = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
  line-height: 1.4;
  color: #475059;
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  color: #475059;
`;

const AuthorImage = styled.img`
  height: 48px;
  width: 48px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 1rem;
`;

const AuthorName = styled.span`
  font-weight: 700;
  font-size: 0.8rem;
  display: block;
`;

const AuthorDescription = styled.span`
  font-size: 0.8rem;
`;

function Testimonials(props) {
  const { testimonials } = props;

  return (
    <Layout>
      <StyledContainer>
        <StyledHeading>What our partners say</StyledHeading>
      </StyledContainer>
      <Container>
        <Grid>
          {testimonials.map((item) => {
            return (
              <GridItem key={item.id}>
                <Header>
                  <a href={item.url} target="_blank" rel="noopener">
                    <Image
                      src={`${NEXT_PUBLIC_STRAPI_API_URL}${item.image.url}`}
                    />
                  </a>
                </Header>
                <Text>
                  <Quote>“</Quote>
                  {item.text}
                  <Quote>“</Quote>
                </Text>
                <Footer>
                  <AuthorImage
                    src={`${NEXT_PUBLIC_STRAPI_API_URL}${item.author_image.url}`}
                  />
                  <div>
                    <AuthorName>{item.author_name}</AuthorName>
                    <AuthorDescription>
                      {item.author_description}
                    </AuthorDescription>
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
