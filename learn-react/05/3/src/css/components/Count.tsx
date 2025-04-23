// 상태
// useState, useReducer -> 리액트 훅(리액트 버전 16.8)

import { useState } from "react";

export default function Count() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1> Count : {count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
          setCount(count + 1);
          setCount(count + 1);
          //   setCount((count) => count + 1);
        }}
      >
        증가
      </button>
    </>
  );
}
