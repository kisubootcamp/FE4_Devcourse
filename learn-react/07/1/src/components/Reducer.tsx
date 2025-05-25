import { useReducer } from "react";

// state: 상태 값
// action: 함수 내부에서 상태를 변경하기 위해서 참조할 수 있는 데이터
// 무엇인가를 return해야 함 (그러지 않으면 에러를 던져야 함)
function reducer(state: { value: number }, action: { type: string }) {
	switch (action.type) {
		case "INCREMENT":
			return { value: state.value + 1 };
		case "DECREMENT":
			return { value: state.value - 1 };
		case "RESET":
			return { value: 0 };
		default:
			return state;
	}
}

export default function Reducer() {
	// count: 상태 값
	// dispatch: 액션 발생 함수
	const [count, dispatch] = useReducer(reducer, { value: 0 });

	return (
		<>
			<h1 style={{ marginBlock: "12px" }}>Count: {count.value}</h1>
			<button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
			<button onClick={() => dispatch({ type: "RESET" })}>0</button>
			<button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
		</>
	);
}
