import Link from "next/link";
import styled from "styled-components";
import { Menu as MenuIcon } from "react-feather";

import Container from "./Container";
import { ParagraphMedium } from "./Typography";

import { BREAKPOINTS, HEADER_NAVIGATION } from "../lib/constants";

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LinkText = styled(ParagraphMedium)`
  padding: 1rem;
`;

const Navigation = styled.nav`
  display: none;
  @media (min-width: ${BREAKPOINTS.LARGE_DEVICES}) {
    display: flex;
  }
`;

const StyledMenuIcon = styled(MenuIcon)`
  cursor: pointer;
  color: ${(props) => props.theme.colors.contentPrimary};
  @media (min-width: ${BREAKPOINTS.LARGE_DEVICES}) {
    display: none;
  }
`;

function Header(props) {
  const { setMobileNav, mobileNav } = props;

  return (
    <header>
      <StyledContainer>
        <Link href="/">
          <a>
            <LinkText>
              ministry of <br /> programming
            </LinkText>
          </a>
        </Link>
        <StyledMenuIcon size={20} onClick={() => setMobileNav(!mobileNav)} />
        <Navigation>
          {HEADER_NAVIGATION.map((item) => {
            return (
              <Link href={item.link} key={item.id}>
                <a>
                  <LinkText>{item.label}</LinkText>
                </a>
              </Link>
            );
          })}
        </Navigation>
      </StyledContainer>
    </header>
  );
}

export default Header;
