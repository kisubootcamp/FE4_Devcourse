// 컴포넌트는 언제 리렌더링되나요?
// 1. 부모 컴포넌트가 리렌더링될 때
// 2. props가 변경될 때
// 3. state가 변경될 때

//React.memo->고차 컴포넌트
//컴포넌트를 반환하는 컴포넌트(함수)
//부모가 리렌더링 되어도 자식의 props가 바뀌지 않을때 자식은 리렌더링 되지 않도록

import React, { useState } from "react";

const ChildA = React.memo(function ChildA() {
  //매개변수로 컴포넌트 받고, 컴포넌트 캐싱시키고, 캐싱된 컴포넌트 리턴시킴
  //ChildA를 메모리에 넣어 props가 바뀌지 않는 이상 저장한 렌더링 결과를 보여줌으로서 리렌더링 되지 않도록=>밑의 자식들도 리렌더링 되지 않음
  console.log("ChildA");
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>ChildA</h1>
      <h2>Count:{count}</h2>
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
//컴포넌트 리렌더링 조건: 1.부모가 리렌더링(사실상 그 밑의 모든 자식들이 연쇄적으로 리렌더링)  2.값 변경
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
