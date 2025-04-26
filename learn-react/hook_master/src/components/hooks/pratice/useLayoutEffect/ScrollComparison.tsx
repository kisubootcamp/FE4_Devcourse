import { useEffect, useLayoutEffect, useRef } from "react";

const items = Array.from({ length: 402 }, (_, i) => `Item ${i + 1}`);

export default function ScrollComparison() {
	const refEffect = useRef<HTMLDivElement>(null);
	const refLayout = useRef<HTMLDivElement>(null); // ref객체는 써도 되고 안써도 됨. => 안쓰게 되면 div에 id값 주고, useEffect 내부에서 document.querySlector("id명")을 변수 el에 할당하고 el.scrollTo({top: el.scrolHeight})하면 됨. 그런데 리액트가 가상돔을 사용하는 것을 권장하기 때문에 ref객체를 활용할 수 있으면 ref객체를 쓰는게 좋다. body태그에 클래스를 주려고 한다거나 하는 상황은 ref객체를 쓸 수 없기 때문에 그런 경우에는 document를 쓰면 된다.

	useEffect(() => {
		refEffect.current?.scrollTo({ top: refEffect.current.scrollHeight });
	}, []); // 새로고침 계속하면 깜빡 거리는 현상이 보임.
	useLayoutEffect(() => {
		refLayout.current?.scrollTo({ top: refLayout.current.scrollHeight });
	}, []); // 새로고침 계속해도 깜빡거리지 않음. 내가 API 호출을 하거나 스톱워치처럼 값을 변경시키는게 아니라, 실제로 DOM에 접근해서 스크롤을 이동하거나 배경색을 바꾸거나 위치를 이동시키거나 이런 DOM 조작을 할거면 useLayoutEffect를 쓰면 된다.

	const boxClass = "border rounded-lg h-48 w-full overflow-auto bg-gray-100 p-2";

	return (
		<div className="space-y-8 p-8 max-w-2xl mx-auto">
			{/* useEffect 스크롤 박스 */}
			<div>
				<h2 className="text-lg font-semibold mb-2">useEffect 스크롤</h2>
				<div ref={refEffect} className={boxClass}>
					{items.map((text) => (
						<div key={text} className="py-1">
							{text}
						</div>
					))}
				</div>
				<p className="mt-2 text-sm text-gray-600">
					렌더 후 스크롤 → 처음엔 위에서 시작하다가 아래로 내려가는 걸 볼 수 있습니다.
				</p>
			</div>

			{/* useLayoutEffect 스크롤 박스 */}
			<div>
				<h2 className="text-lg font-semibold mb-2">useLayoutEffect 스크롤</h2>
				<div ref={refLayout} className={boxClass}>
					{items.map((text) => (
						<div key={text} className="py-1">
							{text}
						</div>
					))}
				</div>
				<p className="mt-2 text-sm text-gray-600">렌더 전 스크롤 → 처음부터 맨 아래에 렌더되어 깜빡임이 없습니다.</p>
			</div>
		</div>
	);
}
