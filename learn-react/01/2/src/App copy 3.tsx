// 컴포넌트
// 함수에서 JSX를 반환하면 그게 곧 컴포넌트다.

import Header from "./components/Header";
import Main from "./components/Main";
import AFooter from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <Main />
      <AFooter />
    </>
  );
}
