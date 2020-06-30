import { ThemeProvider } from "styled-components";

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
