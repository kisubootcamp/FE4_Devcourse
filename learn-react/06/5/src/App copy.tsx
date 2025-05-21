import { useRef, useState } from "react";

// useRef 훅
// - 값이 변경되도 리렌더링이 발생하지 않는 변수
// - JSX 요소를 참조하는 경우

// 컴포넌트가 다시 그려진다? (리-렌더링)
// 함수가 다시 실행된다는 것.

// 리액트가 관리하는 변수
// 실시간성이 보장됨
export default function App() {
  // console.log("App Component");
  const cnt = useRef(0); // ref 객체
  // const [cnt, setCnt] = useState(0);
  // let cnt = 0;
  const [count, setCount] = useState(0);
  const increment = () => {
    cnt.current += 1;
    // setCnt((cnt) => cnt + 1);
    // cnt += 1;
    setCount((count) => count + Math.floor(Math.random() * 10) + 1);
  };
  const printConsole = () => {
    // 몇 번 클릭했는지 콘솔로 출력
    console.log(`지금까지 ${cnt.current}번 클릭함`);
  };
  return (
    <>
      <h1 className="text-3xl underline">Count: {count}</h1>
      <button onClick={increment}>증가</button>
      <button onClick={printConsole}>increment 몇 번 눌렀는지 출력하기</button>
    </>
  );
}
