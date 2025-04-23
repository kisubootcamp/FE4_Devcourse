export enum TodoActionType {
  ADD = "ADD",
  DELETE = "DELETE",
  TOGGLE = "TOGGLE",
}

export interface TodoType {
  id: number;
  text: string;
  completed: boolean;
}

type TodoAction =
  | { type: TodoActionType.ADD; payload: string }
  | { type: TodoActionType.DELETE; payload: number }
  | { type: TodoActionType.TOGGLE; payload: number };

export const todoReducer = (state: TodoType[], action: TodoAction) => {
  switch (action.type) {
    case TodoActionType.ADD:
      return [
        ...state,
        { id: Date.now(), text: action.payload, completed: false },
      ];
    case TodoActionType.DELETE:
      return state.filter((todo) => todo.id !== action.payload);
    case TodoActionType.TOGGLE:
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    default:
      return state;
  }
};
