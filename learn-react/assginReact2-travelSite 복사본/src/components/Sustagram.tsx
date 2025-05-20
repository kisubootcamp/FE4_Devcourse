import travel from "./assets/images/travel.png";
import seoul from "./assets/images/seoul.jpg";
import london from "./assets/images/london.jpg";
import paris from "./assets/images/paris.jpg";
import newyork from "./assets/images/newyork.jpg";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";

export default function Sustagram() {
  const areas = ["Seoul", "London", "Pairs", "NewYork"];
  const images: { [key: string]: string } = {
    seoul,
    london,
    paris,
    newyork,
  };
  const [location, setLocation] = useState("Seoul");
  const handleLocation = (location: string) => {
    setLocation(location);
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
            {areas.map((area) => (
              <li
                onClick={() => handleLocation(area)}
                className={twMerge(location === area && "font-bold")}>
                <a href="#">{area}</a>
              </li>
            ))}
          </ul>
          <div>
            {areas.map((area) => {
              return (
                location === area && (
                  <img src={images[area.toLocaleLowerCase()]} alt={area} />
                )
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
// import travel from "./assets/images/travel.png";
// import seoul from "./assets/images/seoul.jpg";
// import london from "./assets/images/london.jpg";
// import paris from "./assets/images/paris.jpg";
// import newyork from "./assets/images/newyork.jpg";
// import React, { useState } from "react";
// import { twMerge } from "tailwind-merge";

// export default function App() {
//   const [location, setLocation] = useState("Seoul");
//   const handleLocation = (location: string) => {
//     setLocation(location);
//   };
//   return (
//     <>
//       <div className="absolute top-10 left-10 text-3xl cursor-pointer">
//         <div className="light-icon fa-regular fa-sun"></div>
//         <div className="dark-icon fa-regular fa-moon hidden"></div>
//       </div>
//       <div className="flex justify-center items-center min-h-screen">
//         <div className="flex flex-col items-center gap-4  max-w-[500px]">
//           <img src={travel} alt={"로고"} width={80} />
//           <ul className="flex items-center antialiased justify-around w-full">
//             <li
//               onClick={() => handleLocation("Seoul")}
//               className={twMerge(location === "Seoul" && "font-bold")}>
//               <a href="#">Seoul</a>
//             </li>
//             <li
//               onClick={() => handleLocation("London")}
//               className={twMerge(location === "London" && "font-bold")}>
//               <a href="#">London</a>
//             </li>
//             <li
//               onClick={() => handleLocation("Paris")}
//               className={twMerge(location === "Paris" && "font-bold")}>
//               <a href="#">Paris</a>
//             </li>
//             <li
//               onClick={() => handleLocation("NewYork")}
//               className={twMerge(location === "NewYork" && "font-bold")}>
//               <a href="#">NewYork</a>
//             </li>
//           </ul>
//           <div>
//             {location === "Seoul" && <img src={seoul} alt={"서울"} />}
//             {location === "London" && <img src={london} alt={"런던"} />}
//             {location === "Paris" && <img src={paris} alt={"파리"} />}
//             {location === "NewYork" && <img src={newyork} alt={"뉴욕"} />}
//             {/* <img src={london} alt={"런던"} />
//             <img src={paris} alt={"파리"} />
//             <img src={newyork} alt={"뉴욕"} /> */}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
