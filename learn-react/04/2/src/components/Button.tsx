export default function Button({
	children,
	type,
}: {
	children: React.ReactNode;
	type?: "submit" | "reset" | "button";
}) {
	return (
		<>
			{/* 콘텐츠가 있는 문법 => <시작태그>....</종료태그> */}

			{/* 콘텐츠가 없는 문법 */}
			<button type={type} style={{ zoom: 2.0 }}>
				{children}
			</button>
			{/* children 속성을 사용해서 컴포넌트 태그 내부 내용 사용 가능 */}
		</>
	);
}
