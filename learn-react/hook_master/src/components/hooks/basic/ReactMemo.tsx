// 컴포넌트는 언제 리렌더링되나요?
// 1. 부모 컴포넌트가 리렌더링될 때
// 2. props가 변경될 때
// 3. state(상태)가 변경될 때
import { useState, memo } from "react";

// memo -> 고차 컴포넌트
// memo 함수는 컴포넌트를 메모이제이션하는 함수입니다.
// 컴포넌트가 리렌더링될 때, 이전 렌더링 결과를 재사용합니다.
// 컴포넌트가 동일한 props로 동일한 결과를 반환하는 경우, 리렌더링을 방지합니다.

const ChildA = memo(function ChildA() {
  console.log("ChildA");
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>ChildA</h1>
      <h2>Count: {count}</h2>
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        Increment Count
      </button>
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
