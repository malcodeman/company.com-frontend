import styled from "styled-components";

const StyledHeading = styled.h1`
  font-size: 4rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  color: #111;
`;

function Heading(props) {
  const { children } = props;

  return <StyledHeading {...props}>{children}</StyledHeading>;
}

export default Heading;
