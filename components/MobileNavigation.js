import Link from "next/link";
import styled from "styled-components";
import { X as XIcon } from "react-feather";
import { useTranslation } from "react-i18next";

import { ParagraphLarge } from "./Typography";

import { BREAKPOINTS, MOBILE_NAVIGATION } from "../lib/constants";

const Wrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  text-align: right;
  height: 100vh;
  width: 100vw;
  padding: 1rem;
  background-color: #111111;
  @media (min-width: ${BREAKPOINTS.LARGE_DEVICES}) {
    display: none;
  }
`;

const XButton = styled.button`
  border: 0;
  background-color: initial;
  cursor: pointer;
  svg {
    color: #fff;
  }
  &:hover svg {
    color: ${(props) => props.theme.colors.accent};
  }
`;

const StyledParagraphLarge = styled(ParagraphLarge)`
  color: #fff;
  padding: 1rem;
  &:hover {
    color: ${(props) => props.theme.colors.accent};
  }
`;

function MobileNavigation(props) {
  const { setMobileNav } = props;
  const { t } = useTranslation();

  return (
    <Wrapper>
      <XButton onClick={() => setMobileNav(false)}>
        <XIcon size={20} />
      </XButton>
      {MOBILE_NAVIGATION.map((item) => {
        return (
          <Link key={item.id} href={item.link}>
            <a>
              <StyledParagraphLarge>{t(item.label)}</StyledParagraphLarge>
            </a>
          </Link>
        );
      })}
    </Wrapper>
  );
}

export default MobileNavigation;
