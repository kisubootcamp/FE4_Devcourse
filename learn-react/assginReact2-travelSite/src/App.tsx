import travel from "./assets/images/travel.png";
import seoul from "./assets/images/seoul.jpg";
import london from "./assets/images/london.jpg";
import paris from "./assets/images/paris.jpg";
import newyork from "./assets/images/newyork.jpg";
import React, { useState } from "react";
export default function App() {
  const [image, setImage] = useState(seoul);
  // 클릭된 값의 value 와 이미지 이름이 같으면 해당 이미지 반환
  const [bold, setBold] = useState();
  // 클릭된 값의 value 와 text 내용이 같으면 bold, 아니면 normal

  const clickName = (e) => {
    e.preventDefault();
    const selected = e.target.textContent;
    setBold(selected);

    if (selected === "Seoul") setImage(seoul);
    else if (selected === "Paris") setImage(paris);
    else if (selected === "London") setImage(london);
    else if (selected === "NewYork") setImage(newyork);
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
              <a
                href="#"
                onClick={clickName}
                style={{ fontWeight: bold === "Seoul" ? "bold" : "normal" }}>
                Seoul
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={clickName}
                style={{ fontWeight: bold === "London" ? "bold" : "normal" }}>
                London
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={clickName}
                style={{ fontWeight: bold === "Paris" ? "bold" : "normal" }}>
                Paris
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={clickName}
                style={{ fontWeight: bold === "NewYork" ? "bold" : "normal" }}>
                NewYork
              </a>
            </li>
          </ul>
          <div>
            <img src={image} alt={bold} onClick={clickName} />
            {/* <img src={london} alt={"런던"} />
            <img src={paris} alt={"파리"} />
            <img src={newyork} alt={"뉴욕"} /> */}
          </div>
        </div>
      </div>
    </>
  );
}
