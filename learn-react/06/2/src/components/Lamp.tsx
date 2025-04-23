import { useState } from "react";
import lampOff from "../assets/images/b_off.png";
import lampOn from "../assets/images/b_on.png";

export default function Lamp() {
  const [lamp, setLamp] = useState(false);
  const onOffLampHandler = () => {
    setLamp((lamp) => !lamp);
  };
  return (
    <>
      <img
        src={lamp ? lampOn : lampOff}
        alt="전구 꺼짐"
        onClick={onOffLampHandler}
      />
    </>
  );
}
