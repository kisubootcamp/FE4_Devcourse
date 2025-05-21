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
  const theme = themes[currentTheme];
  const nextTheme = () => {
    setCurrentTheme((currentTheme) => currentTheme + 1);
  };
  //const [theme,setTheme]=useState(themes[currentTheme]);
  //const nextTheme=()=>{setCurrentTheme((currentTheme)=>currentTheme+1); //0->1
  // setTheme(themes[currentTheme]);};//0
  // 으로 하면
  //두번 클릭해야 넘어감(한단계 반응이 늦음=>비동기 업데이트(setCurrentTheme에서 업데이트한 currentTheme이 바로 업데이트 되지 못함))

  //  const nextTheme=()=>{setCurrentTheme((currentTheme)=>{
  // const current=currentTheme+1;
  // setTheme(themes[current]);
  // return current;}};
  // 로하면 실행이 되나 setCurrentTheme이 두번씩 호출됨(그러니까 동작이 됨)

  //const [theme,setTheme]=useState(themes[currentTheme]);
  //const nextTheme=()=>{setCurrentTheme((currentTheme)=>(currentTheme+1)%themes.length); //0->1
  // useEffect(()=>{
  // setTheme(themes[currentTheme]);},[currentTheme]);
  // 로써도됨

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
          onClick={nextTheme}
          className="w-full px-4 py-2 bg-white text-gray-800 rounded hover:bg-gray-100 transition-colors"
        >
          Switch Theme
        </button>
      </div>
    </div>
  );
}
