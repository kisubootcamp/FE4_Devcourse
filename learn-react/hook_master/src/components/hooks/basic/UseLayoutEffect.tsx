//useLayoutEffect 훅
//useEffect 훅과 99% 동일한데, 실행 시점에 차이가 있다
//useEffect -> 컴포넌트가 렌더링 된 후 실행
//useLayoutEffect-컴포넌트가 렌더링 되기 전 동기적으로 실행
import React, { useLayoutEffect, useState } from "react";

export default React.memo(function UseLayoutEffect() {
  const [count, setCount] = useState(0);
  const now = performance.now();
  while (performance.now() - now < 200) {
    // Artificial delay -- do nothing
  }

  useLayoutEffect(() => {
    if (count === 10) setCount(0);
  }, [count]); //화면을 그리기 전에 실행->count값이 0=>10이된것 보고 0으로 변경 => 화면 랜더링됨(변경되는거 관찰할 수 없음)
  //useEffect는 화면 그리고나서 0=>10이 된 후 실행됨 =>다시 0으로 변경 (화면에서 0=>10=>0 관찰됨)
  return (
    <>
      <h1>Count: {count} </h1>
      <button onClick={() => setCount(10)}>클릭</button>
    </>
  );
});
