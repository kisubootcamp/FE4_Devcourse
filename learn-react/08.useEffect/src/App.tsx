// 사이드 이펙트 (side effect)
// useEffect
import { useState } from "react";
// import Count from "./components/Count";
import Timer from "./components/Timer";
import AutoSave from "./components/AutoSave";

// 컴포넌트가 생성될 때(마운트) / 상태값이 변경될 때(업데이트) / 해제될 때(언마운트)
export default function App() {
  const [isShow, setIsShow] = useState(false);

  return (
    <>
      <AutoSave />
      {isShow && <Timer />}
      <button onClick={() => setIsShow((isShow) => !isShow)}>토글</button>
    </>
  );
}
