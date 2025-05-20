import travel from "./assets/images/travel.png";
import seoul from "./assets/images/seoul.jpg";
import london from "./assets/images/london.jpg";
import paris from "./assets/images/paris.jpg";
import newyork from "./assets/images/newyork.jpg";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
export default function App() {
  const areas = ["Seoul", "London", "Paris", "NewYork"];
  const images: { [key: string]: string } = {
    seoul,
    london,
    paris,
    newyork,
  };

  const [location, setLocation] = useState("Seoul");

  const locationChangeHandler = (text: string) => {
    setLocation(text);
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
            {areas.map((area, index) => {
              return (
                <>
                  <li
                    className={twMerge(location === area && "font-bold")}
                    onClick={() => locationChangeHandler(area)}
                    key={index}
                  >
                    <a href="#">{area}</a>
                  </li>
                </>
              );
            })}
          </ul>
          <div>
            {areas.map((area) => {
              return (
                location === area && (
                  <img src={images[area.toLowerCase()]} alt={"서울"} />
                )
              );
            })}
            {/* <img src={location} alt={"서울"} /> */}
            {/* <img src={london} alt={"런던"} />
            <img src={paris} alt={"파리"} />
            <img src={newyork} alt={"뉴욕"} /> */}
          </div>
        </div>
      </div>
    </>
  );
}
