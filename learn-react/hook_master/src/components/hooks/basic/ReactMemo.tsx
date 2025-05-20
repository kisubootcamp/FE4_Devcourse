// 컴포넌트는 언제 리렌더링되나요?
// 1. 부모 컴포넌트가 리렌더링될 때
// 2. props가 변경될 때
// 3. state(상태)가 변경될 때

// React.memo -> 고차 컴포넌트
// 컴포넌트를 반환하는 컴포넌트
// 컴포넌트 자체를 캐싱시켜서 캐싱된 컴포넌트를 반환해줌.
// ChildA 컴포넌트를 메모리에 저장시켜서 ReactMemo 컴포넌트가 리렌더링 되어도 ChildA는 리렌더링 되지 않음.

// React.memo는 컴포넌트를 메모이제이션 할 때 사용함.
// 메모이제이션 : 컴포넌트를 메모리에 저장해두는 행위.
// 메모리에 저장된 것을 꺼내씀으로써 성능을 향상시킴.

// 별도의 파일로 구분되어 있는 컴포넌트는 변수에 담을 필요 없이 함수 자체를 React.memo로 감싸주면 됨.
// -> export default React.memo(function ChildA() {})
import React, { useState } from "react";

const ChildA = React.memo(function ChildA() {
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
