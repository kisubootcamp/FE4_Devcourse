import { useState } from "react";
import Count from "./components/Count";
import AutoSave from "./components/AutoSave";
export default function App() {
  const [isShow, setIsShow] = useState(false);
  return (
    <>
      {isShow && <Count />}
      <AutoSave />
      {/* {isShow&&<Timer/>} => 만약 useEffect안쓰면 timer의 setInterval이 중첩되어 time이 엄청나게 늘어남=> 한번만 사용되는 useEffect를 사용!*/}
      <button onClick={() => setIsShow((isShow) => !isShow)}>토글</button>
    </>
  );
}
