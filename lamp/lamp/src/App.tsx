import { useState } from "react";
import b_off from "./assets/b_off.png";
import b_on from "./assets/b_on.png";

export default function App() {
  const [image, setImage] = useState(false);
  const isOnOff = () => {
    setImage((image) => !image);
  };
  return (
    <>
      <img src={image ? b_on : b_off} alt="" onClick={isOnOff} />
    </>
  );
}
