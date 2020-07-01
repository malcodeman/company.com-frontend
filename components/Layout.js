import styled from "styled-components";

import Header from "./Header";
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
      <main>{children}</main>
      <Footer />
    </Grid>
  );
}

export default Layout;
