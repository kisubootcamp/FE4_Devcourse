// JSX -> Javascript XML (확장 문법)
// JSX는 HTML과 유사하다(시맨틱 태그, 폼 태그)
// 1. 하나의 루트 요소를 반환해야 한다. (React.Fragment, <빈태그>)
// 2. 모든 태그는 닫아줘야 된다.
// 3. 모든 태그의 속성은 카멜케이스로 작성해야 한다.
// 3.1 예약된 속성명은 쓸 수 없음. class
// 4. 표현식을 출력할 수 있다. -> 중괄호
// 5. 인라인 스타일은 객체로 표현해야 함
// 6. 주석 {/*  */}
// 컴포넌트
// 함수에서 JSX를 반환하면 그게 곧 컴포넌트다.
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
