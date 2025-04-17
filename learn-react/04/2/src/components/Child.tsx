type ChildProps = {
	message: string;
	num: number;
	arr: string[];
	obj: { name: string; age: number };
	isLoggedIn: boolean;
	onClick: () => void;
	name?: string;
	value: string | number | unknown[]; // unknown[]일 경우 그대로 쓰면 에러가 남
	// style: { fontSize: string; color: string };
	style: React.CSSProperties;
	Header: React.ReactNode;
	Content: React.ReactNode;
	Footer: React.ReactElement;
};

export default function Child(props: ChildProps) {
	// 6
	return (
		<>
			<h1>{props.message}</h1>
			<h1>{props.num}</h1>
			<h1>{JSON.stringify(props.arr, null, 2)}</h1>
			<h1>{JSON.stringify(props.obj, null, 2)}</h1>
			<h1>{props.isLoggedIn ? "로그인됨" : "로그인 안됨"}</h1>
			<button onClick={props.onClick}>클릭</button>
			<h1>{props.name || "홍길동"}</h1>
			<h1>{JSON.stringify(props.value, null, 2)}</h1>
			<h1 style={props.style}>TEST</h1>
			{/* 10. */}
			{props.Header}
			{props.Content}
			{props.Footer}
		</>
	);
}
