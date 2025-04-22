export type TodoType = {
  id: number;
  content: string;
  isCompleted: boolean;
};

export enum TodoActionType {
  ADD_TODO = "ADD_TODO",
  TOGGLE_TODO = "TOGGLE_TODO",
  DELETE_TODO = "DELETE_TODO",
}

export type TodoReducerAction =
  | { type: TodoActionType.ADD_TODO; payload: string }
  | { type: TodoActionType.TOGGLE_TODO; payload: number }
  | { type: TodoActionType.DELETE_TODO; payload: number };
