import styled from "styled-components";
// CSS-IN-JS
// CSS를 런타임에 동적으로 생성해서 적용하는 원리
// document.createElement('style')

const Title = styled.h1`
	color: #ff0000;
	text-align: center;
`; // 태그드 리터럴 템플릿

const Button = styled.button`
	background: transparent;
	border-radius: 3px;
	border: 2px solid #bf4f74;
	color: #bf4f74;
	margin: 0 1em;
	padding: 0.25em 1em;
`;

export default function App() {
	return (
		<>
			<Title>App Component</Title>
			<Button>button</Button>
		</>
	);
}
