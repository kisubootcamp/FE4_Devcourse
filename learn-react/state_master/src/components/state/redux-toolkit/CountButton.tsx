import { useDispatch } from "react-redux";
import { decrement, increment, reset } from "../../../redux/slice/counterSlice";

export default function CountButton() {
	const dispatch = useDispatch();
	return (
		<>
			<button onClick={() => dispatch({ type: "counterSlice/decrement" })}>-</button>{" "}
			{/* 원래는 위와 같이 작성해야 한다. slice이름/action이름 으로  -> 근데 이게 불편하니까 slice에서 아예 export를 해버려서 쓴거다 */}
			{/* <button onClick={() => dispatch(decrement())}>-</button>{" "} */}
			<button onClick={() => dispatch(reset())}>0</button>
			{/* <button onClick={() => dispatch(increment())}>+</button> */}
			<button onClick={() => dispatch(increment(6))}>+</button>
		</>
	);
}
