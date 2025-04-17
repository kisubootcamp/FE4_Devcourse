export default function Child({
	message,
	age,
	fruits,
	user,
	isLoggedIn,
	onClick,
	name = "홍길동", // 또는 name만 하고 뒤에서 반환문에서 <h1>{name || "홍길동"}</h1>
	value,
	style,
	Header,
	Content,
	Footer,
}: {
	message: string;
	age: number;
	fruits: string[];
	user: { name: string; age: number };
	isLoggedIn: boolean;
	onClick: () => void;
	name?: string;
	value: string | number | unknown[];
	// style: { fontSize: string; color: string };
	style: React.CSSProperties; // 넘어오는 값이 css속성이면 바로 타입이 통과된다. css 속성이 아닌 값을 할당하게 되면 에러가 나지는 않고 css랑 바인딩할때 내부적으로 무시되게끔 알아서 처리해준다.
	Header: React.ReactNode; // React.ReactNode 또는 React.ReactElement
	Content: React.ReactNode;
	Footer: React.ReactNode;
}) {
	function printLoggedIn(isLogged: boolean): string {
		if (isLogged) {
			return "로그인됨";
		} else {
			return "로그인 안됨";
		}
	}

	return (
		<>
			<h1>1. {message}</h1>
			<h1>2. {age}</h1>
			<h1>3. {fruits}</h1>
			<h1>
				4. {user.name} {user.age}
			</h1>
			<h1>5. {printLoggedIn(isLoggedIn)}</h1>
			<h1>5-1. {isLoggedIn ? "로그인됨" : "로그인 안됨"}</h1>
			<button onClick={onClick}>6. 클릭하세요</button>
			<h1>7. {name}</h1>
			<h1>8. {JSON.stringify(value, null, 2)}</h1>
			<h1 style={style}>9. 텍스트</h1>
			{Header}
			{Content}
			{Footer}
		</>
	);
}
