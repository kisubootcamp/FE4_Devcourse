import travel from "./assets/images/travel.png";
import seoul from "./assets/images/seoul.jpg";
import london from "./assets/images/london.jpg";
import paris from "./assets/images/paris.jpg";
import newyork from "./assets/images/newyork.jpg";
import { useState } from "react";

export default function App() {
  const [img, setImg] = useState(seoul);
  const [alt, setAlt] = useState("서울");

  const changeHandler = (city: string, alt: string) => {
    setImg(city);
    setAlt(alt);
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
                onClick={() => changeHandler(seoul, "서울")}
                style={img === seoul ? { fontWeight: "bold" } : {}}
              >
                Seoul
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => changeHandler(london, "런던")}
                style={img === london ? { fontWeight: "bold" } : {}}
              >
                London
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => changeHandler(paris, "파리")}
                style={img === paris ? { fontWeight: "bold" } : {}}
              >
                Paris
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => changeHandler(newyork, "뉴욕")}
                style={img === newyork ? { fontWeight: "bold" } : {}}
              >
                NewYork
              </a>
            </li>
          </ul>
          <div>
            <img src={img} alt={alt} />
            {/* <img src={london} alt={"런던"} />
            <img src={paris} alt={"파리"} />
            <img src={newyork} alt={"뉴욕"} /> */}
          </div>
        </div>
      </div>
    </>
  );
}
