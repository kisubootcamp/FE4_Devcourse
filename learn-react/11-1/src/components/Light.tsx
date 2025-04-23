import { useState } from "react";
import On from "../assets/images/b_on.png";
import Off from "../assets/images/b_off.png";

function Light() {
  const [isOn, setIsOn] = useState(false);

  const toggleLight = () => {
    setIsOn((prev) => !prev);
  };

  const lightSrc = isOn ? On : Off;

  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <img
        src={lightSrc}
        alt="light"
        className="cursor-pointer"
        onClick={toggleLight}
      />
    </div>
  );
}

export default Light;
