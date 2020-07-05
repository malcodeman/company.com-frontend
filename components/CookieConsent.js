import styled from "styled-components";
import { useTranslation } from "react-i18next";

import { ParagraphMedium } from "./Typography";
import { Button } from "./button";

const Wrapper = styled.div`
  padding: 1rem;
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  max-width: 20rem;
  background-color: ${(props) => props.theme.colors.backgroundSecondary};
`;

const Emoji = styled.span`
  display: block;
  margin-bottom: 1rem;
`;

const StyledParagraph = styled(ParagraphMedium)`
  margin-bottom: 1rem;
`;

function CookieConsent(props) {
  const { t } = useTranslation();
  const { setCookieConsent } = props;

  return (
    <Wrapper>
      <Emoji role="img" aria-label="emoji">
        🍪
      </Emoji>
      <StyledParagraph>
        {t("This website uses cookies to enhance the user experience.")}
      </StyledParagraph>
      <Button onClick={() => setCookieConsent(true)}>
        {t("Accept & continue")}
      </Button>
    </Wrapper>
  );
}

export default CookieConsent;
