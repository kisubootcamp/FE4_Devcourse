const themes = [
  { name: "Light", bg: "bg-gray-100", text: "text-gray-800" },
  { name: "Dark", bg: "bg-gray-800", text: "text-white" },
  { name: "Blue", bg: "bg-blue-500", text: "text-white" },
  { name: "Green", bg: "bg-green-500", text: "text-white" },
];
export type State = {
  theme: number;
  message: string;
};
export type Action =
  | { type: "NEXT_THEME" }
  | { type: "MESSAGE"; payload: string };

export const themeReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "NEXT_THEME":
      return {
        ...state,
        theme: (state.theme + 1) % themes.length,
      };
    case "MESSAGE":
      return {
        ...state,
        message: action.payload,
      };
    default:
      return state;
  }
};
