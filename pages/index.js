import Link from "next/link";
import styled from "styled-components";
import Typed from "react-typed";
import { ArrowDownCircle as ArrowDownCircleIcon } from "react-feather";

import Heading from "../components/Heading";
import Container from "../components/Container";
import Layout from "../components/Layout";
import {
  HeadingXLarge,
  ParagraphLarge,
  ParagraphMedium,
  HeadingLarge,
} from "../components/Typography";
import StrategyIcon from "../icons/Strategy";
import DesignIcon from "../icons/Design";
import DevelopmentIcon from "../icons/Development";
import WorkWithUs from "../components/WorkWithUs";

const StyledContainer = styled(Container)`
  margin-bottom: 6rem;
`;

const StyledHeading = styled(Heading)`
  text-align: center;
  .typed-cursor {
    color: ${(props) => props.theme.colors.accent};
  }
`;

const Subheading = styled(HeadingXLarge)`
  text-align: center;
  color: ${(props) => props.theme.colors.accent};
`;

const ArrowWrapper = styled.div`
  margin-bottom: 6rem;
  text-align: center;
  svg {
    cursor: pointer;
    color: ${(props) => props.theme.colors.accent};
  }
`;

const HeadingWrapper = styled.div`
  margin-bottom: 2rem;
  text-align: center;
`;

const ProcessGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1rem;
  margin-bottom: 2rem;
`;

const ProcessGridItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const ProcessDescription = styled(ParagraphMedium)`
  color: ${(props) => props.theme.colors.contentSecondary};
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 512px 512px;
  grid-gap: 1rem;
`;

const ProductsGridItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-bottom: 2rem;
  background-color: ${(props) => props.bgColor || "initial"};
`;

const ProductImage = styled.img`
  margin-bottom: 1rem;
`;

const ProductTitle = styled(ParagraphLarge)`
  color: #fff;
`;

const Awards = styled.div`
  margin-bottom: 2rem;
  text-align: center;
`;

const AwardImage = styled.img`
  max-width: 50%;
`;

const ButtonWrapper = styled.div`
  margin-bottom: 2rem;
  text-align: center;
`;

const Button = styled.button`
  background-color: #fff;
  border: 1px solid #979797;
  padding: 1rem 0;
  width: 256px;
  cursor: pointer;
  color: ${(props) => props.theme.colors.accent};
  ${(props) => props.theme.typography.ParagraphLarge};
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1rem;
  margin-bottom: 2rem;
`;

const StatsGridItem = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 2rem 0;
  &:not(:last-child) {
    border-right: 1px solid #070606;
  }
`;

const StatsNumber = styled(ParagraphLarge)`
  color: ${(props) => props.theme.colors.accent};
`;

const Emoji = styled.span`
  margin-right: 1rem;
`;

const TYPED_STRINGS = [
  "Stop searching.",
  "Build your product with startup experts",
];
const PROCESS = [
  {
    title: "Strategy",
    description:
      "As a partner specialized in building startups we help you craft a powerful product and marketing strategy to win the market.",
    icon: <StrategyIcon size={224} />,
  },
  {
    title: "Design",
    description:
      "We can help you discover and design a perfect product UX/UI that will delight users.",
    icon: <DesignIcon size={224} />,
  },
  {
    title: "Development",
    description:
      "We can develop a robust Software MVP or larger technical solution for your startup or innovation project to ensure quick time to market and an optimal level of quality.",
    icon: <DevelopmentIcon size={224} />,
  },
];
const PRODUCTS = [
  {
    title: "NAGA Trader",
    image: "front-swipestox.png",
    backgroundColor: "#101115",
  },
  {
    title: "Fishbrain",
    image: "front-fishbrain.png",
    backgroundColor: "#0bbcc3",
  },
  {
    title: "Amuse",
    image: "front-amuse.png",
    backgroundColor: "#f2e722",
  },
  {
    title: "Hybird",
    image: "front-hybird.png",
    backgroundColor: "#64efa1",
  },
];
const STATS = [
  {
    number: "40+",
    emoji: "🚀",
    label: "Products launched",
  },
  {
    number: "27,812",
    emoji: "🔥",
    label: "Production commits",
  },
  {
    number: "25",
    emoji: "💻",
    label: "Daily Releases",
  },
];

function Home() {
  return (
    <Layout>
      <StyledContainer>
        <StyledHeading>
          <Typed strings={TYPED_STRINGS} cursorChar="|" typeSpeed={35}></Typed>
        </StyledHeading>
        <Subheading>
          We are a software design, development and investment company
          specialized in working with startups
        </Subheading>
      </StyledContainer>
      <Container>
        <ArrowWrapper>
          <Link href="#process">
            <a>
              <ArrowDownCircleIcon size={32} />
            </a>
          </Link>
        </ArrowWrapper>
        <HeadingWrapper>
          <HeadingLarge>Our process</HeadingLarge>
        </HeadingWrapper>
        <ProcessGrid id="process">
          {PROCESS.map((item) => {
            return (
              <ProcessGridItem>
                {item.icon}
                <ParagraphLarge>{item.title}</ParagraphLarge>
                <ProcessDescription>{item.description}</ProcessDescription>
              </ProcessGridItem>
            );
          })}
        </ProcessGrid>
        <HeadingWrapper>
          <HeadingLarge>Our work</HeadingLarge>
        </HeadingWrapper>
        <ProductsGrid>
          {PRODUCTS.map((item) => {
            return (
              <ProductsGridItem bgColor={item.backgroundColor}>
                <ProductImage src={item.image} />
                <ProductTitle>{item.title}</ProductTitle>
              </ProductsGridItem>
            );
          })}
        </ProductsGrid>
        <Awards>
          <AwardImage src="front-deloitte-award.png" />
        </Awards>
        <ButtonWrapper>
          <Link href="/products">
            <a>
              <Button>See all Products</Button>
            </a>
          </Link>
        </ButtonWrapper>
        <StatsGrid>
          {STATS.map((item) => {
            return (
              <StatsGridItem>
                <StatsNumber>{item.number}</StatsNumber>
                <ParagraphLarge>
                  <Emoji role="img" aria-label="emoji">
                    {item.emoji}
                  </Emoji>
                  {item.label}
                </ParagraphLarge>
              </StatsGridItem>
            );
          })}
        </StatsGrid>
        <WorkWithUs />
      </Container>
    </Layout>
  );
}

export default Home;
