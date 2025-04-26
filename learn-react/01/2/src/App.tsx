// export default function App() {
// 	// JSX -> Javascript XML (확장 문법)
// 	// JSX는 HTML과 유사하다. (시맨틱 태그, 폼 태그)
// 	// 1. 하나의 루트 요소를 반환해야 한다.
// 	// 2. 모든 태그는 닫아줘야된다.
// 	// 3. 모든 태그의 속성은 카멜케이스로 작성해야 한다.
// 	// 3.1 예약된 속성명은 쓸 수 없음, class, label 태그의 for (이건 브라우저 콘솔에서 에러로 알려준다. 어떻게 바꿔야할지)
// 	// 4. 표현식을 출력할 수 있다 -> 중괄호
// 	// 5. 인라인스타일은 객체로 표현해야 함
//   // 6. 주석 : {/* 주석 */}
// 	const name = "yeonseo";
// 	const style = {
// 		color: "orange",
// 		fontSize: "40px",
// 	};
// 	return (
//     // 아래부터 JSX 시작
// 		<>
// 			<h1>App Component H.M.R (Hot Module Reload - 알아서 수정 내용 실시간으로 반영)</h1>
// 			<h1>App Component</h1>
// 			<br />
// 			<label htmlFor="uname">userid</label>
// 			<input id="uname" type="text" readOnly />
// 			<h1 style={{ color: "red", fontSize: "40px" }}>10 + 20 = {10 + 20}</h1>
// 			<h1 className="title" style={style}>
// 				{name}
// 			</h1>
//       {/* 주석 */}
// 		</>
// 	);
// }

import styled from "styled-components";

// 컴포넌트
// 함수에서 JSX를 반환하면 그게 곧 컴포넌트다.
// import Header from "./components/Header.tsx";
// import Main from "./components/Main.tsx";

// function Footer() {
// 	return (
// 		<>
// 			<footer>Footer</footer>
// 		</>
// 	);
// }

// const App = () => {
// 	const name = "Hello";
// 	return (
// 		<>
// 			<h1>App Component {name}</h1>
// 			<Header></Header>
// 			<Main></Main>
// 			<Footer></Footer>
// 		</>
// 	);
// };

// export default App;
// import Nav from "./components/Nav.tsx";
// import Main from "./components/Main.tsx";
// import Footer from "./components/Footer.tsx";
// import Header from "./components/Header";

// export default function App() {
// 	return (
// 		<div>
// 			<h1 className="title">Test</h1>
// 			<Header></Header>
// 			<Nav></Nav>
// 			<Main></Main>
// 			<Footer></Footer>
// 		</div>
// 	);
// }

export default function App() {
	const Title = styled.h1`
		font-size: 1.5em;
		text-align: center;
		color: #bf4f74;
	`;
	return (
		<>
			<Title>App Component</Title>
		</>
	);
}
