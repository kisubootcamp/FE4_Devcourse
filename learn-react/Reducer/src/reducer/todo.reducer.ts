import { TodoActionReducer, TodoActionType, TodoType } from "../types/todo";

export function todoReducer(todos: TodoType[], action: TodoActionReducer) {
  switch (action.type) {
    case TodoActionType.ADD_TODO:
      return [
        ...todos,
        {
          id: todos.length + 1,
          text: action.payload,
          done: false,
        },
      ];
    case TodoActionType.TOGGLE_TODO:
      return todos.map((todo) =>
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo
      );
    case TodoActionType.REMOVE_TODO:
      return todos.filter((todo) => todo.id !== action.payload);
    default:
      return todos;
  }
}
