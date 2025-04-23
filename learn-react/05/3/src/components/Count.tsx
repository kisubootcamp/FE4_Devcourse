// 상태 -> 시간이 지남에 따라 변할 수 있는 데이터를 의미
// useState, useReducer -> 리액트 훅(v16.8)
// 상태 변수(리액트 변수)

// const [state, setState] = useState<Type>(초깃값)
// state -> 상태 변수
// setState -> 상태 업데이트 함수
import { useState } from "react";

export default function Count() {
  // 리-렌더링(re-rendering)
  // 초깃값과 변경되는 값의 데이터의 타입이 일치할 때, 이때는 제네릭을 생략할 수 있다. (생략 선호)
  // 초깃값과 변경되는 값의 데이터 타입이 다를 때, 이때는 제네릭을 생략할 수 없다
  const [count, setCount] = useState<number>(0); // [현재 상태 값, 상태 값 업데이트 함수]

  const clickHandler = () => {
    // 상태업데이트함수(값) -> 상태 변수는 '값' 업데이트됩니다.
    // 상태업데이트함수 (콜백함수)
    // setCount(count+1)
    setCount((count) => count + 1);
    // setCount(100);
    // setCount(count + 1); // 비동기
  };
  return (
    <>
      <h1>Count : {count}</h1>
      <button onClick={clickHandler}>증가</button>
    </>
  );
}
