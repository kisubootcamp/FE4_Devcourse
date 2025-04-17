// 컴포넌트
// 함수에서 JSX를 반환하면 그게 곧 컴포넌트다.
// rafce, rfce
// 컴포넌트의 함수 정의할 땐 함수 선언문, 내부에서 추가적인 함수 필요할 땐 화살표 함수로 -> 가독성이 좋아서

/*
export default function App() {
  const sum = (n1: number, n2: number): number => { // 컴포넌트 아님, JSX 를 반환하지 않아서
  // ...
  return n1 + n2;
  }; // -> sum에 오류는 왜 나지..? 호출 안해서
  return (
    <>
    <h1>App Component: {sum(10, 20)}</h1>
    </>
    );
    }
    */

/*
   import Header from "./components/Header.tsx";
   import Main from "./components/main.tsx";
   import Footer from "./components/footer.tsx";
   
   export default function App() {
    return (
      <>
      <Header />
      <Main />
      <Footer />
      </>
      );
      }
      */

/*
     // 파일의 이름은 소문자로 시작해도 상관없음, 렌더링할 때만 대문자로 작성하면 됨
     // 그럼에도 파일명을 대문자로 시작하게 하는건? 불러오는 식별자와 파일명을 일치시키면 나중에 파일을 찾기 쉬움 (일종의 관례임)
     import HeaderEx from "./components/HeaderEx";
     import NavEx from "./components/NavEx";
     import MainEx from "./components/MainEx";
     import FooterEx from "./components/FooterEx";
     
     export default function App() {
      return (
        <div>
        <h1 className='title'>TEST</h1>
        <HeaderEx />
        <NavEx />
        <MainEx />
        <FooterEx />
        </div>
        );
        }
        */

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
