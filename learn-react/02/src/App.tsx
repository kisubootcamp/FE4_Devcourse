import styled from "styled-components";

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

// import Header from "./components/AssignHeader.tsx";
// import Nav from "./components/AssignNav.tsx";
// import Main from "./components/AssignMain.tsx";
// import Footer from "./components/AssignFooter.tsx";

// export default function App() {
//   return (
//     <>
//       <Header />
//       <Main />
//       <Nav />
//       <Footer />
//     </>
//   );
// }

// import Header from "./components/Header.tsx";
// import Main from "./components/Main.tsx";
// // import Footer from "./components/Footer.tsx";
// //

// function Footer() {
//   return (
//     <>
//       <footer>Footer</footer>
//     </>
//   );
// }

// export default function App() {
//   return (
//     <>
//       <Header />
//       <Main />
//       <Footer />
//     </>
//   );
// }

// //export default 는 관례

// // 컴포넌트 NOTE
// // {함수에서 JSX를 반환하면 그게 곧 컴포넌트
// // 예전엔 화살표 함수 많이 썻는데 요즘은 선언문 방식으로 사용 많이 함

// // const App = () => (
// //   <>
// //     <h1>App Component</h1>
// //   </>
// // );
// // export default App;

// // const App = () => {
// //   const name = "hello";
// //   return (
// //     <>
// //       <h1>App Component : {name}</h1>
// //     </>
// //   );
// // };

// // export default App(){}

// //NOTE JSX 가 아닌 문법으로 작성했을 때
// // import React from "react";

// // export default function App() {
// //   return React.createElement(
// //     "div",
// //     null,
// //     React.createElement("h1", null, "App Component")
// //   );
// // }

// //NOTE react 기본 이론
// // // import React from "react";
// // // React 모듈을 불러와서 React.Fragment 사용
// // // react 모듈 대신 <></>빈태그 사용 가능, 실무에서는 빈태그 더 많이 사용

// // export default function App() {
// //   // JSX -> Javascript XML (확장 문법)
// //   // JSX 는 HTML 과 유사하다. (시맨틱태그, 폼태그)
// //   // 1. 하나의 루트요소 반환
// //   // React.Fragment
// //   // 2. 모든 태그는 닫아야함 (html -> <br> , JSX -> <br/>)
// //   // 3. 모든 태그의 속성은 카멜케이스로 작성(2개 단어 이상이 붙여진 이름)
// //   // 3.1 예약된 속성명은 쓸 수 없음 (자바스크립트에서 예약된 키워드),
// //   // 3.1.1 class -> className, for->htmlFor .. (외워지게 됨)
// //   // 4. 표현식을 출력할 수 있다. -> 중괄호 like 템플릿리터럴
// //   // 5. 인라인 스타일은 객체로 표현해야 함
// //   // 6. 주석      {/* */}

//   const name = "sucoding";
//   const style = {
//     color: "red",
//     fontSize: "50px",
//   };
//   return (
//     <>
//       {/* 주석 */}
//       <h1 style={style}> 10 + 20 = {10 + 20}</h1>
//       <h1 style={{ color: "red" }} className="title">
//         {name}
//       </h1>
//       <br />
//       <label htmlFor="uname">userId</label>
//       <input id="uname" type="text" readOnly />
//     </>
//   );
// }
