import { useLayoutEffect, useState } from "react";

export default function UseLayoutEffect() {
  const [count, setCount] = useState(0);
  const now = performance.now();
  while (performance.now() - now < 200) {
    // 의도적으로 딜레이를 검.
  }
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
