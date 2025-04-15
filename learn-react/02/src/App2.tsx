/* 
컴포넌트 PascalCase 로 이름 짓기
컴포넌트 : 함수가 JSX를 반환
화살표 함수 단축키 : rafce
*/

export default function App2() {
  const sum = (n1: number, n2: number) => {
    return n1 + n2;
  };
  return (
    <>
      <h1>App2 Component: {sum(10, 20)}</h1>
    </>
  );
}
