// 상태 -> 시간이 지남에 따라 변할 수 있는 데이터를 의미
// useState, useReducer -> 리액트 훅(v16.8)
// 상태 변수(리액트 변수)

// const [state,setState]=useState<Type>(초깃값)
// state -> 상태 변수 (직접적으로 값을 바꾸면 안됨됨)
// setState -> 상태 업데이트 함수 (이름은 set***형태)
import { useState } from "react";
export default function Count() {
  //리-렌더링(re-rendering) (현재위치로부터 하위컴포넌트까지) (변경된 숫자 화면에 반영)
  //초기값과 변경되는 값의 타입이 다를 때 제네릭을 생략할 수 없음
  //일치하면 생략해도됨
  const [count, setCount] = useState<null | number>(null); //[현재상태값, 상태값 업데이트 함수]
  const [name, setName] = useState("");
  // let count = 10; //리액트는 var,let,const로 선언된 변수들의 값 변경사항을 인지하지 못함
  const clickHandler = () => {
    //상태업데이트함수(값)->상태 변수는 '값'으로 업데이트 됩니다. (현재 상태값이 필요하지 않은 경우)
    //setCount(2000);//count=100으로 업데이트됨 제네릭
    //상태업데이트함수(콜백함수)
    // setCount((count) => count + 1); //항상 함수의 매개변수로 최신의 상태값이 전달됨 (현재 상태값이 필요한 경우)
    // setCount((count)=>count+1);
    // setCount((count)=>count+1); //=>count값 3씩 증가(실시간 count값 업데이트)
    //setCount(count+1); //비동기; setCount가 실행완료될때까지 기다리지않음
    //setCount(count+1);
    //setCount(count+1); =>count가 1만 증가(상태값이 바로 반영되지 않음)

    console.log(count);
  };
  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={clickHandler}>증가</button>
    </>
  );
}
