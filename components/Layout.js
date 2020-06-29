import Header from "./Header";
import Container from "./Container";

function Layout(props) {
  const { children } = props;

  return (
    <>
      <Container>
        <Header />
      </Container>
      <main>
        <Container>{children}</Container>
      </main>
    </>
  );
}

export default Layout;
