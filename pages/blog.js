import styled from "styled-components";
import { nanoid } from "nanoid";

import Heading from "../components/Heading";
import Container from "../components/Container";
import Layout from "../components/Layout";

import { BREAKPOINTS } from "../lib/constants";

const StyledContainer = styled(Container)`
  margin-bottom: 2rem;
`;

const StyledHeading = styled(Heading)`
  text-align: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 4rem;
  @media (min-width: ${BREAKPOINTS.MEDIUM_DEVICES}) {
    grid-template-columns: 1fr 1fr;
  }
`;

const BlogItem = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const BlogTitle = styled.h2`
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  color: #111;
  text-transform: uppercase;
  margin-bottom: 1rem;
`;

const BlogText = styled.p`
  font-size: 1rem;
  color: #111;
`;

const BlogFooter = styled.div`
  background-color: #e1e1e1;
  padding: 2rem;
  height: 200px;
`;

const BLOGS = [
  {
    id: nanoid(),
    title: "Technology",
    image: "tech-blog.png",
    imageAlternateText: "Technology",
    text: "Essays about Software Design, Development and Technology",
    link: "https://medium.com/mop-developers",
  },
  {
    id: nanoid(),
    title: "Entrepreneurship",
    image: "ent-blog.png",
    imageAlternateText: "Entrepreneurship",
    text:
      "Essays and stories about entrepreneurship, startup methodology and best practices",
    link: "https://medium.com/ministry-of-programming-entrepreneurship",
  },
];

function Blog() {
  return (
    <Layout>
      <StyledContainer>
        <StyledHeading>MOP Blog</StyledHeading>
      </StyledContainer>
      <Container>
        <Grid>
          {BLOGS.map((item) => {
            return (
              <a href={item.link} target="_blank" rel="noopener" key={item.id}>
                <BlogItem>
                  <Image src={item.image} alt={item.imageAlternateText} />
                  <BlogFooter>
                    <BlogTitle>{item.title}</BlogTitle>
                    <BlogText>{item.text}</BlogText>
                  </BlogFooter>
                </BlogItem>
              </a>
            );
          })}
        </Grid>
      </Container>
    </Layout>
  );
}

export default Blog;
