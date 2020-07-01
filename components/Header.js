import Link from "next/link";
import styled from "styled-components";
import { Menu as MenuIcon } from "react-feather";

import Container from "./Container";

import { BREAKPOINTS, HEADER_NAVIGATION } from "../lib/constants";

const StyledHeader = styled.header``;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Navigation = styled.nav`
  display: none;
  @media (min-width: ${BREAKPOINTS.LARGE_DEVICES}) {
    display: initial;
  }
`;

const StyledLink = styled.a`
  padding: 1rem;
  font-size: 1rem;
  color: #111;
  cursor: pointer;
`;

const StyledMenuIcon = styled(MenuIcon)`
  cursor: pointer;
  @media (min-width: ${BREAKPOINTS.LARGE_DEVICES}) {
    display: none;
  }
`;

function Header(props) {
  const { setMobileNav, mobileNav } = props;

  return (
    <StyledHeader>
      <StyledContainer>
        <Link href="/">
          <StyledLink>
            ministry of <br /> programming
          </StyledLink>
        </Link>
        <StyledMenuIcon size={20} onClick={() => setMobileNav(!mobileNav)} />
        <Navigation>
          {HEADER_NAVIGATION.map((item) => {
            return (
              <Link href={item.link} key={item.id}>
                <StyledLink>{item.label}</StyledLink>
              </Link>
            );
          })}
        </Navigation>
      </StyledContainer>
    </StyledHeader>
  );
}

export default Header;
