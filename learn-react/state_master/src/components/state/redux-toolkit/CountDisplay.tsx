import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store"; // redux 패키지에 있는게 아니라 redux/store에 있는거 가져와야 됨

export default function CountDisplay() {
	// 중앙 스토어의 슬라이스 객체 -> state
	// useSelector로 가져온것 내가 쓰고 싶은 변수에 담아줌
	const count = useSelector((state: RootState) => state.counter.value); // state.counter하면 initialState까지 접근하는거. 왜 counter냐? 내가 store에서 counter: counterSlice이렇게 counter로 지었기 때문에. 그리고 거기의 value값을 쓰랴는 거니까 .value
	return (
		<>
			<h1>Count: {count}</h1>
		</>
	);
}
