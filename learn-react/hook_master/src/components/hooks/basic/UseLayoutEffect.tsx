// useLayoutEffect 훅
// useEffect 훅과 99% 동일한데, 실행 시점에 차이가 있음.
// useEffect -> 컴포넌트가 렌더링 된 후 실행
// useLayoutEffect -> 컴포넌트가 렌더링 되기 전 동기적으로 실행

import { useEffect, useLayoutEffect, useState } from "react";

export default function UseLayoutEffect() {
  const [count, setCount] = useState(0);
  const now = performance.now();
  while (performance.now() - now < 200) {
    // Artificial delay -- do nothing
  }

  useEffect(() => {
    // useEffect은 컴포넌트가 렌더링 된 후에 실행되므로 while문에서의 딜레이로 잠깐 10이 보였다가 0으로 바뀜.
    if (count === 10) setCount(0);
  }, [count]);

  useLayoutEffect(() => {
    // useLayoutEffect은 화면에 그리기 전에 실행되므로 버튼을 눌러도 계속 0으로 보임.
    // DOM을 조작할 때는 useLayoutEffect을 사용하는 게 좋음.
    // 불필요한 깜빡임이 보이지 않게 할 수 있음.
    if (count === 10) setCount(0);
  }, [count]);

  return (
    <>
      <h1>Count: {count} </h1>
      <button onClick={() => setCount(10)}>클릭</button>
    </>
  );
}
