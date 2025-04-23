import { useState } from "react";
import london from "./assets/images/london.jpg";
import newyork from "./assets/images/newyork.jpg";
import paris from "./assets/images/paris.jpg";
import seoul from "./assets/images/seoul.jpg";
import travel from "./assets/images/travel.png";

export default function App() {
  const cityImg: {
    [key: string]: string;
  } = {
    서울: seoul,
    런던: london,
    파리: paris,
    뉴욕: newyork,
  };
  const [city, setCity] = useState("서울");
  const clickHandler = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    value: string
  ) => {
    e.preventDefault();
    setCity(value);
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
              <a href="#" onClick={(e) => clickHandler(e, "서울")}>
                Seoul
              </a>
            </li>
            <li>
              <a href="#" onClick={(e) => clickHandler(e, "런던")}>
                London
              </a>
            </li>
            <li>
              <a href="#" onClick={(e) => clickHandler(e, "파리")}>
                Paris
              </a>
            </li>
            <li>
              <a href="#" onClick={(e) => clickHandler(e, "뉴욕")}>
                NewYork
              </a>
            </li>
          </ul>
          <div>
            <img src={cityImg[city]} alt={city} />
          </div>
        </div>
      </div>
    </>
  );
}
