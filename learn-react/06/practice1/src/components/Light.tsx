import b_on from "../assets/images/b_on.png";
import b_off from "../assets/images/b_off.png";
import { useState } from "react";

export default function Light() {
  const [click, setClick] = useState<boolean>(false);
  const toggleHandler = () => {
    setClick((click) => !click);
  };
  return (
    <>
      <div className="w-full h-screen bg-zinc-700">
        <img
          src={click ? b_on : b_off}
          alt={click ? "전구 on" : "전구 off"}
          onClick={toggleHandler}
          className="mx-auto cursor-pointer"
        ></img>
      </div>
    </>
  );
}
