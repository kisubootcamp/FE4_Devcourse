import { useEffect } from "react";
import CountButton from "./components/CountButton";
import CountDisplay from "./components/CountDisplay";
import { useCountStore1 } from "./stores/countStore";

export default function App() {
	// const count = useCountStore1((state) => state.count);
	// useEffect(() => {
	// 	console.log("change", count);
	// }, [count]); // 이방법도 count의 값의 변경을 감지할 수 있음. 근데 이 방법은 예를 들어 5개의 값이 있으면 5번 뽑아와서 감지해야하니까.

	useEffect(() => {
		const unsubscribe = useCountStore1.subscribe( // 값을 뽑아오지 않아도 변화를 감지할 수 있도록 subscribe에 등록할 수 있다.
			(state) => state.count,
			(newCount) => {
				console.log("new Count : ", newCount);
			}
		);

		return () => {
			unsubscribe();
		};
	});

	return (
		<>
			<CountDisplay></CountDisplay>
			<CountButton></CountButton>
		</>
	);
}
