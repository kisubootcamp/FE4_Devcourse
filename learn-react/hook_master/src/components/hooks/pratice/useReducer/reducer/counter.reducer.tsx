type actionType =
  | { type: "INCREASE"; payload: number }
  | { type: "DECREASE"; payload: number }
  | { type: "RESET" };

export function counterReducer(state: number, action: actionType) {
  switch (action.type) {
    case "INCREASE":
      return state + action.payload;
    case "DECREASE":
      return state - action.payload;
    case "RESET":
      return 0;
    default:
      return state;
  }
}
