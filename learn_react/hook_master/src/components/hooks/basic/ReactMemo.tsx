// 컴포넌트는 언제 리렌더링되나요?
// 1. 부모 컴포넌트가 리렌더링될 때
// 2. props가 변경될 때
// 3. state가 변경될 때
import React, { useState } from "react";

// React.memo -> 고차함수
// 컴포넌트 자체를 캐싱(기록에 저장)시켜서 컴포넌트를 반환
// -> 메모이제이션 : 메모리에 저장되어 있던 걸 불러준다.
// React.meno : 컴포넌트를 메모이제이션할 때 사용해주는 것
const ChildA = React.memo(function ChildA() {
  console.log("ChildA");
  return (
    <>
      <h1>ChildA</h1>
      <ChildB />
    </>
  );
});

function ChildB() {
  console.log("ChildB");
  return (
    <>
      <h1>ChildB</h1>
      <ChildC />
    </>
  );
}

function ChildC() {
  console.log("ChildC");
  return (
    <>
      <h1>ChildC</h1>
    </>
  );
}

function ChildD() {
  console.log("ChildD");
  return (
    <>
      <h1>ChildD</h1>
    </>
  );
}

export default function ReactMemo() {
  console.log("ReactMemo");
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>ReactMemo</h1>
      <h2>Count: {count}</h2>
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        Increment Count
      </button>
      <ChildA />
      <ChildD />
    </>
  );
}
