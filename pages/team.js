import React from "react";
import styled from "styled-components";
import {
  GitHub as GithubIcon,
  Linkedin as LinkedinIcon,
  Link as LinkIcon,
  Twitter as TwitterIcon,
  Facebook as FacebookIcon,
} from "react-feather";
import psl from "psl";
import { useTranslation } from "react-i18next";

import Container from "../components/Container";
import Layout from "../components/Layout";
import {
  ParagraphLarge,
  Display2,
  ParagraphMedium,
  ParagraphSmall,
} from "../components/Typography";

import { getEmployees } from "../lib/api";
import { NEXT_PUBLIC_STRAPI_API_URL, EMPLOYE_LINKS } from "../lib/constants";
import shuffle from "../utils/shuffle";

const DisplayWrapper = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const Subdisplay = styled(ParagraphLarge)`
  color: ${(props) => props.theme.colors.contentSecondary};
`;

const Grid = styled.div`
  display: grid;
  grid-template-rows: 100vw;
  grid-template-columns: 1fr;
  @media (min-width: 576px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: calc(100vw / 2);
  }
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: calc(100vw / 3);
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: calc(1200px / 4);
  }
`;

const ProfileAlter = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  transition: opacity 0.2s ease;
`;

const Footer = styled.div`
  color: #fff;
  padding: 1rem;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  opacity: 0;
`;

const GridItem = styled.div`
  position: relative;
  &:hover ${ProfileAlter} {
    opacity: 1;
  }
  &:hover ${Footer} {
    opacity: 1;
  }
`;

const Profile = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const NameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${ParagraphMedium} {
    color: #fff;
  }
  ${ParagraphSmall} {
    color: #fff;
  }
`;

const Name = styled.span`
  font-size: 1rem;
  margin-bottom: 0.2rem;
`;

const Description = styled.span`
  font-size: 0.8rem;
`;

const Links = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 0.4rem;
`;

const Link = styled.a`
  display: flex;
`;

function Team(props) {
  const { employees } = props;
  const { t } = useTranslation();

  function handleLinkIcon(url) {
    const domain = psl.parse(new URL(url).hostname).sld;

    switch (domain) {
      case EMPLOYE_LINKS.twitter:
        return <TwitterIcon size={20} color={"#fff"} />;
      case EMPLOYE_LINKS.linkedin:
        return <LinkedinIcon size={20} color={"#fff"} />;
      case EMPLOYE_LINKS.github:
        return <GithubIcon size={20} color={"#fff"} />;
      case EMPLOYE_LINKS.facebook:
        return <FacebookIcon size={20} color={"#fff"} />;
      default:
        return <LinkIcon size={20} color={"#fff"} />;
    }
  }

  return (
    <Layout>
      <Container>
        <DisplayWrapper>
          <Display2>{t("Meet our people")}</Display2>
          <Subdisplay>
            {t(
              "We are a group of multi-skilled individuals who are entrepreneurial by nature and live to make digital products and services that people love to use."
            )}
          </Subdisplay>
        </DisplayWrapper>
        <Grid>
          {employees &&
            shuffle(employees).map((item) => {
              return (
                <GridItem key={item.id}>
                  <Profile
                    src={`${NEXT_PUBLIC_STRAPI_API_URL}${item.profile.url}`}
                  />
                  <ProfileAlter
                    src={`${NEXT_PUBLIC_STRAPI_API_URL}${item.profile_alter.url}`}
                  />
                  <Footer>
                    <NameWrapper>
                      <ParagraphMedium>{item.name}</ParagraphMedium>
                      <ParagraphSmall>{item.description}</ParagraphSmall>
                    </NameWrapper>
                    <Links>
                      {item.links &&
                        item.links.map((link) => {
                          return (
                            <Link
                              key={link.url}
                              href={link.url}
                              target="_blank"
                              rel="noopener"
                            >
                              {handleLinkIcon(link.url)}
                            </Link>
                          );
                        })}
                    </Links>
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
  const employees = (await getEmployees()) || [];

  return {
    props: { employees },
  };
}

export default Team;
