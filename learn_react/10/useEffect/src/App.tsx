// side effect
// useEffect 훅 : 시점에 따른 사이트 이펙트를 실행하기 위한 훅
// 내부적으로 component가 생성될 때 (마운트)
// component의 상세 값이 변경될 때 (업데이트)
// component가 해체 될 때 (언마운트)
import { useState } from "react";
import Count from "./components/Count";
import Timer from "./components/Timer";
import AutoSave from "./components/AutoSave";
export default function App() {
  const [isShow, setIsShow] = useState(false);
  return (
    <>
      {isShow && <Count />}
      <button onClick={() => setIsShow((isShow) => !isShow)}>토글</button>
      {isShow && <Timer />}
      <AutoSave></AutoSave>
    </>
  );
}
