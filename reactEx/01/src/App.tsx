import { useState } from "react";
import on from "../public/images/b_on.png";
import off from "../public/images/b_off.png";

export default function App() {
  const [toggleImg, setToggleImg] = useState(false);

  const changeImage = () => {
    setToggleImg((img) => !img);
  };
  return (
    <>
      <img
        src={toggleImg ? on : off}
        alt={toggleImg ? "전구 on" : "전구 off"}
        onClick={changeImage}
      />
    </>
  );
}
