//import { useState } from "react";
import AutoSave from "./components/AutoSave";

// import Timer from "./components/Timer";

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
