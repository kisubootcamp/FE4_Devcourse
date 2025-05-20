type Todos = {
  todos: { id: number; text: string; done: boolean }[];
  input: string;
};
type Action =
  | { type: "ADD_TODO"; payload: string }
  | { type: "TOGGLE_TODO"; payload: number }
  | { type: "DELETE_TODO"; payload: number }
  | { type: "CHANGE_INPUT"; payload: string };

export const TodoListReducer = (state: Todos, action: Action): Todos => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: Date.now(),
            text: action.payload,
            done: false,
          },
        ],
        input: "",
      };
    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload ? { ...todo, done: !todo.done } : todo
        ),
      };
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case "CHANGE_INPUT":
      return {
        ...state,
        input: action.payload,
      };
    default:
      return state;
  }
};
