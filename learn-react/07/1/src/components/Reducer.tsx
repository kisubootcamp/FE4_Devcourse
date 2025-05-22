import { useReducer } from "react";
import { counterReducer } from "../reducer/counter.reducer";

// state -> 상태 값
// action -> 함수 내부에서 상태를 변경하기 위해서 참조할 수 있는 데이터
// reducer 함수는 반드시 무엇인가를 return 해야 함. (그러지 않을 거면 에러를 던져야 함 ie. throw new Error("");)
// 그래서 reducer 함수는 기본적으로 return state;로 시작한다.
// function reducer(state: { value: number }, action: { type: string }) {
// 	switch (action.type) {
// 		case "INCREMENT":
// 			return { value: state.value + 1 };
// 		case "DECREMENT":
// 			return { value: state.value - 1 };
// 		case "RESET":
// 			return { value: 0 };
// 		default:
// 			return state;
// 	}
// }
export default function Reducer() {
	// useReducer의 첫번째 매개변수 reducer(counterReducer)는 타입을 보니 함수, 두번째 매개변수는 값을 알 수 없는 일반 변수다.
	// 즉 useReducer는 함수 하나와 초기값을 전달받는다.
	// reducer는 state와 action이라 지칭하는 데이터를 전달 받는다. (-> 4번 라인으로)
	const [count, dispatch] = useReducer(counterReducer, { value: 0 }); // 구조분해 할당이기 때문에 count, dispatch 말고 다른 단어 써도 되지만 의미있게 작성하기 위해.
	// count - 상태 값 (맨 처음은 useReducer의 두번째 매개변수 값을 받고, dispatch가 실행된 후에는 reducer(counterReducer)의 리턴값을 받는다)
	// dispatch - 액션 발생 함수
	return (
		<>
			<h1>Count : {count.value}</h1>
			<button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
			<button onClick={() => dispatch({ type: "RESET" })}>0</button>
			<button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
		</>
	);
}
