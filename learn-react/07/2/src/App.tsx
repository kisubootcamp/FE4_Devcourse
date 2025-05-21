// import { useState } from "react";
// import Count from "./components/Count";
// import Timer from "./components/Timer";
import AutoSave from "./components/AutoSave";

export default function App() {
  // const [isShow, setIsShow] = useState(false);

  return (
    <>
      <AutoSave />
      {/* {isShow && <Timer />}
      <button onClick={() => setIsShow((isShow) => !isShow)}>토글</button> */}
    </>
  );
}
