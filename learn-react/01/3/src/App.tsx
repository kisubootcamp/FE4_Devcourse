import styled from "styled-components";
// CSS-IN-JS
// CSS를 런타임에 동적으로 생성해서 적용하는 원리
//
const Title = styled.h1`
  font-size: 50px;
  color: red;
`; // 태그드 리터럴 템플릿(js 문법) : 이게 뭔지까지는 몰라도 됨

// export 한다면, 재사용도 가능함
export const Button = styled.button<{$primary?: boolean}>`
  /* Adapt the colors based on primary prop */
  background: ${(props) => (props.$primary ? "#BF4F74" : "white")};
  color: ${(props) => (props.$primary ? "white" : "#BF4F74")};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #bf4f74;
  border-radius: 3px;
`;

export default function App() {
  return (
    <>
      <Title>App Component</Title>
      <Button $primary>My Button</Button>
    </>
  );
}
