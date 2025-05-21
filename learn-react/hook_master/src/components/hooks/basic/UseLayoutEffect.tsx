// useEffect훅과 거의 동일, 실행 시점에 차이
// useEffect -> 컴포넌트가 렌더링 된 후 실행
// useLayoutEffect -> 컴포넌트가 렌더링 되기 전 동기적으로 실행
import React, { useLayoutEffect, useState } from 'react';

export default React.memo(function UseLayoutEffect() {
  const [count, setCount] = useState(0);
  const now = performance.now();
  while (performance.now() - now < 200) {
    // Artificial delay -- do nothing
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
});
