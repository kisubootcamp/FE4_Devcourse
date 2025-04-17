import styled from "styled-components";

// CSS-IN-JS
// CSS를 런타임에 동적으로 생성해서 적용하는 원리
// document.createElement('style')

// 조건부 스타일을 입력하기 쉬움
// styled-component 개발은 멈추고, 유지보수만 이어갈 예정
// https://opencollective.com/styled-components/updates/thank-you

const Title = styled.h1`
  font-size: 50px;
  color: red;
`;

export default function App() {
  return (
    <>
      <Title>App Component</Title>
    </>
  );
}
