import travel from "./assets/images/travel.png";
import seoul from "./assets/images/seoul.jpg";
import london from "./assets/images/london.jpg";
import paris from "./assets/images/paris.jpg";
import newyork from "./assets/images/newyork.jpg";
import { useState } from "react";
export default function App() {
  const [location, setLocation] = useState<
    "seoul" | "london" | "paris" | "newyork"
  >("seoul");
  const handleLocation = (
    location: "seoul" | "london" | "paris" | "newyork"
  ) => {
    setLocation(location);
  };
  const locationImage = {
    seoul: seoul,
    london: london,
    paris: paris,
    newyork: newyork,
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
              <a href="#" onClick={() => handleLocation("seoul")}>
                Seoul
              </a>
            </li>
            <li>
              <a href="#" onClick={() => handleLocation("london")}>
                London
              </a>
            </li>
            <li>
              <a href="#" onClick={() => handleLocation("paris")}>
                Paris
              </a>
            </li>
            <li>
              <a href="#" onClick={() => handleLocation("newyork")}>
                NewYork
              </a>
            </li>
          </ul>
          <div>
            <img src={locationImage[location]} alt={location} />
          </div>
        </div>
      </div>
    </>
  );
}
