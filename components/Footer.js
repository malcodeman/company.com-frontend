import Link from "next/link";
import styled from "styled-components";
import {
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  Linkedin as LinkedinIcon,
  Instagram as InstagramIcon,
} from "react-feather";

import Container from "./Container";

import navigation from "../public/footer-navigation.json";

const StyledFooter = styled.footer`
  background-color: #111111;
  padding: 2rem;
`;

const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Navigation = styled.nav`
  display: none;
  margin-bottom: 2rem;
  @media (min-width: 768px) {
    display: block;
  }
`;

const StyledLink = styled.a`
  padding: 1rem;
  font-size: 1rem;
  color: #fff;
  cursor: pointer;
  &:hover {
    color: #ee2633;
  }
`;

const SocialLinks = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
  margin-bottom: 2rem;
  @media (min-width: 576px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

const SocialLink = styled.a`
  display: flex;
  svg {
    color: #888;
    transition: color 0.2s ease;
  }
  &:hover svg {
    color: #fff;
  }
`;

const EmailLink = styled.a`
  font-size: 1rem;
  color: #ee2633;
  margin-bottom: 1rem;
  cursor: pointer;
  transition: color 0.2s ease;
  &:hover {
    color: #fff;
  }
`;

const CopyrightText = styled.span`
  color: #777;
  font-size: 0.8rem;
`;

const SOCIAL_LINKS = [
  {
    url: "https://www.facebook.com/ministryofprogramming",
    icon: <FacebookIcon size={20} />,
  },
  {
    url: "https://twitter.com/MOPsocial",
    icon: <TwitterIcon size={20} />,
  },
  {
    url: "https://www.linkedin.com/company/ministryofprogramming",
    icon: <LinkedinIcon size={20} />,
  },
  {
    url: "https://www.instagram.com/ministryofprogramming",
    icon: <InstagramIcon size={20} />,
  },
];

const EMAIL = "hello@mop.ba";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <StyledFooter>
      <StyledContainer>
        <Navigation>
          {navigation.map((item) => {
            return (
              <Link href={item.link} key={item.id}>
                <StyledLink>{item.label}</StyledLink>
              </Link>
            );
          })}
        </Navigation>
        <SocialLinks>
          {SOCIAL_LINKS.map((item) => {
            return (
              <SocialLink
                key={item.url}
                href={item.url}
                target="_blank"
                rel="noopener"
              >
                {item.icon}
              </SocialLink>
            );
          })}
        </SocialLinks>
        <EmailLink href={`mailto:${EMAIL}`}>hello@mop.ba</EmailLink>
        <CopyrightText>© {year} Ministry of Programming</CopyrightText>
      </StyledContainer>
    </StyledFooter>
  );
}

export default Footer;
