import styled from "styled-components";

const StyledContainer = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  padding: 0 1rem;
`;

function Container(props) {
  const { children } = props;

  return <StyledContainer {...props}>{children}</StyledContainer>;
}

export default Container;
