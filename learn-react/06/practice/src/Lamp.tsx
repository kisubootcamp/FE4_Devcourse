import { useState } from "react";
import bOff from "./assets/images/b_off.png";
import bOn from "./assets/images/b_on.png";

export default function Lamp() {
	const [source, setSouce] = useState(bOff);
	const [lamp, setLamp] = useState(false);

	// 강사님 풀이
	const lamToggleHandler = () => {
		setLamp((lamp) => !lamp);
	};

	const imgHandler = () => {
		setSouce((source) => (source = source === bOff ? bOn : bOff));
	};

	return (
		<>
			<img onClick={imgHandler} src={source} alt="전구이미지" />
			<img onClick={lamToggleHandler} src={lamp ? bOn : bOff} alt={lamp ? "전구 on" : "전구 off"} />
		</>
	);
}
