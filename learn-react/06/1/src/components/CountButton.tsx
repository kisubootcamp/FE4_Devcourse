export default function CountButton({
	decrement,
	reset,
	increment,
}: {
	decrement: () => void;
	reset: () => void;
	increment: () => void;
}) {
	return (
		<>
			<button onClick={decrement}>감소</button>
			<button onClick={reset}>0(리셋)</button>
			<button onClick={increment}>증가</button>
		</>
	);
}
