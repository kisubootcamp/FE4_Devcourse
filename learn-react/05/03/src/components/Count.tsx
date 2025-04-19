// 상태 -> 시간이 지남에 따라 변할 수 있는 데이터를 의미한다.
// useState, useReducer => 리액트 훅(v.16.8)
// 상태 변수(리액트 변수)
import { useState } from "react";

// const [state, setState] = useState<Type>(초기값)
// state -> 상태 변수
// setState -> 상태 업데이트 함수

export default function Count() {
  // 리렌더링(re-rendering)
  // 초기값과 변되는 값의 데이터 타입이 다를 때. 이빼는 제네릭을 생랼할 수 없다.
  const [count, setCount] = useState(0); //[현재상태값, 상태값 업데이트 함수]

  const clickHandler = () => {
    // 상태 업데이트 함수(값) 형태는 상태변수가 '값'으로 업데이트된다.
    // 상태업데이트 함수(콜백함수)
    setCount((count) => count + 1);
    // setCount(count + 1); //비동기
  };
  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={clickHandler}>증가</button>
    </>
  );
}
