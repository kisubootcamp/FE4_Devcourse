/* eslint-disable @typescript-eslint/no-unused-vars */
// useCallback 훅
// useCallback 훅은 컴포넌트가 리렌더링될 때마다 함수를 새로 생성하는 것을 방지합니다.
//메모이제이션은 코드 실행시켜보다가 비효율적인 상황 발생시 사용하기
// 함수의 주소값을 메모리에 저장했다가 실행될때마다 메모리에서 주소값을 꺼내옴.(주소값 변경 방지)
// useCallback은 메모이제이션된 함수를 반환합니다.
import React, { useState, useCallback } from "react";

const ChildA = React.memo(function ChildA({
  increment,
}: //React.memo를 썼는데도 자식까지 리렌더링됨-> increment 에서 props 변경사항이 존재한다는 뜻!
//함수가 참조자료형이기 떄문 , 함수 호출될때마다 함수 주소값도 변경됨
{
  increment: () => void;
}) {
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

export default function UseCallback() {
  console.log("UseCallback");
  const [count, setCount] = useState(0);
  const increment = useCallback(() => {
    setCount((count) => count + 1);
  }, []); //주소값 변하지 않음

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
