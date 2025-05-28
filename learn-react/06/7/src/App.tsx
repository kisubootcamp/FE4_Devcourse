import travel from "./assets/images/travel.png";
import seoul from "./assets/images/seoul.jpg";
import london from "./assets/images/london.jpg";
import paris from "./assets/images/paris.jpg";
import newyork from "./assets/images/newyork.jpg";
import { useState } from "react";
export default function App() {
	const [city, setCity] = useState(seoul);
	const [alt, setAlt] = useState("서울");

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
								onClick={() => {
									setCity(seoul);
									setAlt("서울");
								}}>
								Seoul
							</a>
						</li>
						<li>
							<a
								href="#"
								onClick={() => {
									setCity(london);
									setAlt("런던");
								}}>
								London
							</a>
						</li>
						<li>
							<a
								href="#"
								onClick={() => {
									setCity(paris);
									setAlt("파리");
								}}>
								Paris
							</a>
						</li>
						<li>
							<a
								href="#"
								onClick={() => {
									setCity(newyork);
									setAlt("뉴욕");
								}}>
								NewYork
							</a>
						</li>
					</ul>
					<div>
						<img src={city} alt={alt} />
						{/* <img src={seoul} alt={"서울"} />
						<img src={london} alt={"런던"} />
            <img src={paris} alt={"파리"} />
            <img src={newyork} alt={"뉴욕"} /> */}
					</div>
				</div>
			</div>
		</>
	);
}
