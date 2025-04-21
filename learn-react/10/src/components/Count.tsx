// 상태 -> 시간이 지남에 따라 변할 수 있는 데이터를 의미
// useState, useReducer -> 리액트 훅 (v16.8 이후 추가)

import { useState } from "react";

export default function Count() {
  // const [state, setState] = useState<type>(initialState)
  // 리-렌더링(re-rendering) -> 컴포넌트가 리렌더링 되는 것을 의미
  // 초깃값과 변경되는 값의 데이터의 타입이 일치할 때, 이때는 제네릭을 생략할 수 있다.
  // 초깃괎과 변경되는 값의 데이터 타입이 다를 때. 이때는 제네릭을 생략할 수 없다.
  const [count, setCount] = useState<number | null>(0);
  const clickHandler = () => {
    // 상태업데이트함수(값) -> 상태 변수는 '값'으로 업데이트 된다.
    setCount(count! + 1); // 비동기
    // 상태업데이트함수(콜백함수) -> 상태 변수는 '콜백함수의 반환값'으로 업데이트 된다.
    setCount((prev) => prev! + 1);
  };
  return (
    <>
      <h1 className="text-3xl">Count: {count}</h1>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
        onClick={clickHandler}
      >
        +
      </button>
    </>
  );
}
