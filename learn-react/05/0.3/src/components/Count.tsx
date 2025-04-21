// 데이터의 변화를 감지하는 방법 : 상태 정의
// useStae, useReducer
// 상태변수(리액트 변수 - 이건 공식용어는 아님)

// const [state, setState] = userState<Type>(초깃값)
// const [a,setA] 이런식으로 지어준다
// state = 상태변수,  setstate = 상태 업데이트 함수
import { useState } from 'react';
export default function Count() {
  // re-rendering : 컴퍼넌트를 화면에 다시 그리는 작업
  const [count, setCount] = useState<number>(0); //count: 현재 상태값, setCount:상태값 업데이트 함수
  // 위에 제네릭에 들어가는 타입은 항상 (0)으로 초기값을 써줘야한다.
  
  const clickHandler = () => {
    // 상태 업데이트 하는 방법
    // * 값으로 업데이트하기
    // 상태변수는 값으로 업데이트 됩니다!
    // 0이었던 count를 10으로 변경한다는 뜻
    // setCount(10);
    // setCount(count + 1); // 비동기

    // ** 상태 업데이트 함수의 콜백함수 형태
    setCount((count) => count + 1);

    console.log(count);
  };
  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={clickHandler}>증가</button>
    </>
  );
}
