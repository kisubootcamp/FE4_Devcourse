import Header from "./components/Header";
import Main from "./components/Main";

// 함수를 소문자 footer로 만들경우 
// html 태그로 와 구분이 안되기떄문에 첫글자는 항상 대문자
function Footer(){
  return (
    <>
      <h1>Footer</h1>
    </>
  );
}

export default function App () {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}
