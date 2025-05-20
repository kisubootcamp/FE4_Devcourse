export enum CounterActionType {
  INCREMENT = "increment",
  DECREMENT = "decrement",
  RESET = "reset",
}

export const counterReducer = (
  state: number,
  action: { type: CounterActionType; payload?: number }
) => {
  switch (action.type) {
    case CounterActionType.INCREMENT:
      return state + (action.payload ?? 1);
    case CounterActionType.DECREMENT:
      return state - (action.payload ?? 1);
    case CounterActionType.RESET:
      return 0;
    default:
      return state;
  }
};
