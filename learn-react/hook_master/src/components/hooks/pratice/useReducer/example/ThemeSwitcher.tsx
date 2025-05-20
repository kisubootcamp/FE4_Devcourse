import { useReducer } from "react";

const themes = [
  { name: "Light", bg: "bg-gray-100", text: "text-gray-800" },
  { name: "Dark", bg: "bg-gray-800", text: "text-white" },
  { name: "Blue", bg: "bg-blue-500", text: "text-white" },
  { name: "Green", bg: "bg-green-500", text: "text-white" },
];

function messageReducer(
  state: string,
  action: { type: string; payload?: string }
) {
  switch (action.type) {
    case "UPDATE_MESSAGE":
      return action.payload || "";
    default:
      return state;
  }
}

function themeReducer(state: number, action: { type: string }) {
  switch (action.type) {
    case "NEXT_THEME":
      return (state + 1) % themes.length;
    default:
      return state;
  }
}

export default function ThemeSwitcher() {
  const [currentTheme, dispatchCurrentTheme] = useReducer(themeReducer, 0);

  const [message, dispatchMessage] = useReducer(
    messageReducer,
    "Hello, World!"
  );

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
          onChange={(e) =>
            dispatchMessage({ type: "UPDATE_MESSAGE", payload: e.target.value })
          }
        />

        <div className="text-center text-xl font-semibold">{message}</div>

        <button
          className="w-full px-4 py-2 bg-white text-gray-800 rounded hover:bg-gray-100 transition-colors"
          onClick={() => dispatchCurrentTheme({ type: "NEXT_THEME" })}
        >
          Switch Theme
        </button>
      </div>
    </div>
  );
}
