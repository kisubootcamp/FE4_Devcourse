import styled from "styled-components";

export default function Header() {
  const Title = styled.h1`
    font-size: 1.5rem;
    text-align: center;
    color: blue;
  `;
  return (
    <>
      <header>
        <h1>내 웹사이트</h1>
      </header>
      <Title>styled-components</Title>
    </>
  );
}
