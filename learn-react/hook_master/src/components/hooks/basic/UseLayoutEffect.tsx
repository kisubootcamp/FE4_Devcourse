// useLayoutEffect 훅
// useEffect 훅과 99% 동일하지만 실행시점에서 차이가 있음
// useEffect 는 컴포넌트가 실행된 후에 실행
// useLayoutEffect 는 컴포넌트가 렌더링 되기 전 동기적으로 실행

import { useState, useEffect, useLayoutEffect } from "react";

export default function UseLayoutEffect() {
  const [count, setCount] = useState(0);
  const now = performance.now();
  while (performance.now() - now < 200) {
    // Artificial delay -- do nothing
  }

  // 이미 count가 10인걸 렌더링하기 전에 알아서 10을 만나고 0으로 이미 바꿔버림
  // 렌더링 되기 전 끝내고 옴 (useLayoutEffect)
  useLayoutEffect(() => {
    if (count === 10) setCount(0);
  }, [count]);
  return (
    <>
      <h1>Count: {count} </h1>
      <button onClick={() => setCount(10)}>클릭</button>
    </>
  );
}
