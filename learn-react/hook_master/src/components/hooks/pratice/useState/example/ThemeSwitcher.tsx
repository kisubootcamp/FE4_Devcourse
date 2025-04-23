import { useState } from "react";

const themes = [
  { name: "Light", bg: "bg-gray-100", text: "text-gray-800" },
  { name: "Dark", bg: "bg-gray-800", text: "text-white" },
  { name: "Blue", bg: "bg-blue-500", text: "text-white" },
  { name: "Green", bg: "bg-green-500", text: "text-white" },
];

export default function ThemeSwitcher() {
  const [currentTheme, setCurrentTheme] = useState(0);
  const [message, setMessage] = useState("Hello, World!");
  // const [theme, setTheme] = useState(themes[currentTheme]);
  const theme = themes[currentTheme]; // 리렌더링으로 재정의
  const nextTheme = () => {
    setCurrentTheme((currentTheme) => (currentTheme + 1) % themes.length); // 0 -> 1, 1 -> 2 숫자의 증가폭은 배열을 넘어가지 않음
    // setTheme(themes[currentTheme]); // 0, 1
  }; // 상태 업데이트 함수는 항상 순수해야 한다.
  // 비동기 실행으로 바로 반영이 되지 않는다.
  // 상태 업데이트 함수 내에서 상태 업데이트 함수를 사용하는 것은 안티패턴이다.

  // useEffect(() => {
  //   setTheme(themes[currentTheme]);
  // }, [currentTheme]);

  return (
    <div
      className={`${theme.bg} ${theme.text} p-4 rounded-lg transition-colors duration-200`}
    >
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
          className="w-full px-4 py-2 bg-white text-gray-800 rounded hover:bg-gray-100 transition-colors"
          onClick={nextTheme}
        >
          Switch Theme
        </button>
      </div>
    </div>
  );
}
