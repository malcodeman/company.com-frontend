import { ThemeProvider } from "styled-components";

import "../i18n/init";

import "react-typed/dist/animatedCursor.css";

import GlobalStyle from "../styles/globalStyle";
import themes from "../styles/themes";

function App(props) {
  const { Component, pageProps } = props;

  return (
    <>
      <ThemeProvider theme={themes.light}>
        <Component {...pageProps} />
      </ThemeProvider>
      <GlobalStyle />
    </>
  );
}

export default App;
