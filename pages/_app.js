import { ThemeProvider } from "styled-components";
import dynamic from "next/dynamic";
import { usePreferredTheme } from "malhooks";

import "../i18n/init";

import "react-typed/dist/animatedCursor.css";

import GlobalStyle from "../styles/globalStyle";
import themes from "../styles/themes";

function App(props) {
  const { Component, pageProps } = props;
  const darkTheme = usePreferredTheme();
  const theme = darkTheme ? themes.dark : themes.light;

  return (
    <>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
      <GlobalStyle />
    </>
  );
}

export default dynamic(() => Promise.resolve(App), {
  ssr: false,
});
