// const App = () => {
//   // jsx -> JavaScript XML (확장 문법)
//   // JSX 는 HTML 과 유사하다.
//   // 1. 하나의 루트 요소를 반환해야 한다. <> -> 빈태그 (Fragment)
//   // 2. 모든 태그는 닫아줘야 한다.
//   // 3. 모든 태그의 속성 카멜케이스를 사용한다.
//   // 3.1 예약된 속성명은 쓸 수 없음 (class -> className) (for -> htmlFor)
//   // 4. 표현식을 출력할 수 있다. -> 중괄호
//   // 5. 인라인 스타일은 객체로 표현 해야 한다.
//   // 6. 주석은 중괄호 사이에 들어가야 한다. {/* 주석 */}
//   const name = "홍길동";
//   const style = { color: "red", fontSize: "20px" };
//   return (
//     <>
//       {/* 주석 */}
//       <h1 style={style}>10 + 20 = {10 + 20}</h1>
//       <h1 className="title">{name}</h1>
//       <br />
//       <label htmlFor="name">이름</label>
//       <input type="text" id="name" readOnly />
//     </>
//   );
// };
// export default App;

// 컴포넌트
// 함수에서 JSX 를 반환하면 그게 곧 컴포넌트다.

// import Heder from "./components/Heder";
// import Main from "./components/Main";
// import Footer from "./components/Footer";
// import NavBar from "./components/NavBar";
// export default function App() {
//   return (
//     <div>
//       <h1 className="title">내 웹사이트</h1>
//       <Heder />
//       <NavBar />
//       <Main />
//       <Footer />
//     </div>
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
