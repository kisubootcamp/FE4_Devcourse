export function themeReducer(state: number, action: { type: string }) {
  switch (action.type) {
    case "SWITCHTHEME":
      return (state + 1) % 4;
    default:
      return state;
  }
}
