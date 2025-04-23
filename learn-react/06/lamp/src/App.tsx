import { useState } from "react";
import b_on from "./assets/images/b_on.png";
import b_off from "./assets/images/b_off.png";

export default function App() {
  const [imgSrc, setImgSrc] = useState(false);
  const changeImg = () => {
    setImgSrc((imgSrc) => !imgSrc);
  };
  return (
    <>
      <img src={imgSrc ? b_on : b_off} alt="전구이미지" onClick={changeImg} />
    </>
  );
}
