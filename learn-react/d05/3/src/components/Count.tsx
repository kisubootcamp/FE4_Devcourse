// 상태 -> 시간이 지남에 따라 변할 수 있는 데이터를 의미
// useState, useReducer -> 리액트 훅(v16.8)
// 상태 변수(리액트 변수) / var, let, const(자바스크립트 변수)

// const [state, setState] = useState<Type>(초기값);
// state -> 상태 변수
// setState -> 상태 업데이트 함수
import { useState } from "react";

export default function Count() {
  console.log("Count component");

  // 리렌더링(re-rendering)
  // 초기값과 변경되는 값의 데이터 타입이 일치할 때는 제네릭을 생략할 수 있음 (생략하는 것 선호)
  // 초기값과 변경되는 값의 데이터 타입이 다를 때는 제네릭을 생략할 수 없음 !!
  const [count, setCount] = useState<number>(0); // [현재 상태 값, 상태 값 업데이트 함수]
  // const [name, setName] = useState("");

  const clickHandler = () => {
    // 상태 업데이트 함수에 '값'을 전달 -> 상태 변수는 '값'으로 업데이트 됨.
    setCount(count + 1); // 0 + 1
    setCount(count + 1); // 0 + 1
    setCount(count + 1); // 0 + 1

    // 상태 업데이트 함수에 '콜백 함수'를 전달 -> 상태 변수는 '콜백 함수에서 반환된 값'으로 업데이트 됨.
    // 콜백 함수의 매개변수로 항상 최신의 상태 값이 전달됨. (그렇다고 항상 그 매개변수를 받아서 활용할 필요는 없음)
    setCount((count) => count + 1); // 0 + 1
    setCount((count) => count + 1); // 1 + 1
    setCount((count) => count + 1); // 2 + 1

    console.log(count); // 비동기
  };
  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={clickHandler}>증가</button>
    </>
  );
}
