//컴포넌트: 함수에서 JSX를 반환하면 그게 곧 컴포넌트

import styled from 'styled-components';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Nav from './components/Nav';
import './css/index.css';

export default function App() {
  const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: #bf4f74;
  `;
  return (
    <>
      <Title>App Component</Title>
      <Header />
      <Nav />
      <Main />
      <Footer />
    </>
  );
}
