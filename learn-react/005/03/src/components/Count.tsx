// 상태: 시간이 지남에 따라 변할 수 있는 데이터를 의미.
// 이러한 상태를 담는 변수 = 상태 변수

import { useState } from "react";

// const [state, setState] = useState<Type> (초기값)
export default function Count() {
  console.log("count component");
  // 리-렌더링(re-rendering)
  const [count, setCount] = useState<number>(0);
  const clickHander = () => {
    // 상태업데이트함수(값) -> 상태변수는 '값'으로 업데이트
    // 상태업데이트함수(콜백함수)
    setCount((count) => count + 1);
  };
  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={clickHander}>증가</button>
    </>
  );
}
