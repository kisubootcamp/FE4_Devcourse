import { Title, Button, Wrapper } from "./css/card";

export default function App() {
  // CSS-IN-JS
  // CSS를 런타임에 동적으로 생성해서 적용하는 원리
  // document.createElement('style')
  return (
    <>
      <Wrapper>
        <Title>App Component</Title>
        <Button>My Button</Button>
      </Wrapper>
    </>
  );
}
// 인라인 스타일은 이메일 내부 양식을 구현할 때 빼고는 사용할 일이 없다
// styled component는 직관적이지 않다.
