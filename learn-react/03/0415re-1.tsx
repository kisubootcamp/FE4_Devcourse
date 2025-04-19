// JSX->Javascript XML(확장 문법)
// JSX는 HTML과 유사하다.(시맨틱 태그,폼 태그)
// 1. 하나의 루트 요소를 반환해야 한다.(나란하게 형제요소 두개이상 반환 불가) <>-> 빈태그
// 2. 모든 태그는 닫아줘야한다.
// 3. 모든 태그의 속성은 카멜케이스로 작성해야 한다.(ex. className)
// H.M.R => 새로고침하지 않아도 실시간으로 브라우저에 수정사항 자동적용됨
// 3.1 예약된 속성명은 쓸 수 없음, class,label의 for
// 4. 표현식을 출력할 수 있다. -> 중괄호로 자바스크립트 연산 사용가능
// 5. 인라인스타일은 객체로 표현해야함 => 인라인 스타일: 스타일을 직접 태그 안에 써주는 방식
// 6. 주석 (ctrl+/)

//JSX 표현
//default->파일명과 동일하게 export하기(main.tsx 에서 <App/> 이 부분 의미)

// export default function App() {
// const name = "sucoding";
//   const style = {
//     color: "red",
//     fontSize: "50px",
//    };
//    //자바스크립트 주석
//   return (
//     <>
//       {/* JSX 주석 */}
//       <h1 className="title" style={style}> //인라인 스타일
//         {name} //자바스크립트 표현식
//       </h1>
//       <br />
//       <label htmlFor="uname">userid</label>
//       <input id="uname" type="text" readOnly />
//     </> //다른 태그로는 따로 묶고 싶지 않을때 => 브라우저에서 확인해보면 묶인 태그 보이지 않음
//     //<>는 <React.Fragment>의 shortcut
//   );
// }

// 컴포넌트
// 함수에서 JSX를 반환하면 그게 곧 컴포넌트다.
//컴포넌트 트리에서는 부모,자식관계 중심

// import Header from "./components/Header"; //파일 이름이 소문자여도 상관없음
// import Main from "./components/Main";
// import Footer from "./components/Footer";
// export default function App() {
//   return (
//     <>
//       <Header />
//       <Main />
//       <Footer />
//       {/* 첫글자 소문자로 쓰면 html과 구분x */}
//     </>
//   );
// }

//rafce 단축키 쓰면 화살표함수로 작성해줌
//rfc는 함수표현식

// 화살표 함수도 가능
// const App=()=>(
//   //jsx를 즉시 반환 (return 생략한 형태여서 ()사용)
//   <>
//     <h1>Component</h1>
//   </>
// );
// const App=()=>{
//   return(
//     <>
//       <h1>Component</h1>
//     </>
//   );
// };
