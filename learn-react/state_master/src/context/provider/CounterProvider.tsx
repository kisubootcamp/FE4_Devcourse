import { useMemo, useState } from "react";
import { CounterActionContext, CounterContext } from "../CounterContext";

export default function CounterProvider({ children }: { children: React.ReactNode }) {
	const [count, setCount] = useState(0);
	const increment = () => setCount((count) => count + 1);
	const decrement = () => setCount((count) => count - 1);
	const reset = () => setCount(0);

	const memoization = useMemo(() => ({ increment, decrement, reset }), []);
	return (
		<>
			{/* context객체에는 value라는 속성이 있고, value에 아래와 같이 작성하면 count라는 상태값, increment, decrement, reset이 공유가 되게 된다. */}
			{/* <CounterContext value={{ count, increment, decrement, reset }}>
        {children}
      </CounterContext> */}
			<CounterActionContext value={memoization}>
				<CounterContext value={{ count }}>{children}</CounterContext>
			</CounterActionContext>
		</>
	);
}
