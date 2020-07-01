import Link from "next/link";
import styled from "styled-components";
import { nanoid } from "nanoid";

import Heading from "../../components/Heading";
import Container from "../../components/Container";
import Layout from "../../components/Layout";
import DumbbellIcon from "../../icons/Dumbbell";
import IceCreamIcon from "../../icons/IceCream";
import ChefIcon from "../../icons/Chef";
import HomeIcon from "../../icons/Home";
import AcademicCapIcon from "../../icons/AcademicCap";
import PopcornIcon from "../../icons/Popcorn";
import PlaystationControllerIcon from "../../icons/PlaystationController";
import AppleIcon from "../../icons/Apple";

import { getPositions } from "../../lib/api";

import { BREAKPOINTS } from "../../lib/constants";

const StyledContainer = styled(Container)`
  margin-bottom: 2rem;
`;

const StyledHeading = styled(Heading)`
  text-align: center;
`;

const Subheading = styled.p`
  font-size: 1rem;
  color: #111;
  opacity: 0.5;
  padding: 0 1rem;
  text-align: center;
`;

const EmailLink = styled.a`
  color: #ee2633;
`;

const HighlightedText = styled.span`
  color: #ee2633;
  ${(props) => props.theme.typography.font550};
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin: 2rem 0;
  @media (min-width: ${BREAKPOINTS.LARGE_DEVICES}) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Title = styled.span`
  display: block;
  color: ${(props) => props.theme.colors.contentPrimary};
  ${(props) => props.theme.typography.font550};
`;

const GridItem = styled.div`
  padding: 1rem;
  border-bottom: 2px solid #eaeaea;
  cursor: pointer;
  &:hover ${Title} {
    color: ${(props) => props.theme.colors.accent};
  }
`;

const Location = styled.span`
  color: ${(props) => props.theme.colors.contentSecondary};
  ${(props) => props.theme.typography.font300};
`;

const PerksGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
  @media (min-width: ${BREAKPOINTS.LARGE_DEVICES}) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Perk = styled.div`
  display: flex;
  align-items: center;
`;

const PerkText = styled.span`
  color: ${(props) => props.theme.colors.contentPrimary};
  ${(props) => props.theme.typography.font550};
`;

const EMAIL = "careers@mop.ba";
const PERKS = [
  {
    id: nanoid(),
    text: "Healthy life! Paid Gym membership",
    icon: <DumbbellIcon size={128} />,
  },
  {
    id: nanoid(),
    text: "Fully Stocked kitchen with plenty of snacks",
    icon: <IceCreamIcon size={128} />,
  },
  {
    id: nanoid(),
    text: "Friday lunch prepared by our own chef",
    icon: <ChefIcon size={128} />,
  },
  {
    id: nanoid(),
    text: "Flex time: work from home or the café",
    icon: <HomeIcon size={128} />,
  },
  {
    id: nanoid(),
    text: "Continued learning and growth opportunities",
    icon: <AcademicCapIcon size={128} />,
  },
  {
    id: nanoid(),
    text: "Group events like movie night or dinner",
    icon: <PopcornIcon size={128} />,
  },
  {
    id: nanoid(),
    text: "FIFA Fan? Play PS4 in our dedicated game room!",
    icon: <PlaystationControllerIcon size={128} />,
  },
  {
    id: nanoid(),
    text: "Work with only the best Apple hardware!",
    icon: <AppleIcon size={128} />,
  },
];

const JOB_TYPES = {
  full_time: "full_time",
  part_time: "part_time",
  internship: "internship",
  volunteer: "volunteer",
  contract: "contract",
};

function Positions(props) {
  const { positions } = props;

  function parseJobType(type) {
    switch (type) {
      default:
      case JOB_TYPES.full_time:
        return "Full-time";
      case JOB_TYPES.part_time:
        return "Part-time";
      case JOB_TYPES.internship:
        return "Internship";
      case JOB_TYPES.volunteer:
        return "Volunteer";
      case JOB_TYPES.contract:
        return "Contract";
    }
  }

  return (
    <Layout>
      <StyledContainer>
        <StyledHeading>Join our team</StyledHeading>
        <Subheading>
          At MOP we welcome Hackers, Designers, Product Strategists and all
          other creative people that want to build products that have
          significant impact! Please send your resume to{" "}
          <EmailLink href={`mailto:${EMAIL}`}>careers@mop.ba</EmailLink>
        </Subheading>
      </StyledContainer>
      <HighlightedText>We are searching for:</HighlightedText>
      <Grid>
        {positions.map((item) => {
          return (
            <Link key={item.id} href={`/positions/${item.id}`}>
              <a>
                <GridItem>
                  <Title>{item.title}</Title>
                  <Location>
                    {item.location}, {parseJobType(item.type)}
                  </Location>
                </GridItem>
              </a>
            </Link>
          );
        })}
      </Grid>
      <HighlightedText>This is what we offer:</HighlightedText>
      <PerksGrid>
        {PERKS.map((item) => {
          return (
            <Perk key={item.id}>
              {item.icon}
              <PerkText>{item.text}</PerkText>
            </Perk>
          );
        })}
      </PerksGrid>
    </Layout>
  );
}

export async function getStaticProps() {
  const positions = (await getPositions()) || [];

  return {
    props: { positions },
  };
}

export default Positions;
