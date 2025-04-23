type State = {
  state: number;
};
type Action = {
  type: string;
  step: number;
};
export const counterReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "INCREMENT":
      return { state: state.state + action.step };
    case "DECREMENT":
      return { state: state.state - action.step };
    case "RESET":
      return { state: 0 };
    default:
      return state;
  }
};
