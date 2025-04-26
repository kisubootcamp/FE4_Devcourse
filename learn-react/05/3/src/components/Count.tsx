// 상태
// useState, useReducer -> 리액트 훅(v16.8)
// 상태 변수(리액트 변수)

// const [state, setState] = useState<Type>(초깃값)
// state -> 상태 변수
// setState -> 상태 업데이트 함수
import { useState } from "react";

export default function Count() {
	// 리-렌더링(re-rendering)
	// useState의 제네릭 타입은 타입추론이 되기 때문에 <number>안 적어도 되긴 함.
	// 즉 기본값이 반환 값의 타입과 같다면 제네릭을 사용하지 않아도 된다. 강사님도 실제로 타입 명시하지 않음.
	const [count, setCount] = useState(0); // [현재 상태 값, 상태 값 업데이트 함수]
	// 만약 useState 의 초기값이 null이라면 제네릭 타입이 null이 되고 이건 null 타입만 허용하겠다는 뜻이 됨. 따라서 setCount(10)하면 에러가 난다.
	// 초기값과 변경되는 값의 데이터의 타입이 일치할 때, 이때는 제네릭을 생략할 수 있다. (생략 선호)
	// 초기값과 변경되는 값의 데이터의 타입이 다를 때, 이때는 제네릭을 생략할 수 없다.
	// const [count, setCount] = useState(0);
	// const [count, setCount] = useState<null | number>(null); // [현재 상태 값, 상태 값 업데이트 함수]
	console.log("count component");

	const [name, setANme] = useState(""); // 여러 스테이트 한 블록에서 사용도 가능하다.

	const clickHandler = () => {
		// setCount(count + 1); // 비동기
		console.log(count); // 비동기가 뭐지? -> 리렌더링 되기 전의 스냅샷이 콘솔에 찍히기 때문에 1이 보여지고 있어도 콘솔에는 0이 출력됨.
		// 상태 업데이트 함수(값) -> 상태 변수는 '값'으로 업데이트된다.
		// 상태 업데이트 함수(콜백함수) : 콜백함수에서 반환한 값을 현재 값으로 할당함.
		// 그럼 콜백함수로 세팅하는 것과 그냥 값을 세팅하는 것은 무슨 차이?

		// setCount(2000);
		// setCount(() => 2000); // 항상 최신의 값이 콜백함수의 매개변수로 전달된다는 특징을 가진다.

		// setCount(count + 1); // 상태 업데이트 함수에 값을 넘겨주는 형태
		// setCount((count) => count + 1); // 상태 업데이트 함수를 콜백함수 형태로 사용
		// 두개의 동작 차이가 지금은 없음

		// 그런데 차이가 날 때가 있다. 아래와 같은 경우
		// setCount(count + 1); // 0 + 1
		// setCount(count + 1); // 0 + 1
		// setCount(count + 1); // 0 + 1

		// setCount((count) => count + 1); // 콜백함수에 들어온 매개변수는 "항상" 최신의 값을 보장하기 때문에 이때는 0 +1
		// setCount((count) => count + 1); // 1 + 1
		// setCount((count) => count + 1); // 2 + 1 이렇게 작동한다.

		// 애초에 현재 정의된 현재 값과 연관되어 있는 계산이라면 항상 콜백함수 형태로 사용해라. 당장은 문제가 없더라도
		setCount((count) => count + 1);
	};
	return (
		<>
			<h1>Count : {count}</h1>
			<button onClick={clickHandler}>증가</button>
		</>
	);
}
