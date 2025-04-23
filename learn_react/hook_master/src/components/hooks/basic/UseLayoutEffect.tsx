// useLayoutEffect 훅
// useEffect훅과 99% 일치하지만 실행 시점에 차이가 있다.
// useEffect : 컴포넌트가 렌더링 된 후
// useEffect : 컴포넌트가 렌더링 되기 전 동기적으로 실행

import { useLayoutEffect, useState } from "react";

export default function UseLayoutEffect() {
  const [count, setCount] = useState(0);
  const now = performance.now();
  while (performance.now() - now < 200) {
    // Artificial delay -- do nothing
  }
  // 화면에 먼저 실행되니까 (이미 10으로 바뀐걸 알 수 있기 때문에)
  // 10으로 바꼈다가 다시 0으로 바뀌는 모습이 보이지 않음.
  // 화면에 그리기 전에 조작을 끝내고 오기때문에
  // DOM 조작 할 때는 useLayoutEffect를 쓰는게 더 좋다

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
