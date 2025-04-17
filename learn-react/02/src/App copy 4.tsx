// header, nav, main, footer 컴포넌트로 분리하여서 렌더링 하도록 코드를 수정

import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Nav from "./components/Nav";

export default function App() {
  return (
    <div>
      <h1 className="title">Test</h1>
      <Header />
      <Nav />
      <Main />
      <Footer />
    </div>
  );
}
