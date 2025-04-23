export enum TodoActionType {
  ADD_TODO = "ADD_TODO",
  TOGGLE_TODO = "TOGGLE_TODO",
  REMOVE_TODO = "REMOVE_TODO",
}

export type TodoType = {
  id: number;
  text: string;
  done: boolean;
};

export type TodoActionReducer =
  | {
      type: TodoActionType.ADD_TODO;
      payload: string;
    }
  | {
      type: TodoActionType.TOGGLE_TODO;
      payload: number;
    }
  | {
      type: TodoActionType.REMOVE_TODO;
      payload: number;
    };
