// 사이트 이펙트(side effect)
// 컴포넌트에서 화면에 렌더링하는 것을 제외한 모든 행위(이펙트) ex. API 통신, 스토리지 저장, 외부 라이브러리외 소통 등..
// 사이드 이펙트를 처리할 때 사용하는 훅 -> useEffect 훅
// useEffect 훅
// 컴포넌트가 생성 될 때 (마운트)
// 컴포넌트의 상태 값이 변경될 때 (업데이트)
// 컴포넌트가 해제 될 때 (언마운트)
// useEffect는 이렇게 3시점에서만 실행된다.

import { useEffect, useState } from "react";

// 특정 코드를 실행되게 하려면 useEffect훅을 사용한다
export default function Count() {
	const [count, setCount] = useState(0);
	const [name, setName] = useState("");

	// 첫번째 매개변수는 콜백함수, 두번째 매개변수는 의존성 배열
	// 의존성 배열을 빈배열로 설정하면 해당 useEffect는 처음 컴포넌트가 생성 될 때 즉 마운트될 때 한번만 실행된다.
	// state 변경으로 리렌더링 되더라도 다시 실행되지 않는다.
	useEffect(() => {
		console.log("Count Mounted"); // {}안에 적힌 코드는 컴포넌트가 살아있는 동안 한번만 실행된다.

		// useEffect 내부에서 함수를 반환하게 되면 컴포넌트가 언마운트 될 때만 해당 useEffect가 실행된다.
		// 실행했을 때 mounted - unmounted - mounted가 출력되는 이유는 strict 모드에서는 컴포넌트를 마운트 시켰다가 언마운트 시켰다가 마운트 시키는 과정을 거치기 때문에.
		// 즉, Count UnMounted는 컴포넌트가 언마운트될 때만 실행되는게 맞다.
		return () => {
			console.log("Count UnMounted"); // {}안에 적힌 코드는 컴포넌트가 해제된 뒤에 한번만 실행된다.
		};
	}, []);

	// useEffect는 하나의 코드에서 의존성 배열이 다를 경우 여러번 사용해도 된다.
	// 의존성 배열이 같을때도 또 useEffect 만들수는 있지만 작동이 의도한대로 되지 않을 수 있기 때문에 권장하지 않음
	useEffect(() => {
		console.log("count change: " + count);
		console.log("name change: " + name);
	}, [count, name]); // count가 변경되었을 때 실행됨.

	return (
		<>
			<h1>Count: {count}</h1>
			<button onClick={() => setCount((count) => count + 1)}>증가</button>
      <button onClick={() => setName("안녕하세요")}>이름변경</button>
		</>
	);
}
