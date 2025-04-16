import styled from "styled-components";
export default function App() {
  const Title = styled.h1`
    // 태그드 리터럴 템플릿
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
