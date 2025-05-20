// useLayoutEffect는 useEffect와 비슷하지만, 렌더링 전에 동기적으로 실행된다.
// useEffect는 렌더링 후에 실행된다.
// useLayoutEffect는 렌더링 전에 실행되기 때문에, 렌더링 후에 실행되는 useEffect보다 더 빠르게 실행된다.

import { useLayoutEffect, useState } from "react";

export default function UseLayoutEffect() {
  const [count, setCount] = useState(0);
  const now = performance.now();
  while (performance.now() - now < 200) {
    // Artificial delay -- do nothing
  }

  // useEffect(() => {
  //   if (count === 10) setCount(0);
  // }, [count]);

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
