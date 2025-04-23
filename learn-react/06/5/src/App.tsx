//문제점:폰트 굵어지도록은 구현 못함
import travel from "./assets/images/travel.png";
import seoul from "./assets/images/seoul.jpg";
import { useState } from "react";
import london from "./assets/images/london.jpg";
import paris from "./assets/images/paris.jpg";
import newyork from "./assets/images/newyork.jpg";
export default function App() {
  const [city, setCity] = useState(seoul);
  const images: { [key: string]: string } = {
    seoul: "서울",
    london: "런던",
    paris: "파리",
    newyork: "뉴욕",
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
                onClick={(e) => {
                  e.preventDefault();
                  setCity(seoul);
                }}
              >
                Seoul
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setCity(london);
                }}
              >
                London
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setCity(paris);
                }}
              >
                Paris
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setCity(newyork);
                }}
              >
                NewYork
              </a>
            </li>
          </ul>
          <div>
            <img src={city} alt={images[city]} />
            {/* <img src={london} alt={"런던"} />
            <img src={paris} alt={"파리"} />
            <img src={newyork} alt={"뉴욕"} /> */}
          </div>
        </div>
      </div>
    </>
  );
}
