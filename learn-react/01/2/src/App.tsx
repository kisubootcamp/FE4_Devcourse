import styled from "styled-components";

export default function App() {
  // Create a Title component that'll render an <h1> tag with some styles
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
