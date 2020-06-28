import GlobalStyle from "../styles/globalStyle";

function App(props) {
  const { Component, pageProps } = props;

  return (
    <>
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  );
}

export default App;
