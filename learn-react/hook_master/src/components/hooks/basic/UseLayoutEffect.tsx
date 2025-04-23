import { useLayoutEffect, useState } from "react";

export default function UseLayoutEffect() {
  const [count, setCount] = useState(0);
  const now = performance.now();
  while (performance.now() - now < 200) {
    // Artificial delay -- do nothing
  } // 리렌더링 과부하로 딜레이가 생김

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

// useEffect와 실행 시점에 차이가 있다
// useEffect -> 컴포넌트가 렌더링 된 후 실행
// useLayoutEffect -> 컴포넌트가 렌더링 되기 전 동기적으로 실행
// DOM을 조작할 때는 useLayoutEffect를 사용하는 것이 좋음. 화면 깜빡임 등의 효과를 예방할 수 있음
