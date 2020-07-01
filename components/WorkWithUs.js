import Link from "next/link";
import styled from "styled-components";

import { HeadingXLarge, ParagraphLarge } from "./Typography";

const Wrapper = styled.div`
  text-align: center;
`;

const StyledHeading = styled(HeadingXLarge)`
  color: ${(props) => props.theme.colors.accent};
`;

function WorkWithUs(props) {
  const { question } = props;

  return (
    <Wrapper>
      <ParagraphLarge>{question || "Ready to get started?"}</ParagraphLarge>
      <Link href="/contact">
        <a>
          <StyledHeading>Work with us</StyledHeading>
        </a>
      </Link>
    </Wrapper>
  );
}

export default WorkWithUs;
