// 상태 -> 시간이 지남에 따라 변할 수 있는 데이터를 의미함
// 리액트는 상태를 정의해야 변경된 상태를 감지할 수 있음.
// useState, useReducer => 리액트 훅(리액트 v.16.8 이후)
// 상태 변수(리액트 변수)

import { useState } from "react";

// const [state, setState] = useState<Type>(초깃값)
// state => 상태 변수
// setState => 상태 업데이트 함수

export default function Count() {
  console.log("count Component"); // 다시 그리는 컴포넌트부터 하위 컴포넌트까지 다 업데이트가 됨

  const [count, setCount] = useState<number>(0); // 현재 상태 값, 상태 값 업데이트 함수 1번 인덱스는 항상 set~~~
  const [name, setName] = useState(""); // 원하는 만큼 상태변수를 지정해서 사용 가능
  // 제네릭은 타입 추론이 됨. 제네릭을 일부러 지정하지 않기도 함
  // 초기값과 변경되는 값의 데이터 타입이 일치할 때, 이때는 제네릭을 생략할 수 있다.(생략 선호)
  // 초기값과 변경되는 값의 데이터 타이입이 다를 때, 제네릭을 생략할 수 없다(변경 될 때는 변경되는 타입을 유니온타입으로 제네릭에 추가).

  const clickHandler = () => {
    // setCount(count + 1); // 값 전달 -> 상태 변수는 값으로 업데이트됨
    setCount((count) => count + 1); // 상태 업테이트(콜백함수) 두 방법의 동작의 차이는 없다.
    // 매개변수를 받아서 하면 현재 상태를 반환
    // 상태 업데이트 함수를 콜백으로 해도 매개변수를 꼭 받아서 할 필요는 없다.
    // 비동기
    // console.log(count);
    // setCount(count + 1); // 0 + 1
    // setCount(count + 1);// 0 + 1
    // setCount(count + 1); // 0 + 1 중복 사용해도 1씩밖에 증가하지 않는다 현재 참조값이 필요없을 때는 값을 전달하는 함수로 사용
    // setCount((count) => count + 1); // 0 + 1
    // setCount((count) => count + 1); // 1 + 1
    // setCount((count) => count + 1); // 2 + 1 콜백함수는 상태변수의 최신 상태를 받아오기 때문에 한번에 3씩 증가한다.
    // 현재 상태값이 필요하면 콜백함수로
    // setCount(count + 1);
    setCount((count) => count + 1);
    // 상태값과 연관이 있다면 항상 콜백함수로 사용하는 습관을 들일 것
    // batch 업데이트
    // 상태 업데이트: 변경된 컴포넌트부터 하위 컴포넌트까지 변경
    // setCount를 사용하려면 반드시 무슨 값이든 반환해야 한다.
  };
  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={clickHandler}>증가</button>
    </>
  );
}
// 리액트는 let이나 const로 선언된 변수들에 담겨 있는 값이 변경되어도 인지하지 못함.
// 상태가 업데이트되면 리렌더링 작업을 수행

//componentspropwithoutrep

