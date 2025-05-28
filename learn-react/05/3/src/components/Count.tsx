// 상태 -> 시간이 지남에 따라 변할 수 있는 데이터
// useState, useReducer -> 리액트 훅 (v16.8+)
// 상태 변수

// const [state, setState] = useState<Type>(초기값)
// state -> 상태 변수
// setState -> 상태 업데이트 함수

import { useState } from "react";

export default function Count() {
	console.log("count component");
	// 리-렌더링(re-rendering)
	// set*** 형태로 지음

	// 초기값과 변경되는 값의 데이터 타입이 일치할 때 제네릭 생략 가능
	// 초기값과 변경되는 값의 데이터 타입이 다를 때 제네릭 생략 불가능
	const [count, setCount] = useState(0); // [현재 상태 값, 상태 값 업데이트 함수]

	const clickHandler = () => {
		// setCount(count + 1); // 비동기

		// 상태업데이트함수(값) -> 상태 변수는 값으로 업데이트됨
		// 상태업데이트함수(콜백함수)

		// setCount(count + 1);
		// setCount((count) => count + 1); // 항상 최신의 카운트를 참조함

		setCount(10);
	};

	return (
		<>
			<h1 style={{ marginBlock: "0.4em" }}>Count: {count}</h1>
			<button style={{ zoom: "1.25" }} onClick={clickHandler}>
				증가
			</button>
		</>
	);
}
