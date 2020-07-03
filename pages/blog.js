import styled from "styled-components";
import { nanoid } from "nanoid";
import { useTranslation } from "react-i18next";

import Container from "../components/Container";
import Layout from "../components/Layout";
import {
  HeadingSmall,
  ParagraphMedium,
  Display2,
} from "../components/Typography";

import { BREAKPOINTS } from "../lib/constants";

const DisplayWrapper = styled.div`
  text-align: center;
  margin-bottom: 2rem;
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
  background-color: ${(props) => props.theme.colors.backgroundSecondary};
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const BlogTitle = styled(HeadingSmall)`
  text-transform: uppercase;
  margin-bottom: 1rem;
`;

const BlogFooter = styled.div`
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
  const { t } = useTranslation();

  return (
    <Layout>
      <Container>
        <DisplayWrapper>
          <Display2>{t("MOP Blog")}</Display2>
        </DisplayWrapper>
        <Grid>
          {BLOGS.map((item) => {
            return (
              <a href={item.link} target="_blank" rel="noopener" key={item.id}>
                <BlogItem>
                  <Image src={item.image} alt={item.imageAlternateText} />
                  <BlogFooter>
                    <BlogTitle>{t(item.title)}</BlogTitle>
                    <ParagraphMedium>{t(item.text)}</ParagraphMedium>
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
