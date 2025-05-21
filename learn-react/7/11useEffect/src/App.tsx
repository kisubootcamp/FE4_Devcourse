// side effect : 컴포넌트에서 화면에 렌더링하는 작업을 제외한 모든 작업.
// 컴포넌트의 렌더링 외, 모든 과정 외부에서 발생하는 일
// -> useEffect 훅, 사이
// 드이펙트를 실행하기 위한 시점을 제공해줌
// 컴포넌트가 생성될 때 (마운트)

import { useState } from "react";
import Count from "./components/Count";
// import Timer from "./components/Timer";
import AutoSave from "./components/AutoSave";

export default function App() {
  const [isShow, setIsShow] = useState(false);

  return (
    <>
      {isShow && <Count />}
      <button onClick={() => setIsShow((isShow) => !isShow)}>토글</button>
      {/* <Timer /> */}
      <AutoSave />
    </>
  );
}
