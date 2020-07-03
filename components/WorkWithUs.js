import Link from "next/link";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

import { HeadingXLarge, ParagraphLarge } from "./Typography";

const Wrapper = styled.div`
  text-align: center;
`;

const StyledHeading = styled(HeadingXLarge)`
  color: ${(props) => props.theme.colors.accent};
`;

function WorkWithUs(props) {
  const { question } = props;
  const { t } = useTranslation();

  return (
    <Wrapper>
      <ParagraphLarge>{question || t("Ready to get started?")}</ParagraphLarge>
      <Link href="/contact">
        <a>
          <StyledHeading>{t("Work with us")}</StyledHeading>
        </a>
      </Link>
    </Wrapper>
  );
}

export default WorkWithUs;
