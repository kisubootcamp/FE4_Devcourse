// 상태 -> 시간이 지남에 따라 변할 수 있는 데이터
// useState, useReducer -> 리액트 훅

import { useState } from 'react';

// const [state, setState] = useState<type>(초기값)
// state -> 상태 변수
// setState -> 상태 업데이트 함수
export default function Count() {
  console.log('Count Component');
  // re-rendering
  // 초기값과 변경값의 데이터 타입 일치, 제네릭 생략
  // 다르면 생략 x
  const [count, setCount] = useState<null | number>(null); // [현재 상태 값, 상태 값 업데이트 함수]
  const [name, setName] = useState('');
  const clickHandler = (): void => {
    // // 상태 업데이트함수(값) -> 상태 변수는 '값'으로 업데이트됨

    // // setCount(count + 1); // 상태업데이트 함수의 값을 전달
    // setCount(() => count + 1); // 상태업데이트 함수를 콜백함수로
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1); // 비동기라 동시에 0+1

    // setCount((count) => count + 1);
    // setCount((count) => count + 1);
    // setCount((count) => count + 1);
    setCount(10);
  };
  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={clickHandler}>증가</button>
    </>
  );
}
