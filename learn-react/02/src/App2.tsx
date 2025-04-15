// 컴포넌트
// 함수에서 JSX를 반환하면 그게 곧 컴포넌트다.
// rafce(react Arrow function Component export)

// 함수에서 return 안(jsx)을 반환하기 때문에 얘는 컴포넌트이다.
// function Header() {
//   return (
//     <>
//       <header>Header</header>
//     </>
//   );
// }

import Header from './components/Header.tsx';
import Main from './components/Main.tsx';
import Nav from './components/Nav.tsx';
import Footer from './components/Footer.tsx';
import './App.css';

export default function App() {
  return (
    <>
      <h1 className="title">Test</h1>
      <Header />
      <Nav />
      <Main />
      <Footer />
    </>
  );
}
