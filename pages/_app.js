import { ThemeProvider } from "styled-components";
import { usePreferredTheme } from "malhooks";

import "../i18n/init";

import "react-typed/dist/animatedCursor.css";

import GlobalStyle from "../styles/globalStyle";
import themes from "../styles/themes";

function App(props) {
  const { Component, pageProps } = props;
  const darkTheme = usePreferredTheme();
  const theme = darkTheme ? themes.light : themes.light;

  return (
    <>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
      <GlobalStyle />
    </>
  );
}

export default App;
