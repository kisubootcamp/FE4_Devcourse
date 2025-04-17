import styled from "styled-components";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Nav from "./components/Nav";

export default function App() {
  const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: #bf4f74;
  `;
  return (
    <>
      <Header />
      <Title>App Component</Title>
      <Main />
      <Nav />
      <Footer />
    </>
  );
}
