import { useState } from "react";

export default function Count() {
    const [count, setCount] = useState(0);

    const clickHandler = () => {
        setCount(count + 1);
    };

    return (
        <>
            <h1>Count: {count}</h1>
            <button onClick={clickHandler}>증가</button>
        </>
    );
}
/* 상태 관리 */
// useState, useReducer -> 리액트 훅

// const [state, setState] = useState<Type> (값, 함수로 이루어져있는 기본값을 return한다.)
// state -> 상태 변수, setState -> 상태 업데이트 함수
// 상태 업데이트 함수는 비동기로 동작하기 때문에 화면에 표시되는 것보다 업데이트가 느리다.
// 상태 업데이트 함수(값) : 현재 상태와 전혀 관련이 없을 때만 사용!
// setCount(count + 1);
// 상태 업데이트 함수(콜백함수) : 콜백함수의 매개변수는 최신의 상태를 보장하기 때문에 동기로 동작하게 된다.
// setCount((count) => count + 1);
// 상태 업데이트 함수가 실행되면 해당 함수를 호출한 컴포넌트부터 하위 컴포넌트를 리-렌더링한다.
