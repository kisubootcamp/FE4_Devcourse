import { useState } from "react";
import Counter from "./components/Counter";
import Timer from "./components/Timer";
import AutoSave from "./components/AutoSave";
export default function App() {
  const [isShow, setIsShow] = useState(true);
  return (
    <>
      {isShow && <Counter />}
      {!isShow && <Timer />}
      <br />
      <br />
      <button onClick={() => setIsShow(!isShow)}>
        {isShow ? "숨김" : "보임"}
      </button>
      <br />
      <br />
      <AutoSave />
    </>
  );
}
