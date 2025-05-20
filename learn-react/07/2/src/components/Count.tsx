// 사이드 이펙트(side effect)
// useEffect 훅
// 컴포넌트가 생성 될 때 (마운트)
// 컴포넌트의 상태 값이 변경될 떄 (업데이트)
// 컴포넌트가 해제 될 떄 (언마운트)

import { useEffect, useState } from "react";

export default function Count() {
  const [count, setCount] = useState(0);

  // 마운트 (의존성 배열을 빈 배열로 설정)
  useEffect(() => {
    console.log("Count Mounted");
    // 언마운트
    return () => {
      console.log("Count UnMounted");
    };
  }, []);

  useEffect(() => {
    console.log("count change : " + count);
  }, [count]);
  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount((count) => count + 1)}>증가</button>
    </>
  );
}
