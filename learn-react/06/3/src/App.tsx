import { useState } from 'react';
// useRef 훅
// - 값이 변경되어도 리렌더링이 발생하지 않는변수
// - JSX 요소를 참조하는 경우

// - 컴포넌트가 다시 그려진다? (리-렌더링)
// - 함수가 다시 실행된다는 것

export default function App() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount((count) => count + Math.floor(Math.random() * 3));
    setCnt((cnt) => cnt + 1);
  };
  const [cnt, setCnt] = useState(0);
  const printConsole = () => {
    // 몇번 클릭했는지 콘솔로 출력하기
    console.log(`지금까지 ${cnt}번 클릭됨`);
  };
  return (
    <>
      <h1 className="text-3xl underline">count: {count}</h1>
      <button onClick={increment}>증가</button>
      <button onClick={printConsole}>increment 몇번 눌렸는지 출력하기</button>
    </>
  );
}