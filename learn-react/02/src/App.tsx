import Header from "./components/Header"; // "./components/Header.tsx"에서 확장자 생략 가능
import Nav from "./components/Nav";
import Main from "./components/Main";
import Footer from "./components/Footer";
import styled from "styled-components";

export default function App() {
  const Title = styled.h1 `
    font-size: 1.5rem;
    text-align: center;
    color: #bf4f74
  `
  // 함수에서 JSX를 반환해야 컴포넌트라고 볼 수 있다.
  // 여기에 일반 함수도 작성할 수 있다.
  return (
    <>
      <Title>App Component</Title>
      <Header />
      <Nav />
      <Main />
      <Footer />
    </>
  )
}