export default function App() {
	// JSX
	// Javascript + XML - 확장 문법 (언어가 아닌)
	// 메타팀이 React 전용으로 만든 확장 문법이다. 엄청 심플하다.
	// 0. JSX는 HTML과 굉장히 유사하다.
	// 1. 하나의 루트 요소만 반환해야 한다. (첫번째 HTML과의 차이점)
	// 2. 모든 태그는 닫아줘야 한다. (두번째 HTML과의 차이점 : HTML5은 컨텐츠가 없는 태그(빈태그)는 <br>을 권장한다. HTML4에서는 <br/>이 권장이었음)
	// 3. 태그의 속성은 camelCase로 사용해야 한다. ie. maxLength (세번째 HTML과의 차이점)
	// 4. 표현식은 중괄호 안에서 사용할 수 있다. 마치 리터럴 템플릿처럼 쓸 수 있다. (네번째 HTML과의 차이점)
	// 5. 인라인 스타일은 객체로 작성한다. (다섯번째 HTML과의 차이점)
  // 6. 주석 {/*  */}로 작성한다. (여섯번째 HTML과의 차이점 : <!---->가 주석이다.)
	const uname = "yeonseo";
	return (
		<>
			<h1>Hello, World!</h1>
			<br />
			<input type="text" maxLength={3}></input>
			<h1>Hello, World! {10 + 20}</h1>
			<h1>Hello, World! {uname}</h1>
			<h1 style={{ color: "red", textDecoration: "underline" }}>haha</h1>
		</>
	);
}
