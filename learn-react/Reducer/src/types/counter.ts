export enum CounterActionType {
  INCREMENT = "INCREMENT",
  DECREMENT = "DECREMENT",
  RESET = "RESET",
}

export type CounterAction = {
  type: CounterActionType;
};
