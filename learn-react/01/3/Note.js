// export default function App() {
//   // JSX -> Javascript XML (확장 문법)
//   // JSX 는 HTML과 유사하다. (시멘틱 태그, 폼 태그)
//   // 1. 하나의 루트 요소를 반환해야 한다.
//   // 2. 모든 태그는 닫아줘야 한다.
//   // 3. 모든 태그의 속성은 카멜 케이스로 작성해야 한다.
//   // 3.1 예약된 속성명은 쓸 수 없다. class
//   // 4. 표현식을 출력할 수 있다. -> 중괄호
//   // 5. 인라인스타일은 객체로 표현해야 한다.
//   // 6. 주석

//   const name = "kyo";
//   const style = {
//     color: "pink",
//     fontSize: "50px",
//   };
//   return (
//     // 자바스크립트 주석
//     <>
//       {/* JSX 주석 */}
//       <h1 style={{ color: "red", fontSize: "50px" }}> 10 + 20 = {10 + 20} </h1>
//       <h1 className="title" style={style}>
//         {name}
//       </h1>
//       <br />
//       <label htmlFor="uname">userid</label>
//       <input id="uname" type="text" readOnly />
//     </>
//   );
// }

// // 컴포넌트
// // 함수에서 JSX를 반환하면 그게 곧 컴포넌트다.
// // rafce 자동완성 화살표함수
// // header라고 작성 금지. 태그로 인식

// export default function App() {
//   const sum = (n1: number, n2: number) => {
//     return n1 + n2; // -->  컴포넌트 아님. 이건 JS
//   };

//   return (
//     <>
//       <h1>App Component: {sum(10, 20)} </h1>
//     </>
//   );
// }

// // 컴포넌트를 작성하는 방법 JSX 연습문제
// // 파일 이름은 소문자여도 괜찮.
// import Header from "./components/Header";
// import Nav from "./components/Nav";
// import Main from "./components/Main";
// import Footer from "./components/Footer";

// // 글로벌 css
// // 어디에 import 하던지 화면에 랜더링되면 모든 컴포넌트에 적용 가능
// // -> 모든 컴포넌트에 영향을 준다.
// // 트리형태로 되어있느냐 아니냐 (컴포넌트)
// // 트리로 다 연결됐으면 영향을 받음

// export default function App() {
//   return (
//     <>
//       <h1 className="title">Test</h1>
//       <Header />
//       <Nav />
//       <Main />
//       <Footer />
//     </>
//   );
// }
