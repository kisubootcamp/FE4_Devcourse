interface TodoType {
  id: number;
  text: string;
  done: boolean;
}

type ActionType =
  | { type: "ADDTODO"; payload: string }
  | { type: "TOGGLETODO"; paylaod: number }
  | { type: "DELETETODO"; payload: number };

export function todoReducer(todos: TodoType[], action: ActionType) {
  switch (action.type) {
    case "ADDTODO":
      return [
        ...todos,
        { id: Math.random(), text: action.payload, done: false },
      ];
    case "TOGGLETODO":
      return todos.map((todo) =>
        todo.id === action.paylaod ? { ...todo, done: !todo.done } : todo
      );
    case "DELETETODO":
      return todos.filter((todo) => todo.id !== action.payload);
    default:
      return todos;
  }
}
