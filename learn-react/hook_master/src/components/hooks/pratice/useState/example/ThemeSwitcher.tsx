import { useEffect, useState } from "react";

const themes = [
	{ name: "Light", bg: "bg-gray-100", text: "text-gray-800" },
	{ name: "Dark", bg: "bg-gray-800", text: "text-white" },
	{ name: "Blue", bg: "bg-blue-500", text: "text-white" },
	{ name: "Green", bg: "bg-green-500", text: "text-white" },
];

export default function ThemeSwitcher() {
	const [currentTheme, setCurrentTheme] = useState(0);
	const [message, setMessage] = useState("Hello, World!");

	const theme = themes[currentTheme]; // (해결법 2)
	// const [theme, setTheme] = useState(themes[currentTheme]); // (해결법 1)

	const nextTheme = () => {
		setCurrentTheme((currentTheme) => (currentTheme + 1) % themes.length); 
		// setTheme(themes[currentTheme]); // (잘못된 해결법) 한단계 늦게 업데이트 된다. currnetTheme이 0 -> 1이 되어도 여기서는 아직 currentTheme은 0이기 때문에.
	};

	// useEffect(() => {
	// 	setTheme(themes[currentTheme]);
	// }, [currentTheme]); // theme을 상태변수로 사용하려면 이렇게 해결하면 된다.(해결법 1) -> 불필요하게 훅을 많이 사용하기 때문에 다른 방법 사용 (해결법 2)


	return (
		<div className={`${theme.bg} ${theme.text} p-4 rounded-lg transition-colors duration-200`}>
			<div className="space-y-4">
				<input
					type="text"
					className="w-full px-3 py-2 rounded border text-gray-800 bg-white"
					placeholder="Enter your message"
					value={message}
					onChange={(e) => setMessage(e.target.value)}
				/>

				<div className="text-center text-xl font-semibold">{message}</div>

				<button
					onClick={nextTheme}
					className="w-full px-4 py-2 bg-white text-gray-800 rounded hover:bg-gray-100 transition-colors"
				>
					Switch Theme
				</button>
			</div>
		</div>
	);
}
