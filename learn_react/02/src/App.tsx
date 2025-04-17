// import Footer from "./components/Footer.tsx";
// import Header from "./components/Header.tsx";
// import Main from "./components/Main.tsx";
// import Nav from "./components/Nav.tsx";

// export default function App() {
//   //   JSX
//   //   javascript + XML = 확장 문법
//   //   JSX는 html과 굉장히 유사하다

//   //   특징
//   //   1. JSX는 하나의 루트 요소만 반환해야 한다. <> -> 빈태그
//   //   2. 모든 태그는 닫아줘야 한다.
//   //   3. 모든 태그의 속성은 카멜 케이스로 사용해야 한다.
//   //      3.1 예약된 속성명은 쓸 수 없음
//   //   4. 표현식은 중괄호 안에서 사용할 수 있다.{}
//   //   5. 인라인 스타일은 객체로 작성한다.
//   //   6. 주석
//   const name = "정쥬";
//   const style = {
//     color: "pink",
//     fontSize: "40px",
//   };

//   // 컴포넌트
//   // 함수에서 JSX를 반환하면 그게 곧 컴포넌트다.
//   const Func = () => {
//     return (
//       <>
//         <div>Header</div>
//       </>
//     );
//   };

//   // 함수
//   const sum = (a: number, b: number): number => {
//     return a + b;
//   };

//   return (
//     <>
//       {/* 이것이 바로 컴포넌트 */}
//       <Header />
//       <Nav />
//       <Main />
//       <Footer />

//       {/* ================================================== */}
//       <p>------------------------------------------------------</p>
//       <h1 className="title">
//         App Component<Func></Func>
//       </h1>
//       <h1 style={style}>App Component</h1>
//       <label htmlFor="uname">{name} : </label>
//       <input id="uname" type="text" readOnly />
//       {/* ================================================== */}
//       <p>------------------------------------------------------</p>
//       {sum(3, 3)}
//     </>
//   );
// }

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
