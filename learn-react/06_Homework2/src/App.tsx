import { useState } from "react";
import travel from "./assets/images/travel.png";
import seoul from "./assets/images/seoul.jpg";
import london from "./assets/images/london.jpg";
import paris from "./assets/images/paris.jpg";
import newyork from "./assets/images/newyork.jpg";
import { twMerge } from "tailwind-merge";
export default function App() {
    const [city, setCity] = useState("Seoul");
    const citys = ["Seoul", "London", "Paris", "NewYork"];

    const cityHandler = (city: string) => {
        setCity(city);
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
                        {citys.map((c) => (
                            <li className={twMerge(city === c && "font-bold")}>
                                <a href="#" onClick={() => cityHandler(c)}>
                                    {c}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div>
                        {city === "Seoul" && <img src={seoul} alt={city} />}
                        {city === "London" && <img src={london} alt={city} />}
                        {city === "Paris" && <img src={paris} alt={city} />}
                        {city === "NewYork" && <img src={newyork} alt={city} />}
                    </div>
                </div>
            </div>
        </>
    );
}

/* 풀이 1 */
// import { useState } from "react";
// import travel from "./assets/images/travel.png";
// import seoul from "./assets/images/seoul.jpg";
// import london from "./assets/images/london.jpg";
// import paris from "./assets/images/paris.jpg";
// import newyork from "./assets/images/newyork.jpg";
// import { twMerge } from "tailwind-merge";
// export default function App() {
//     const [city, setCity] = useState("서울");

//     const cityHandler = (city: string) => {
//         setCity(city);
//     };
//     return (
//         <>
//             <div className="absolute top-10 left-10 text-3xl cursor-pointer">
//                 <div className="light-icon fa-regular fa-sun"></div>
//                 <div className="dark-icon fa-regular fa-moon hidden"></div>
//             </div>
//             <div className="flex justify-center items-center min-h-screen">
//                 <div className="flex flex-col items-center gap-4  max-w-[500px]">
//                     <img src={travel} alt={"로고"} width={80} />
//                     <ul className="flex items-center antialiased justify-around w-full">
//                         <li className={twMerge(city === "서울" && "font-bold")}>
//                             <a href="#" onClick={() => cityHandler("서울")}>
//                                 Seoul
//                             </a>
//                         </li>
//                         <li className={twMerge(city === "런던" && "font-bold")}>
//                             <a href="#" onClick={() => cityHandler("런던")}>
//                                 London
//                             </a>
//                         </li>
//                         <li className={twMerge(city === "파리" && "font-bold")}>
//                             <a href="#" onClick={() => cityHandler("파리")}>
//                                 Paris
//                             </a>
//                         </li>
//                         <li className={twMerge(city === "뉴욕" && "font-bold")}>
//                             <a href="#" onClick={() => cityHandler("뉴욕")}>
//                                 NewYork
//                             </a>
//                         </li>
//                     </ul>
//                     <div>
//                         {city === "서울" && <img src={seoul} alt={city} />}
//                         {city === "런던" && <img src={london} alt={city} />}
//                         {city === "파리" && <img src={paris} alt={city} />}
//                         {city === "뉴욕" && <img src={newyork} alt={city} />}
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }

/* 내 풀이 */
// import { useState } from "react";
// import travel from "./assets/images/travel.png";
// import seoul from "./assets/images/seoul.jpg";
// import london from "./assets/images/london.jpg";
// import paris from "./assets/images/paris.jpg";
// import newyork from "./assets/images/newyork.jpg";
// export default function App() {
//     const [city, setCity] = useState("서울");

//     const cityHandler = (city: string) => {
//         setCity(city);
//     };
//     const imageSrc = (city: string) => {
//         switch (city) {
//             case "서울":
//                 return seoul;
//             case "런던":
//                 return london;
//             case "파리":
//                 return paris;
//             case "뉴욕":
//                 return newyork;
//         }
//     };
//     return (
//         <>
//             <div className="absolute top-10 left-10 text-3xl cursor-pointer">
//                 <div className="light-icon fa-regular fa-sun"></div>
//                 <div className="dark-icon fa-regular fa-moon hidden"></div>
//             </div>
//             <div className="flex justify-center items-center min-h-screen">
//                 <div className="flex flex-col items-center gap-4  max-w-[500px]">
//                     <img src={travel} alt={"로고"} width={80} />
//                     <ul className="flex items-center antialiased justify-around w-full">
//                         <li>
//                             <a href="#" onClick={() => cityHandler("서울")}>
//                                 {city === "서울" ? <b>Seoul</b> : "Seoul"}
//                             </a>
//                         </li>
//                         <li>
//                             <a href="#" onClick={() => cityHandler("런던")}>
//                                 {city === "런던" ? <b>London</b> : "London"}
//                             </a>
//                         </li>
//                         <li>
//                             <a href="#" onClick={() => cityHandler("파리")}>
//                                 {city === "파리" ? <b>Paris</b> : "Paris"}
//                             </a>
//                         </li>
//                         <li>
//                             <a href="#" onClick={() => cityHandler("뉴욕")}>
//                                 {city === "뉴욕" ? <b>NewYork</b> : "NewYork"}
//                             </a>
//                         </li>
//                     </ul>
//                     <div>
//                         <img src={imageSrc(city)} alt={city} />
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }
