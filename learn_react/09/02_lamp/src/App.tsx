import b_off from "./images/b_off.png";
import a_off from "./images/b_on.png";

import { useState } from "react";

export default function App() {
  const [lamp, setLamp] = useState(false);
  const lampChanger = () => {
    setLamp((lamp) => !lamp);
  };
  return (
    <>
      <img src={lamp ? b_off : a_off} onClick={lampChanger} alt="전구이미지" />
    </>
  );
}
