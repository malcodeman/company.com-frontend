import styled from "styled-components";

import Heading from "../components/Heading";
import Container from "../components/Container";
import Layout from "../components/Layout";

import json from "../public/blogs.json";

const StyledHeading = styled(Heading)`
  text-align: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 4rem;
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

function Blog() {
  return (
    <Layout>
      <Container>
        <StyledHeading>MOP Blog</StyledHeading>
      </Container>
      <Grid>
        {json.map((item) => {
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
    </Layout>
  );
}

export default Blog;
