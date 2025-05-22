// useLayoutEffect 훅
// useEffect 훅과 99% 동일한데, 실행 시점에 차이가 있다
// useEffect -> 컴포넌트가 렌더링 된 후 실행
// useLayoutEffect -> 컴포넌트가 렌더링 되기 전 동기적으로 실행

import { useEffect, useLayoutEffect, useState } from "react";

export default function UseLayoutEffect() {
	const [count, setCount] = useState(0);
	const now = performance.now();
	while (performance.now() - now < 200) {
		// Artificial delay -- do nothing
	}
	// useEffect(() => {
	// 	if (count === 10) setCount(0);
	// }, [count]); // 10이 됐다가 0으로 다시 곧 바뀜

	useLayoutEffect(() => {
		if (count === 10) setCount(0);
	}, [count]); // 아예 10으로 바뀌지 않음. useLayoutEffect는 화면을 그리기 전에 작업을 완료하기 때문에. 따라서 DOM을 조작할 때는 useLayoutEffect를 사용하는게 더 좋다. 화면을 그리기 전에 조작을 끝내고 오기 위해서.

	return (
		<>
			<h1>Count: {count} </h1>
			<button onClick={() => setCount(10)}>클릭</button>
		</>
	);
}
