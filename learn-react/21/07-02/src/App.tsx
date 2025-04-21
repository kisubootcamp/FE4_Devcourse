import React, { useState } from "react";
import travel from "./assets/images/travel.png";
import seoul from "./assets/images/seoul.jpg";
import london from "./assets/images/london.jpg";
import paris from "./assets/images/paris.jpg";
import newyork from "./assets/images/newyork.jpg";
export default function App() {
  const [image, setImage] = useState(seoul);
  const [src, setSrc] = useState("서울");
  const [sFont, setSFont] = useState("bold");
  const [lFont, setLFont] = useState("normal");
  const [pFont, setPFont] = useState("normal");
  const [nFont, setNFont] = useState("normal");
  const isSImage = () => {
    setSFont((sFont) => (sFont = "bold"));
    setLFont((lFont) => (lFont = "normal"));
    setNFont((nFont) => (nFont = "normal"));
    setPFont((pFont) => (pFont = "normal"));

    setImage(seoul);
    setSrc("서울");
  };
  const isLImage = () => {
    setSFont((sFont) => (sFont = "normal"));
    setLFont((lFont) => (lFont = "bold"));
    setNFont((nFont) => (nFont = "normal"));
    setPFont((pFont) => (pFont = "normal"));

    setImage(london);
    setSrc("런던");
  };
  const isPImage = () => {
    setSFont((sFont) => (sFont = "normal"));
    setPFont((pFont) => (pFont = "bold"));
    setLFont((lFont) => (lFont = "normal"));
    setNFont((nFont) => (nFont = "normal"));

    setImage(paris);
    setSrc("파리");
  };
  const isNImage = () => {
    setSFont((sFont) => (sFont = "normal"));
    setNFont((nFont) => (nFont = "bold"));
    setLFont((lFont) => (lFont = "normal"));
    setPFont((pFont) => (pFont = "normal"));

    setImage(newyork);
    setSrc("뉴욕");
  };
  return (
    <>
      <div className="absolute top-10 left-10 text-3xl cursor-pointer">
        <div className="light-icon fa-regular fa-sun"></div>
        <div className="dark-icon fa-regular fa-moon hidden"></div>
      </div>
      <div className="flex justify-center items-center min-h-screen">
        <div className="flex flex-col items-center gap-4  max-w-[500px]">
          <img src={travel} alt={"로고"} width={80} />
          <ul className="flex items-center antialiased justify-around w-full">
            <li>
              <a href="#" onClick={isSImage} style={{ fontWeight: sFont }}>
                Seoul
              </a>
            </li>
            <li>
              <a href="#" onClick={isLImage} style={{ fontWeight: lFont }}>
                London
              </a>
            </li>
            <li>
              <a href="#" onClick={isPImage} style={{ fontWeight: pFont }}>
                Paris
              </a>
            </li>
            <li>
              <a href="#" onClick={isNImage} style={{ fontWeight: nFont }}>
                NewYork
              </a>
            </li>
          </ul>
          <div>
            <img src={image} alt={src} />
            {/* <img src={london} alt={"런던"} />
            <img src={paris} alt={"파리"} />
            <img src={newyork} alt={"뉴욕"} /> */}
          </div>
        </div>
      </div>
    </>
  );
}
