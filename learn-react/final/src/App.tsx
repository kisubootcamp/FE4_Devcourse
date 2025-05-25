import { useEffect } from "react";
import CountButtons from "./stores/countButtons";
import CountDisplay from "./stores/countDisplay";
import { useCountStore } from "./stores/countStore";

export default function App() {
	useEffect(() => {
		const unsubscribe = useCountStore.subscribe(
			(state) => state.count,
			(newCount) => console.log("new count: ", newCount)
		);

		return () => unsubscribe();
	}, []);
	return (
		<>
			<CountDisplay />
			<CountButtons />
		</>
	);
}
