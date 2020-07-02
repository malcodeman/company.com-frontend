import React from "react";
import styled from "styled-components";

import Header from "./Header";
import Footer from "./Footer";
import MobileNavigation from "./MobileNavigation";

const Grid = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
  grid-gap: 2rem;
  background-color: ${(props) => props.theme.colors.backgroundPrimary};
`;

function Layout(props) {
  const [mobileNav, setMobileNav] = React.useState(false);
  const { children } = props;

  return (
    <>
      <Grid>
        <Header mobileNav={mobileNav} setMobileNav={setMobileNav} />
        <main>{children}</main>
        <Footer />
      </Grid>
      {mobileNav && <MobileNavigation setMobileNav={setMobileNav} />}
    </>
  );
}

export default Layout;
