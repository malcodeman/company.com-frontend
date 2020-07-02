import Link from "next/link";
import styled from "styled-components";
import Typed from "react-typed";
import { ArrowDownCircle as ArrowDownCircleIcon } from "react-feather";
import { nanoid } from "nanoid";

import Container from "../components/Container";
import Layout from "../components/Layout";
import {
  ParagraphLarge,
  ParagraphMedium,
  HeadingLarge,
  Display2,
} from "../components/Typography";
import StrategyIcon from "../icons/Strategy";
import DesignIcon from "../icons/Design";
import DevelopmentIcon from "../icons/Development";
import WorkWithUs from "../components/WorkWithUs";
import { Button, KIND } from "../components/button";

import { BREAKPOINTS } from "../lib/constants";

const DisplayWrapper = styled.div`
  text-align: center;
  margin-bottom: 6rem;
  .typed-cursor {
    color: ${(props) => props.theme.colors.accent};
  }
`;

const Subdisplay = styled(ParagraphLarge)`
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
  grid-template-columns: 1fr;
  grid-gap: 1rem;
  margin-bottom: 2rem;
  @media (min-width: ${BREAKPOINTS.LARGE_DEVICES}) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const ProcessGridItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
`;

const ProcessDescription = styled(ParagraphMedium)`
  color: ${(props) => props.theme.colors.contentSecondary};
`;

const StepImage = styled.img`
  display: none;
  position: absolute;
  top: 25%;
  right: -25%;
  max-height: 36px;
  @media (min-width: ${BREAKPOINTS.LARGE_DEVICES}) {
    display: initial;
  }
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 256px);
  grid-gap: 1rem;
  margin-bottom: 2rem;
  @media (min-width: ${BREAKPOINTS.LARGE_DEVICES}) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 512px 512px;
  }
`;

const StyledProductLink = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 1rem;
  background-color: ${(props) => props.bgColor || "initial"};
`;

const ProductImage = styled.img`
  display: none;
  margin-bottom: 1rem;
  @media (min-width: ${BREAKPOINTS.SMALL_DEVICES}) {
    display: initial;
  }
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

const StyledButton = styled(Button)`
  width: 256px;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
  margin-bottom: 2rem;
  @media (min-width: ${BREAKPOINTS.SMALL_DEVICES}) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const StatsGridItem = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 2rem;
  &:not(:last-child) {
    border-bottom: 1px solid ${(props) => props.theme.colors.border};
  }
  @media (min-width: ${BREAKPOINTS.SMALL_DEVICES}) {
    &:not(:last-child) {
      border-bottom: 0;
      border-right: 1px solid ${(props) => props.theme.colors.border};
    }
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
    id: nanoid(),
    title: "Strategy",
    description:
      "As a partner specialized in building startups we help you craft a powerful product and marketing strategy to win the market.",
    icon: <StrategyIcon size={224} />,
    stepIcon: <StepImage src="step-1.png" />,
  },
  {
    id: nanoid(),
    title: "Design",
    description:
      "We can help you discover and design a perfect product UX/UI that will delight users.",
    icon: <DesignIcon size={224} />,
    stepIcon: <StepImage src="step-2.png" />,
  },
  {
    id: nanoid(),
    title: "Development",
    description:
      "We can develop a robust Software MVP or larger technical solution for your startup or innovation project to ensure quick time to market and an optimal level of quality.",
    icon: <DevelopmentIcon size={224} />,
  },
];
const PRODUCTS = [
  {
    id: nanoid(),
    title: "NAGA Trader",
    image: "front-swipestox.png",
    backgroundColor: "#101115",
    link: "/products#Naga",
  },
  {
    id: nanoid(),
    title: "Fishbrain",
    image: "front-fishbrain.png",
    backgroundColor: "#0bbcc3",
    link: "/products#Fishbrain",
  },
  {
    id: nanoid(),
    title: "Amuse",
    image: "front-amuse.png",
    backgroundColor: "#f2e722",
    link: "/products#Amuse",
  },
  {
    id: nanoid(),
    title: "Hybird",
    image: "front-hybird.png",
    backgroundColor: "#64efa1",
    link: "/products#HyBird",
  },
];
const STATS = [
  {
    id: nanoid(),
    number: "40+",
    emoji: "🚀",
    label: "Products launched",
  },
  {
    id: nanoid(),
    number: "27,812",
    emoji: "🔥",
    label: "Production commits",
  },
  {
    id: nanoid(),
    number: "25",
    emoji: "💻",
    label: "Daily Releases",
  },
];

function Home() {
  return (
    <Layout>
      <Container>
        <DisplayWrapper>
          <Display2>
            <Typed
              strings={TYPED_STRINGS}
              cursorChar="|"
              typeSpeed={35}
            ></Typed>
          </Display2>
          <Subdisplay>
            We are a software design, development and investment company
            specialized in working with startups
          </Subdisplay>
        </DisplayWrapper>
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
              <ProcessGridItem key={item.id}>
                {item.icon}
                <ParagraphLarge>{item.title}</ParagraphLarge>
                <ProcessDescription>{item.description}</ProcessDescription>
                {item.stepIcon}
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
              <StyledProductLink
                key={item.id}
                href={item.link}
                bgColor={item.backgroundColor}
              >
                <ProductImage src={item.image} />
                <ProductTitle>{item.title}</ProductTitle>
              </StyledProductLink>
            );
          })}
        </ProductsGrid>
        <Awards>
          <AwardImage src="front-deloitte-award.png" />
        </Awards>
        <ButtonWrapper>
          <Link href="/products">
            <a>
              <StyledButton kind={KIND.secondary}>
                See all Products
              </StyledButton>
            </a>
          </Link>
        </ButtonWrapper>
        <StatsGrid>
          {STATS.map((item) => {
            return (
              <StatsGridItem key={item.id}>
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
