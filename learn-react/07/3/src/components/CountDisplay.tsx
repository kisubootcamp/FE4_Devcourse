import { useState } from "react";

export default function CountDisplay() {
	const [count, setCount] = useState(0);
	return (
		<>
			<h1>Count: {count}</h1>
		</>
	);
}
