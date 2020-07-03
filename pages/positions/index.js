import Link from "next/link";
import styled from "styled-components";
import { nanoid } from "nanoid";
import { useTranslation } from "react-i18next";

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
import { ParagraphLarge, Display2 } from "../../components/Typography";

import { getPositions } from "../../lib/api";

import { BREAKPOINTS } from "../../lib/constants";

const DisplayWrapper = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const Subdisplay = styled(ParagraphLarge)`
  color: ${(props) => props.theme.colors.contentSecondary};
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
  cursor: pointer;
  border-bottom: 2px solid ${(props) => props.theme.colors.border};
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
    text: "Flex time! Work from home or the café",
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
  const { t } = useTranslation();

  function parseJobType(type) {
    switch (type) {
      default:
      case JOB_TYPES.full_time:
        return t("Full-time");
      case JOB_TYPES.part_time:
        return t("Part-time");
      case JOB_TYPES.internship:
        return t("Internship");
      case JOB_TYPES.volunteer:
        return t("Volunteer");
      case JOB_TYPES.contract:
        return t("Contract");
    }
  }

  return (
    <Layout>
      <Container>
        <DisplayWrapper>
          <Display2>{t("Join our team")}</Display2>
          <Subdisplay>
            {t(
              "At MOP we welcome Hackers, Designers, Product Strategists and all other creative people that want to build products that have significant impact!"
            )}{" "}
            {t("Please send your resume to")}{" "}
            <EmailLink href={`mailto:${EMAIL}`}>careers@mop.ba</EmailLink>
          </Subdisplay>
        </DisplayWrapper>
        <HighlightedText>{t("We are searching for")}:</HighlightedText>
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
        <HighlightedText>{t("This is what we offer")}:</HighlightedText>
        <PerksGrid>
          {PERKS.map((item) => {
            return (
              <Perk key={item.id}>
                {item.icon}
                <ParagraphLarge>{t(item.text)}</ParagraphLarge>
              </Perk>
            );
          })}
        </PerksGrid>
      </Container>
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
