import styled from "styled-components";

// css-in-js 방식
// css 를 런타입에 동적으로 생성해서 적용하는 원리
//
const Title = styled.h1`
  color: red;
  text-decoration: underline;
`; // 태그드 리터럴 탬플릿
// styled components 는 렌더링 되는 함수 밖에다 선언 하는게 좋다.
// 안쪽에 선언시 경고메시지 출력됨

const Button = styled.button<{ $primary?: boolean }>`
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
      <Button $primary>Click me</Button>
    </>
  );
}
