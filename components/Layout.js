import styled from "styled-components";

import Header from "./Header";
import Container from "./Container";
import Footer from "./Footer";

const Grid = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
  grid-gap: 2rem;
`;

function Layout(props) {
  const { children } = props;

  return (
    <Grid>
      <Header />
      <main>
        <Container>{children}</Container>
      </main>
      <Footer />
    </Grid>
  );
}

export default Layout;
