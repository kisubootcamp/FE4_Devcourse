import { useState } from "react";
import AutoSave from "./components/AutoSave";

export default function App() {
  const [isShow, setIsShow] = useState(false);
  return (
    <>
      {isShow && <AutoSave />}
      <button onClick={() => setIsShow((isShow) => !isShow)}>토글</button>
    </>
  );
}
