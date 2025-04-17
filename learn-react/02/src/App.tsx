// import React from "react";
// JSX
// JavaScript + XML - 확장 문법
// JSX는 HTML과 굉장히 유사하다.

import styled from "styled-components";

// !!! 하나의 루트 요소만 반환해야 한다. !!!
// 모든 태그는 닫아줘야 한다. 빈 태그(br, link 등)도 닫아줘야한다.
// 태그의 속성은 카멜 케이스로 사용해야 한다.
// 표현식은 중괄호 안에서 사용할 수 있다.
// 인라인 스타일은 객체로 작성
// 모든 태그의 속성은 카멜 케이스로 작성해야 한다.
// - 예약된 속성명은 사용할 수 없다.
// HMR(Hot Module Reload)으로 내용을 수정할 때 마다 변경사항이 자동으로 적용된다. 수동으로 새로고침을 해야 할 때도 있다.

// export default function App() {
//   const name = "lee";
//   const style = { color: "red", fontSize: "50px" };

//   return (
//     <React.Fragment>
//       {/* 주석 */}
//       {/* 하나의 루트 요소만 받기 위해 React.Fragment를 사용. 단, React를 import해야 한다. */}
//       <h1 style={{ color: "red", fontSize: "50px" }}>App Component</h1>
//       <h1 style={{ style }}>App Component</h1>
//       <br />
//       <input type="text" readOnly />
//     </React.Fragment>
//   );
//
// }
// export default function App() {
//   return (
//     // 중괄호: JSX에서만
//     // 함수에서 JSX를 반환하면 그것이 곧 컴포넌트임
//     <>
//       <h1>App Component</h1>
//     </>
//   );
// }

// const App = () => {
//   // 화살표 함수에서는 JSX문법을 즉시 반환
//   return (
//     <>
//       <h1>App Component</h1>
//     </>
//   );
// };

// export default function App() {
//   const sum = (n1: number, n2: number) => {
//     return n1 + n2;
// return 은 const 내부에서
//<></>가 붙어있어야 JSX이므로 sum은 JSX를 리턴하는것이 아님
//   };

//   return (
//     <>
//       <h1>App Component: {sum(10, 20)}</h1>
//     </>
//   );
// }

// JSX를 반환하지 않기 때문에 sum은 컴포넌트가 아님

// import { Header } from "./components/Header";
// import { Main } from "./components/Main";

// function Footer() {
//   return (
//     <>
//       <footer>Footer</footer>
//     </>
//   );
// } // 컴포넌트임
// // Footer를 소문자로 적으면 렌더링이 되지 않는다.

// export default function App() {
//   return (
//     <>
//       <Header />
//       <Main />
//       <Footer />
//     </>
//   ); // 소괄호는 없어도 되지만, 코드 포매팅(가독성)을 위해서 붙인다.
// }

// 일반적으로 컴포넌트는 하나의 파일에 작성한다.
// 함수에 export를 붙이면 다른 곳에서 Header 등을 사용할 수 있지만, 유지보수를 하기가 어려워진다.
// 리액트에서 App 컴포넌트를 제외한 다른 컴포넌트는 components 폴더에 만드는 것이 일반적이다.
// components 폴더는 반드시 src 폴더 내부에 있어야 한다.
// 컴포넌트를 소문자로 적으면 HTML의 태그와 구분을 못하기 때문에 JSX 문법 설계 상 컴포넌트는 대문자로 시작한다
// 여러 개를 반환할 때는 반드시 하나로 묶어주어야 한다.

// import Header from "./components/Header";
// import Main from "./components/Main";
// import Footer from "./components/Footer";
// import Nav from "./components/Nav";
// // import "./App.css";
// //

// export default function App() {
//   return (
//     <>
//       <h1 className="title">Test</h1>
//       {/* className: JSX에서 html의 class 대체 속성 */}
//       <Header />
//       <Nav />
//       <Main />
//       <Footer />
//     </>
//   );
// }

export default function App() {
  const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: #bf4f74;
  `;
  return (
    <>
      <Title>App Component</Title>
    </>
  );
}
// 파일명이 소문자여도 import를 대문자로 하면 문제 없다.
// 불러올 파일명 맨 끝에서 커서를 두고 ctrl + space로 import 루트를 자동완성할 수 있다.
// 글로벌 스타일 방법은 컴포넌트에 상관 없이, css import를 main이나 app어디에 하던 상관 없이 화면에 렌더링되는 컴포넌트에 영향을 준다.

// 컴포넌트에 종속되는 CSS 작성 방법: CSS모듈
