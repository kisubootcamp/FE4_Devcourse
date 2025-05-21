import { useState } from "react";
import b_off from "./assets/images/b_off.png";
import b_on from "./assets/images/b_on.png";
export default function App() {
  const [lamp, setLamp] = useState(false);
  const clickHandler = () => {
    setLamp((lamp) => !lamp);
  };
  return (
    <>
      <img src={lamp ? b_on : b_off} alt="전구이미지" onClick={clickHandler} />
    </>
  );
}
