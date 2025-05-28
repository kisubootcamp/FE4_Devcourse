import { useEffect, useState } from "react";

export default function Count() {
	const [count, setCount] = useState(0);
	const [name, setName] = useState("");

	// 리렌더링되어도 한번만 실행됨
	useEffect(() => {
		console.log("Count Mounted");

		return () => {
			console.log("Count UnMounted");
		};
	}, []);

	useEffect(() => {
		console.log("count change: " + count);
		console.log("name change: " + name);
	}, [count, name]);

	return (
		<>
			<h1>Count: {count}</h1>
			<button onClick={() => setCount((count) => count + 1)}>증가</button>
			<button onClick={() => setName("sucoding is not handsome")}>
				이름 변경
			</button>
		</>
	);
}
