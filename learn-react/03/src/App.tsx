import styled from "styled-components";
//styled-components utilises tagged template literals to style your components.
// CSS를 런타임에 동적으로 생성해서 적용하는 원리
//CSS-IN_JS
// tagged literal template
const Title = styled.h1`
  font-size: 50px;
  color: red;
`;
// 동적으로 h1 생성하면서 스타일 입힘
const Button = styled.button<{ $primary?: boolean }>`
  /* Adapt the colors based on primary prop */
  background: ${(props) => (props.$primary ? "#BF4F74" : "white")};
  color: ${(props) => (props.$primary ? "white" : "#BF4F74")};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #bf4f74;
  border-radius: 3px;π
`;

export default function App() {
  return (
    <>
      <Title>App Component</Title>
      <Button $primary>My Button</Button>
    </>
  );
}
