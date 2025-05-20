import travel from "./assets/images/travel.png";
import seoul from "./assets/images/seoul.jpg";
import london from "./assets/images/london.jpg";
import paris from "./assets/images/paris.jpg";
import newyork from "./assets/images/newyork.jpg";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";

export default function App() {
  const citys = ["Seoul", "London", "Paris", "NewYork"];
  const images: { [key: string]: string } = { seoul, london, paris, newyork };
  const [location, setLocation] = useState("Seoul");

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
            {citys.map((city) => (
              <li className={twMerge(location === city && "font-bold")}>
                <a href="#" onClick={() => setLocation(city)}>
                  {city}
                </a>
              </li>
            ))}
          </ul>
          <div>
            <img src={images[location.toLowerCase()]} alt={location} />
            {/* <img src={london} alt={"런던"} />
            <img src={paris} alt={"파리"} />
            <img src={newyork} alt={"뉴욕"} /> */}
          </div>
        </div>
      </div>
    </>
  );
}
