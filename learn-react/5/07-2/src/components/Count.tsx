//상태 -> 시간이 지남에 따라 변할 수 있는 데이터를 의미
// useState, useReducer -> react hook(v16.8)
// 상태 변수(리액트 변수)

// const [state, setState] = useState<Type>(초깃값)
// useState 제네릭은 타입을 추론해줌 초깃값과 제네릭 타입 일치, 일치하다면 타입 지정 생략 가능
// -> 일부러 지정해주지 않아도 됨 -> 코드의 가독성을 높임
// 생략할 수 있는건 아무런 문제가 없을 때만 가능
// state -> 상태변수
// setState -> 상태 업데이트 함수

import { useState } from "react";
export default function Count() {
  //리-렌더링(re-rendering)
  // 한번 렌더링된 컴포넌트는 특정 이벤트가 있지 않으면 변하지 않음
  // 그 특정 이벤트는 상태 변수의 값이 업데이트가 됐을 때
  //비동기로 동작
  //const [count, setCount] = useState<null | number>(0); //[현재 상태값, 상태값 업데이트함수]
  const [count, setCount] = useState<number>(0); //[현재 상태값, 상태값 업데이트함수]
  const clickHandler = () => {
    //(1) 상태업데이트함수(값) -> 상태변수는 "값"으로 업데이트
    // 상태변수의 값을 변경함에 있어서 현재 상태값을 참조할 필요가 없을 때
    // setCount(100); // 비동기
    // console.log(count);
    // setCount(count + 1);// 0+1
    // setCount(count + 1);// 0+1
    // setCount(count + 1);// 0+1
    //(2)상태업데이트함수(콜백함수), 콜백함수에서 반환하는 값을 현재 상태값으로 받음
    // 현재 상태값을 변경함에 있어서 현재 상태값이 필요하면 콜백함수 형태로 사용
    // setCount((count) => count + 1); // 0 + 1
    // setCount((count) => count + 1); // 1 + 1
    // setCount((count) => count + 1); // 2 + 1
    //항상 최신의 상태값이 콜백함수로 전달됨
    setCount((count) => count + 1);
  };
  return (
    <>
      <h1>Count:{count}</h1>
      <button onClick={clickHandler}>증가</button>
    </>
  );
}

// const [state, setState] = [0, ()=>console.log('hi)];
