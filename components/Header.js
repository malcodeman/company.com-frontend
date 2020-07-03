import Link from "next/link";
import styled from "styled-components";
import { Menu as MenuIcon } from "react-feather";
import { StatefulPopover, PLACEMENT } from "@malcodeman/react-popover";
import {
  ChevronDown as ChevronDownIcon,
  Globe as GlobeIcon,
} from "react-feather";
import { useTranslation } from "react-i18next";

import Container from "./Container";
import { ParagraphMedium, ParagraphSmall } from "./Typography";

import { BREAKPOINTS, HEADER_NAVIGATION, LANGUAGES } from "../lib/constants";

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

const PopoverButton = styled.button`
  border: 0;
  background-color: transparent;
  display: flex;
  align-items: center;
  cursor: pointer;
  svg {
    color: ${(props) => props.theme.colors.contentPrimary};
  }
`;

const MenuList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding-left: 0;
  padding: 0.5rem 1rem;
  background-color: ${(props) => props.theme.colors.backgroundSecondary};
`;

const MenuListItem = styled.li`
  padding: 0.5rem;
  cursor: pointer;
`;

function Header(props) {
  const { setMobileNav, mobileNav } = props;
  const { i18n } = useTranslation();
  const modifiers = React.useMemo(
    () => [
      {
        name: "sameWidth",
        enabled: true,
        fn: ({ state }) => {
          state.styles.popper.width = `${state.rects.reference.width}px`;
        },
        phase: "beforeWrite",
        requires: ["computeStyles"],
        effect({ state }) {
          state.elements.popper.style.width = `${state.elements.reference.offsetWidth}px`;
        },
      },
    ],
    []
  );

  function changeLanguage(lng) {
    i18n.changeLanguage(lng);
  }

  function renderLanguageLabel(lng) {
    switch (lng) {
      case LANGUAGES.english.code:
      default:
        return LANGUAGES.english.label;
      case LANGUAGES.swedish.code:
        return LANGUAGES.swedish.label;
      case LANGUAGES.bosnian.code:
        return LANGUAGES.bosnian.label;
    }
  }

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
          <StatefulPopover
            placement={PLACEMENT.BOTTOM_END}
            modifiers={modifiers}
            content={() => (
              <MenuList>
                {Object.values(LANGUAGES).map((item) => {
                  return (
                    <MenuListItem
                      key={item.code}
                      onClick={() => changeLanguage(item.code)}
                    >
                      <ParagraphSmall>{item.label}</ParagraphSmall>
                    </MenuListItem>
                  );
                })}
              </MenuList>
            )}
          >
            <PopoverButton>
              <GlobeIcon size={20} />
              <LinkText>{renderLanguageLabel(i18n.language)}</LinkText>
              <ChevronDownIcon size={20} />
            </PopoverButton>
          </StatefulPopover>
        </Navigation>
      </StyledContainer>
    </header>
  );
}

export default Header;
