import { useReducer, useState } from "react";
import { themeReducer } from "../reducer/theme.reducer";

const themes = [
  { name: "Light", bg: "bg-gray-100", text: "text-gray-800" },
  { name: "Dark", bg: "bg-gray-800", text: "text-white" },
  { name: "Blue", bg: "bg-blue-500", text: "text-white" },
  { name: "Green", bg: "bg-green-500", text: "text-white" },
];

export default function ThemeSwitcher() {
  const [currentTheme, dispatch] = useReducer(themeReducer, 0);
  const [message, setMessage] = useState("");
  const theme = themes[currentTheme];

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

        <div className="text-center text-xl font-semibold">
          {message ? message : "Hello World"}
        </div>

        <button
          onClick={() => dispatch({ type: "SWITCHTHEME" })}
          className="w-full px-4 py-2 bg-white text-gray-800 rounded hover:bg-gray-100 transition-colors"
        >
          Switch Theme
        </button>
      </div>
    </div>
  );
}
