/* eslint-disable @typescript-eslint/no-unused-vars */
// useCallback 훅
// useCallback 훅은 컴포넌트가 리렌더링될 때마다 함수를 새로 생성하는 것을 방지합니다.
// useCallback은 메모이제이션된 함수를 반환합니다.
// useCallback(함수, 의존성배열)
import React, { useCallback, useState } from "react";

// ChildA를 메모이제이션 했음에도 적용이 되지 않고 있는것을 알 수 있다. 이유는 전달된 props가 변경되었기 때문에 컴포넌트의 리렌더링을 유발하고 있기 때문이다.
// 그래서 만약 ChildA에 전달하는 값을 {10} 이렇게 숫자를 전달하게 되면 메모이제이션이 잘 된다.
const ChildA = React.memo(function ChildA({ increment }: { increment: () => void }) {
	console.log("ChildA");
	return (
		<>
			<h1>ChildA</h1>
			<ChildB />
		</>
	);
});

function ChildB() {
	console.log("ChildB");
	return (
		<>
			<h1>ChildB</h1>
			<ChildC />
		</>
	);
}

function ChildC() {
	console.log("ChildC");
	return (
		<>
			<h1>ChildC</h1>
		</>
	);
}

export default function UseCallback() {
	console.log("UseCallback");
	const [count, setCount] = useState(0);
	// increment에 할당된 함수가 메모리 값(0x01)이 할당되었을 것이다.
	// 그리고 나서 다시 리렌더링되면 메모리값도 달라지게 된다.
	// 따라서 전달되는 props가 달라졌다고 생각해서 리렌더링이 발생해서 메모이제이션이 안되는 거다.
  // -> useCallback으로 묶어준다. 그러면 useCallback은 함수의 주솟값을 메모리에 저장하고, 의존성 배열이 변경되지 않았다면 저장해두었던 메모리주소를 반환해준다. 따라서 더 이상 주소값이 바뀌지 않는다.
  // useCallback은 함수를 메모이제이션할 때 사용한다.
	const increment = useCallback(() => {
		setCount((count) => count + 1);
	}, []);

	return (
		<>
			<h1>UseCallback</h1>
			<h2>Count: {count}</h2>
			<button
				onClick={() => {
					setCount((count) => count + 1);
				}}
			>
				Increment Count
			</button>
			<ChildA increment={increment} />
		</>
	);
}
