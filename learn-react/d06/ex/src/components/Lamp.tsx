import lampOn from "../assets/b_on.png";
import lampOff from "../assets/b_off.png";
import { useState } from "react";

export default function Lamp() {
  const [lamp, setLamp] = useState(false);
  const changeLamp = () => {
    setLamp((lamp) => !lamp);
  };

  return (
    <>
      <img
        src={lamp ? lampOn : lampOff}
        alt={lamp ? "lamp on" : "lamp off"}
        onClick={changeLamp}
      />
    </>
  );
}
