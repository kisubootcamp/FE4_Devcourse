// export default function App() {
//   // JSX -> Javscript XML (확징문법)
//   //JSX는 HTML과 유사하다. (시맨틱 태그, 폼태그)
//   //1.하나의 루트 요소를 반환해야 한다. <> -> 빈태그
//   //2. 모든 태그는 닫아줘야한다.
//   //3. 모든 태그의 속성은 카멜케이스로 작성해야 한다.
//   //3.1 예약된 속성명은 쓸 수 없음, class
//   //4. 표현식을 출력할 수 있다. -> 중괄호
//   //5. 인라인스타일은 객체로 표현해야 한다.
//   //6. 주석

//   return (
//     <>
//       {/* 주석 */}
//       <h1>10 + 20 = {10 + 20}</h1>
//       <h1 style={{ color: "red", fontSize: "50px" }}>App Component</h1>
//       <br />
//       <label htmlFor="uname">userId</label>
//       <input id="uname" type="text" readOnly />
//     </>
//   );
// }

// 컴포넌트
// 함수에서 JSX를 반환하면 그게 컴포넌트다.
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Navigate from "./components/Navigate";

// export default function App() {
//   return (
//     <>
//       <Header></Header>
//       <Navigate></Navigate>
//       <Main></Main>
//       <Footer></Footer>
//     </>
//   );
// }

// 1 리액트 스타일링 방법
// 1.1 전통적인 방법으로 스타일링 하는 방법
// 1.1.1 인라인 스타일
const style = { color: "blue", fontSize: "18px" };
<h1 style={{ color: "red", textDecoration: "underline" }}></h1>;
<h1 style={style}></h1>;
// 1.1.2 글로벌(외부) 스타일
// import "./App.css"; => 트리 컴포넌트로 연결이 되어 있느냐가 중요,, 트리 컴포넌트로 연결 되어 있다면 영향을 받게 되어 있다.
<p className="title">글로벌 스타일</p>;

// 1.1.1 CSS 모듈 (+ classnames 패키지)

// 1.2 CSS-IN-JS로 방법으로 스타일링 하는 방법
// 💅
import styled from "styled-components";
export default function App() {
  const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: #bf4f74;
  `;

  return (
    <>
      <Title>App</Title>
    </>
  );
}

// 1.2.1 styled-components
// 1.2.2 emotion
// 1.2.3 Vailla Extract

// 1.3 TailwindCSS 방법으로 스타일링 하기
// 1.3.1 단독 유틸리티 퍼스트 CSS 라이브러리

// 1.4 그외
// 1.4.1 이미지 랜더링
// 1.4.2 폰트 적용하기
