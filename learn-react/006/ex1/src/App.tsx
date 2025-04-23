import { useState } from "react";

export default function App() {
  const [lamp, setLamp] = useState<string>("on");
  const changeHandler = () => {
    setLamp((lamp) => (lamp === "on" ? "off" : "on"));
  };
  return (
    <>
      <img src={`./src/images/b_${lamp}.png`} alt="전구이미지" onClick={changeHandler} />
    </>
  );
}
