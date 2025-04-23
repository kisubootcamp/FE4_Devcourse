/* eslint-disable @typescript-eslint/no-unused-vars */
// useCallback 훅
// useCallback 훅은 컴포넌트가 리렌더링될 때마다 함수를 새로 생성하는 것을 방지합니다.
// useCallback은 메모이제이션된 함수를 반환합니다.
// useCallback(함수, 의존성 배열)
import React, { useCallback, useState } from "react";

const ChildA = React.memo(function ChildA({
  increment,
}: {
  increment: () => void;
}) {
  console.log("ChildA");
  return (
    <>
      <h1>ChildA</h1>
      <ChildB />
    </>
  );
}); // 함수가 아니라 숫자, 문자, 불리언 등이 전달되면 고정된 값이 전달되는 것이기 때문에 메모이제이션이 일어난다.

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

export default function UseCallback() {
  console.log("UseCallback");
  const [count, setCount] = useState(0);
  const increment = useCallback(() => {
    setCount((count) => count + 1);
  }, []); // 함수의 주소값을 메모리에 저장

  return (
    <>
      <h1>UseCallback</h1>
      <h2>Count: {count}</h2>
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        Increment Count
      </button>
      <ChildA increment={increment} />
    </>
  );
}
