import { useRef, useState } from "react";

// useRef 훅
// - 값이 변경되도 리렌더링이 발생하지 않는 변수
// - JSX 요소를 참조하는 경우

// 컴포넌트가 다시 그려진다?
// 함수가 다시 실행(그려진다는 것)된다는 것.

// 리액트가 관리하는 변수
// 실시간성이 보장됨
export default function App() {
  // console.log("App Component");
  // const [cnt, setCnt] = useState(0);
  const cnt = useRef(0);
  const [count, setCount] = useState(0);
  const increment = () => {
    // setCnt((cnt) => cnt + 1);
    cnt.current += 1;
    setCount((count) => count + Math.floor(Math.random() * 10) + 1);
  };
  const printConsole = () => {
    // 몇번 클릭했는 지 콘솔로 출력
    console.log(`지금까지 ${cnt}번 클릭됨`);
  };
  return (
    <>
      <h1 className="text-3xl underline">Count: {count}</h1>
      <button onClick={increment}>증가</button> <br />
      <button onClick={printConsole}>count increment</button>
    </>
  );
}
