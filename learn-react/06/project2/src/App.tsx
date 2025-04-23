import travel from "./assets/images/travel.png";
import seoul from "./assets/images/seoul.jpg";
import london from "./assets/images/london.jpg";
import paris from "./assets/images/paris.jpg";
import newyork from "./assets/images/newyork.jpg";
import { useState } from "react";

export default function App() {
  const [tab, setTab] = useState({ pictureSrc: seoul, pictureAlt: "서울" });

  const tabHandler = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    switch (e.currentTarget.innerText) {
      case "Seoul":
        setTab({ pictureSrc: seoul, pictureAlt: "서울" });
        break;
      case "London":
        setTab({ pictureSrc: london, pictureAlt: "런던" });
        break;
      case "Paris":
        setTab({ pictureSrc: paris, pictureAlt: "파리" });
        break;
      case "NewYork":
        setTab({ pictureSrc: newyork, pictureAlt: "뉴욕" });
        break;
    }
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
              <a onClick={tabHandler} href="#">
                Seoul
              </a>
            </li>
            <li>
              <a onClick={tabHandler} href="#">
                London
              </a>
            </li>
            <li>
              <a onClick={tabHandler} href="#">
                Paris
              </a>
            </li>
            <li>
              <a onClick={tabHandler} href="#">
                NewYork
              </a>
            </li>
          </ul>
          <div>
            <img src={tab.pictureSrc} alt={tab.pictureAlt} />
            {/* <img src={london} alt={"런던"} />
            <img src={paris} alt={"파리"} />
            <img src={newyork} alt={"뉴욕"} /> */}
          </div>
        </div>
      </div>
    </>
  );
}
