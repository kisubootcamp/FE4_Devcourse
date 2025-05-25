export default function CountButton({
	plus,
	minus,
	reset,
}: {
	plus: () => void;
	minus: () => void;
	reset: () => void;
}) {
	return (
		<>
			<button onClick={minus}>감소</button>
			<button onClick={reset}>0</button>
			<button onClick={plus}>증가</button>
		</>
	);
}
