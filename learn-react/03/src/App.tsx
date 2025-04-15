import styled from "styled-components";

export default function App() {
  //CSS-IN-JS
  //CSS를 런타임에 동적으로 생성해서 적용하는 원리
  //document.createElement('style')
  // const Title = styled.h1`
  //   font-size: 50px;
  //   color: red;
  // `; //태그드 리터럴 템플릿

  const Title = styled.h3`
    font-size: 1.5em;
    text-align: center;
    color: #bf4f74;
  `;

  // Create a Wrapper component that'll render a <section> tag with some styles
  const Wrapper = styled.section`
    padding: 4em;
    background: papayawhip;
  `;
  return (
    <>
      <Wrapper>
        <Title>App Component</Title>
      </Wrapper>
    </>
  );
}
