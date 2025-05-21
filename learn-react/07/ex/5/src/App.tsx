import travel from "./assets/images/travel.png";
import seoul from "./assets/images/seoul.jpg";
import { useState } from "react";
import london from "./assets/images/london.jpg";
import paris from "./assets/images/paris.jpg";
import newyork from "./assets/images/newyork.jpg";
import { twMerge } from "tailwind-merge";
// export default function App() {
//   const [location, setLocation] = useState("Seoul");
//   const locationChangeHandler = (location: string) => {
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
//             <li className={twMerge(location === "Seoul" && "font-bold")}
//                onClick={() => locationChangeHandler("Seoul")}>
//               <a href="#">Seoul</a>
//             </li>
//             <li className={twMerge(location === "London" && "font-bold")} onClick={() => locationChangeHandler("London")}>
//               <a href="#">London</a>
//             </li>
//             <li className={twMerge(location === "Paris" && "font-bold")} onClick={() => locationChangeHandler("Paris")}>
//               <a href="#">Paris</a>
//             </li>
//             <li className={twMerge(location === "NewYork" && "font-bold")} onClick={() => locationChangeHandler("NewYork")}>
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

export default function App() {
  const areas = ["Seoul", "London", "Paris", "NewYork"];
  const images: { [key: string]: string } = {
    seoul,
    london,
    paris,
    newyork, //키와 값이 일치해서 생략
  };
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
            {areas.map((area) => (
              <li
                className={twMerge(location === "Seoul" && "font-bold")}
                onClick={() => setLocation(area)}
              >
                <a href="#">{area}</a>
              </li>
            ))}
          </ul>
          <div>
            {areas.map((area) => {
              return (
                location === area && (
                  <img src={images[area.toLocaleLowerCase()]} alt={area} />
                ) //images[area.toLocaleLowerCase()]대신 area.toLocaleLowerCase()하면 "seoul"처럼 문자열로 나오므로 에러
                //이 문자열을 키값으로 하는 seoul값 받아오도록 사용해야함함
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
