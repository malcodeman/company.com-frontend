import Link from "next/link";
import styled from "styled-components";

import navigation from "../public/navigation.json";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Navigation = styled.nav``;

const StyledLink = styled.a`
  padding: 1rem;
  font-size: 1rem;
  color: #111;
  cursor: pointer;
`;

function Header() {
  return (
    <StyledHeader>
      <Link href="/">
        <StyledLink>
          ministry of <br /> programming
        </StyledLink>
      </Link>
      <Navigation>
        {navigation.map((item) => {
          return (
            <Link href={item.link} key={item.id}>
              <StyledLink>{item.label}</StyledLink>
            </Link>
          );
        })}
      </Navigation>
    </StyledHeader>
  );
}

export default Header;
