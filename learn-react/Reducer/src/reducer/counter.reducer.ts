import { CounterAction, CounterActionType } from "../types/counter";

export function counterReducer(count: number, action: CounterAction) {
  switch (action.type) {
    case CounterActionType.INCREMENT:
      return count + 1;
    case CounterActionType.DECREMENT:
      return count - 1;
    case CounterActionType.RESET:
      return 0;
    default:
      return count;
  }
}
