import { Title, Wrapper } from './card'; // card.ts에서 Title과 Wrapper 가져오기

export default function App() {
  return (
    <>
      <Wrapper>
        <Title>Hello World!</Title>
      </Wrapper>
      <Title>App Component</Title>
    </>
  );
}
