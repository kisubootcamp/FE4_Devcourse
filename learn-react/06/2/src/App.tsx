import { useRef, useState } from "react";

// useRef 흑
// - 값이 변경돼도 리렌더링이 발생하지 않는 변수
// - JSX 요소를 참조하는 경우

// 컴포넌트가 다시 그려진다(리-렌더링)
// 함수가 다시 실행된다는 것.

// 리액트가 관리하는 함수
// 실시간성이 보장됨
// export default function App() {
// 	console.log("App Component");
// 	// const [cnt, setCnt] = useState(0);
// 	const cnt = useRef(0);
// 	// let cnt = 0;
// 	const [count, setCount] = useState(0);
// 	const increment = () => {
// 		// setCnt((cnt) => cnt + 1);
// 		cnt.current += 1;
// 		// cnt += 1;
// 		setCount((count) => count + Math.floor(Math.random() * 10) + 1);
// 	};
// 	const printConsole = () => {
// 		// 몇번 클릭했는지 콘솔로 출력
// 		// console.log(`지금까지 ${cnt}번 클릭됨`);
// 		console.log(`지금까지 ${cnt.current}번 클릭됨`);
// 	};

// 	return (
// 		<>
// 			<h1 className="text-3xl underline">count: {count}</h1>
// 			<button onClick={increment}>증가</button> <br />
// 			<button onClick={printConsole}>increment 몇 번 눌림?</button>
// 		</>
// 	);
// }

// 값의 유지는 필요하되, 리렌더링이 발생하지 않는 변수가 필요할 때 -> useRef
// JSX 요소에 대한 참조가 필요할 때
export default function App() {
	const [email, setEmail] = useState("");
	const emailRef = useRef<HTMLInputElement>(null); // input타입이랑 연결해줬기 때문에 제네릭 타입 적어줘야 됨.

	const [pw, setPw] = useState("");
	const pwRef = useRef<HTMLInputElement>(null);

	const isSubmitting = useRef(false);
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (isSubmitting.current) return; // 2초 이내에 2번 이상 로그인 버튼 눌리지 않음.

		if (!email) {
			alert("이메일을 입력해주세요");
			// (document.querySelector("input[type='text']") as HTMLInputElement).focus(); // 자바스크립트였으면 이런식으로 구현가능.
			// 하지만 리액트에서는 document라는 객체로 접근하는 것보다 useRef로 생성된 ref객체로 요소에 접근하는게 더 권장된다.
			// 따라서 document로 접근하는 이 방법은 오리지널 돔을 건들이기 때문에 리액트에서는 권장되지 않는다.
			emailRef.current?.focus();
			return; // 이메일을 입력하지 않으면 alert 발생
		}

		if (!pw) {
			alert("비밀번호를 입력해주세요");
			pwRef.current?.focus();
			return; // 비밀번호를 입력하지 않으면 alert 발생
		}

		isSubmitting.current = true;

		// 2초 정도 걸리는 작업
		console.log("로그인됨");
		setTimeout(() => {
			isSubmitting.current = false;
		}, 2000);
	};
	return (
		<>
			<form action="" onSubmit={handleSubmit}>
				{/* ref 속성은 리액트에서만 쓸 수 있는 속성으로, ref 속성을 useRef랑 연결해주면 document query selector로 직접 선택한 것과 똑같은 값이 emailRef에 할당되게 된다. */}
				<input ref={emailRef} type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
				<input ref={pwRef} type="password" value={pw} onChange={(e) => setPw(e.target.value)} />
				<button type="submit" disabled={isSubmitting.current}>
					로그인
				</button>
			</form>
		</>
	);
}
