// 사이드 이펙트(side effect)
// useEffect 훅
// 컴포넌트가 생성될 때(마운트)
// 컴포넌트의 상태 값이 변경될 때(업데이트)

import { useEffect, useState } from "react";

// 컴포넌트가 해제될 때(언마운트)
// [] <- 의존성 배열을 빈 배열로 하고 이펙트 함수를 사용하면 컴포넌트가 생성될 때 최초로 한번만 실행
export default function Count() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  // 마운트
  useEffect(() => {
    console.log("Count Mounted");

    return () => {
      console.log("Count UnMounted");
    };
  }, []);

  useEffect(() => {
    console.log("count change:" + count);
    console.log("name change:" + name);
  }, [count, name]);

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount((count) => count + 1)}>증가</button>
      <button onClick={() => setName("sucoding handsome")}>이름변경</button>
    </>
  );
}
