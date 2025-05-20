export const themeSwitcherReducer = (
  state: number,
  action: { type: string; payload?: number }
) => {
  switch (action.type) {
    case "toggle":
      return (state + 1) % (action.payload ?? 4);
    default:
      return state;
  }
};
