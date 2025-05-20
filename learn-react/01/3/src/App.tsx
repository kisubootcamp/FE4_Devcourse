// CSS-IN-JS
// CSS를 런타임에 동적으로 생성해서 적용하는 원리
// document.createElement('style')

import { Title, Wrapper } from "./css/card";

export default function App() {
  return (
    <>
      <Wrapper>
        <Title>Hello World!</Title>
      </Wrapper>
    </>
  );
}
