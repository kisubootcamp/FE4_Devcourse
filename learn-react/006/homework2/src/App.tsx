import travel from "./assets/images/travel.png";
import seoul from "./assets/images/seoul.jpg";
import london from "./assets/images/london.jpg";
import paris from "./assets/images/paris.jpg";
import newyork from "./assets/images/newyork.jpg";
import { useState } from "react";
export default function App() {
  const [tabImg, setTabImg] = useState(seoul);
  const [tabAlt, setTabAlt] = useState("서울");
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
                onClick={() => {
                  setTabImg(seoul);
                  setTabAlt("서울");
                }}
              >
                Seoul
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => {
                  setTabImg(london);
                  setTabAlt("런던");
                }}
              >
                London
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => {
                  setTabImg(paris);
                  setTabAlt("파리");
                }}
              >
                Paris
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => {
                  setTabImg(newyork);
                  setTabAlt("뉴욕");
                }}
              >
                NewYork
              </a>
            </li>
          </ul>
          <div>
            <img src={tabImg} alt={tabAlt} />
          </div>
        </div>
      </div>
    </>
  );
}
