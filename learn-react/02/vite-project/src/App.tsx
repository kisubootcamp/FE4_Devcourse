import Header from "./components/Header";
import Main from "./components/Main";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

//함수에서 jsx를 반환하면 컴포넌트이다.
//컴포넌트는 파스칼 케이스로 작성 해야한다.
export default function App() {
  return (
    <>
      <Header />
      <Nav />
      <Main />
      <Footer />
    </>
  );
}

//리액트에서 컴포넌트는 돔 트리와 비슷한 컴포넌트 트리 구조를 가진다.
//컴포넌트 트리는 형제 요소는 없고 부모와 자식 관계만 가진다.
