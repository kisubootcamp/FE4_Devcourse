// 상태 : 시간이 지남에 따라 변할 수 있는 데이터를 의미
// useState, useReducer : 리액트 훅, 상태 변수

import { useState } from "react";

// const [state, setState] = useState<Type>(초기값)
// state : 상태 변수
// setState : 상태 업데이트 함수

export default function Count() {
  // 식별자 이름 지을땐 규칙이 있어..
  // 1. 일단 상태 변수 이름 편하게 지어.
  // 2. 상태 업데이트 함수는 set+상태변수 이런식으로 지어
  const [count, setCount] = useState<number>(0); // [현태 상태 값, 상태 값 업데이트 함수]

  // 컴포넌트를 화면에 그리는 행위 : 컴포넌트 랜더링
  // 리 랜더링은 무엇인가 . ,
  //  - 상태변수를 업데이트하면 카운트라는 값을 리 랜더링함 => 변경된 숫자 반영함

  // count 정의
  //   let count = 10;
  const clickHandler = () => {
    // count += 1;
    // setCount(count + 1); // 비동기임. 상태값이 변경될때까지 기다려주지않음
    // console.log(count);

    // 상태 업데이트 함수 (값) -> 상태 변수는 값으로 업데이트됩니다.
    // 상태 업데이트 함수 (콜백) -> 콜백함수로 하면 항상 최신의 상태값이 전달되는 특징이 있다.
    // setCount(() => 2000);

    // //
    // setCount(2000);

    setCount((count) => count + 1);
    setCount(count + 1);
  };
  return (
    <>
      {/* 버튼을 클릭 시 숫자를 증가시키도록!  */}
      <h1>Count : {count}</h1>
      <button onClick={clickHandler}>증가</button>
    </>
  );
}
