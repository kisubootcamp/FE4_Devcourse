import { useState } from "react";

export default function CountDisplay() {
  console.log("CountDisplay")

  const [count, setCount] = useState(0);
  return (
    <>
      <h1>Count: {count}</h1>
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        증가
      </button>
    </>
  );
}
// 컴포넌트 리렌더링의 특징
// 자신이 리렌더링 될 때, 자기 컴포넌트로부터 하위로 연결되어있는 모든 컴포넌트를 리렌더링 시킨다.
