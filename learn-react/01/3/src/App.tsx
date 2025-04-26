import styled from "styled-components";

export default function App() {
	// CSS-IN-JS
	const Title = styled.h1`
		font-size: 50px;
		color: red;
	`; // 태그드 리터럴 템플릿
	return (
		<>
			<Title>App Component</Title>
		</>
	);
}
