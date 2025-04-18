// 상태 : 시간이 지남에 따라 변할 수 있는 데이터를 의미
// useState, useReducer -> 리액트 훅!
// 상태 변수(리액트 변수)

import { useState } from "react";

// const [state, setState] = useState<type>(초기값)
// state : 상태변수 setState : 상태 업데이트 함수
export default function Count() {
  // re-rendering
  // [현재상태 값, 상태를 업데이트할 수 있는 함수]
  // 초기값과 변경되는 값의 데이터 타입이 일치할 때 제네릭을 생략할 수 있다.
  // 초깃값과 변경되는 값의 데이터 타입이 다를 때는 제네릭을 생략할 수 있다.
  const [count, setCount] = useState(0);
  const clickJHandler = () => {
    // 상태업데이트함수(값) -> 상태변수는 '값'으로 업데이트 된다
    // 상태업데이트함수(콜백함수)
    // setCount(() => 2000);
    // setCount(count + 1); // 상태 업데이트 함수는 비동기로 작동하기 때문에 새로운 내용이 반영되지 않음

    setCount((count) => count + 1); // 콜백함수는 매개변수가 항상 최신의 상태로 업데이트 된다.

    // 상태변수값을 변경할 때 현재 상태 값이 필요없다 그러면 값을 넘겨준다
    // 하지만 현재 상태 값이 필요하다 그러면 무조건 콜백함수 형식을 사용해야한다.
  };
  return (
    <>
      <h1>Count : {count}</h1>
      <button onClick={clickJHandler}>증가</button>
    </>
  );
}
