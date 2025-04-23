import travel from "./assets/images/travel.png";
import seoul from "./assets/images/seoul.jpg";
import london from "./assets/images/london.jpg";
import paris from "./assets/images/paris.jpg";
import newyork from "./assets/images/newyork.jpg";
import { useState } from "react";
const images: { [key: string]: string } = {
  Seoul: seoul,
  London: london,
  Paris: paris,
  Ny: newyork,
};
export default function App() {
  const [cityImg, setCtiyImg] = useState("Seoul");
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
              <a onClick={() => setCtiyImg("Seoul")} href="#">
                Seoul
              </a>
            </li>
            <li>
              <a onClick={() => setCtiyImg("London")} href="#">
                London
              </a>
            </li>
            <li>
              <a onClick={() => setCtiyImg("Paris")} href="#">
                Paris
              </a>
            </li>
            <li>
              <a onClick={() => setCtiyImg("Ny")} href="#">
                NewYork
              </a>
            </li>
          </ul>
          <div>
            <img src={images[cityImg]} alt={cityImg} />
          </div>
        </div>
      </div>
    </>
  );
}
