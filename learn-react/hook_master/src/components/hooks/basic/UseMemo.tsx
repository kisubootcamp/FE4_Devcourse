import { useMemo, useState } from "react";

const initialItems = new Array(29_999_999).fill(0).map((_, i) => {
	return {
		id: i,
		selected: i === 29_999_998,
	};
});

// useMemo(콜백함수, 의존성배열)
// 콜백함수에서 리턴하는 값을 메모이제이션한다.
export default function UseMemo() {
	const [count, setCount] = useState(0);

	// 불필요한 연산을 만들어준 것
	// 3000만개의 배열 데이터를 렌더링 마다 재생성하고 있음
	const [items] = useState(initialItems);

	const selectItems = useMemo(() => items.find((item) => item.selected), [items]); // 만약 의존성배열 빈배열로 두면 items가 변해서 selected: i가 다른 값이 되어도 계속 29999998이기 때문에 의존성배열 [items]로 두어야 변화를 감지할 수 있다.
	// const selectItems = items.find((item) => item.selected);
	// {id: 29_999_998, selected: true} <- 어차피 selectItems는 항상 이거기 때문에 리렌더링할 때마다 매번 찾는게 아니라 그냥 값을 저장해두는 거지.

	return (
		<>
			<h1>Count: {count}</h1>
			<button onClick={() => setCount((prevCount) => prevCount + 1)}>증가</button>
			<p>{selectItems?.id}</p>
		</>
	);
}
