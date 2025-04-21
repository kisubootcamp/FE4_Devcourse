import travel from "./assets/images/travel.png";
import seoul from "./assets/images/seoul.jpg";
import london from "./assets/images/london.jpg";
import paris from "./assets/images/paris.jpg";
import newyork from "./assets/images/newyork.jpg";
import {useState} from "react";
import {twMerge} from "tailwind-merge";
export default function App() {
  const [city, setCity] = useState("Seoul");
  const changeCity = (city: string) => {
    setCity(city);
  };
  return (
    <>
      <div className='absolute top-10 left-10 text-3xl cursor-pointer'>
        <div className='light-icon fa-regular fa-sun'></div>
        <div className='dark-icon fa-regular fa-moon hidden'></div>
      </div>
      <div className='flex justify-center items-center min-h-screen'>
        <div className='flex flex-col items-center gap-4  max-w-[500px]'>
          <img src={travel} alt={"로고"} width={80} />
          <ul className='flex items-center antialiased justify-around w-full'>
            <li
              onClick={() => changeCity("Seoul")}
              className={twMerge(city === "Seoul" && "font-bold")}
            >
              <a href='#'>Seoul</a>
            </li>
            <li
              onClick={() => changeCity("London")}
              className={twMerge(city === "London" && "font-bold")}
            >
              <a href='#'>London</a>
            </li>
            <li
              onClick={() => changeCity("Paris")}
              className={twMerge(city === "Paris" && "font-bold")}
            >
              <a href='#'>Paris</a>
            </li>
            <li
              onClick={() => changeCity("NewYork")}
              className={twMerge(city === "NewYork" && "font-bold")}
            >
              <a href='#'>NewYork</a>
            </li>
          </ul>
          <div>
            {city === "Seoul" && <img src={seoul} alt={"서울"} />}
            {city === "London" && <img src={london} alt={"런던"} />}
            {city === "Paris" && <img src={paris} alt={"파리"} />}
            {city === "NewYork" && <img src={newyork} alt={"뉴욕"} />}
          </div>
        </div>
      </div>
    </>
  );
}
