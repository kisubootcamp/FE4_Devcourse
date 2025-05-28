// 사이드 이펙트 (side effect)
// useEffect 훅
// 컴포넌트가 생성될 때 (마운트)
// 컴포넌트의 상태 값이 변경될 때 (업데이트)
// 컴포넌트가 해제될 때 (언마운트)

// import { useState } from "react";
// import Count from "./components/Count";
// import Timer from "./components/Timer";
import AutoSave from "./components/AutoSave";

// 의존성 배열

export default function App() {
	// const [text, setIsShow] = useState(false);
	return (
		<>
			{/* {isShow && <Timer />}
			<br />
			<button onClick={() => setIsShow((isShow) => !isShow)}>토글</button> */}
			{/* <Timer /> */}
			<AutoSave />
		</>
	);
}
