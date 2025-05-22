// export default function Button({ text }: { text?: string }) {
// 	return (
// 		<>
// 			{/* 콘텐츠가 있는 문법 */}
// 			{/* <시작태그> ... <종료태그> 이때 ...가 콘텐츠 */}

// 			{/* 콘텐츠가 없는 문법 */}
// 			<button>{text || "클릭"}</button> {/* 바꾸려는 부분 button태그의 콘텐츠 부분 -> 지금처럼 props로 콘텐츠를 대체해서 바꿔도 되지만 -> 리액트에서는 다른 방법을 제안하는데, 그 방법은 바로 children 방법 */}
// 		</>
// 	);
// }

// 컴포넌트에 컨텐츠를 전달하는 방법 : children 방법
export default function Button({ children, type }: { children: React.ReactNode; type: "submit" | "reset" | "button" }) {
	// ReactNode는 JSX에서 제공하는 어떤 태그든 다 지원하는 타입이다. 컴포넌트여도 상관이 없는.
	return (
		<>
			<button type={type}>{children}</button>
		</>
	);
}
