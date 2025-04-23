import { themeReducer } from "../reducer/theme.reducer";
import { useReducer } from "react";
export default function ThemeSwitcher() {
  const themes = [
    { name: "Light", bg: "bg-gray-100", text: "text-gray-800" },
    { name: "Dark", bg: "bg-gray-800", text: "text-white" },
    { name: "Blue", bg: "bg-blue-500", text: "text-white" },
    { name: "Green", bg: "bg-green-500", text: "text-white" },
  ];
  const [state, dispatch] = useReducer(themeReducer, {
    theme: 0,
    message: "Hello world",
  });
  const theme = themes[state.theme];

  return (
    <div
      className={`${theme.bg} ${theme.text} p-4 rounded-lg transition-colors duration-200`}
    >
      <div className="space-y-4">
        <input
          onChange={(e) =>
            dispatch({ type: "MESSAGE", payload: e.target.value })
          }
          type="text"
          className="w-full px-3 py-2 rounded border text-gray-800 bg-white"
          placeholder="Enter your message"
        />

        <div className="text-center text-xl font-semibold">{state.message}</div>

        <button
          onClick={() => dispatch({ type: "NEXT_THEME" })}
          className="w-full px-4 py-2 bg-white text-gray-800 rounded hover:bg-gray-100 transition-colors"
        >
          Switch Theme
        </button>
      </div>
    </div>
  );
}
