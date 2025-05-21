import { useReducer, useState } from "react";
import { twMerge } from "tailwind-merge";

type TodoItem = {
  id: number;
  text: string;
  done: boolean;
};

type TodoReducerAction =
  | { type: "ADD_TODO"; text: string }
  | { type: "TOGGLE_TODO"; id: number }
  | { type: "DELETE_TODO"; id: number };

function todosReducer(todos: TodoItem[], action: TodoReducerAction) {
  switch (action.type) {
    case "ADD_TODO":
      return [...todos, { id: Math.random(), text: action.text, done: false }];
    case "TOGGLE_TODO":
      return todos.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    case "DELETE_TODO":
      return todos.filter((todo) => todo.id !== action.id);
    default:
      return todos;
  }
}

export default function TodoList() {
  const [todos, dispatchTodos] = useReducer(todosReducer, []);
  const [input, setInput] = useState("");

  const addTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input.trim()) {
      dispatchTodos({ type: "ADD_TODO", text: input });
      setInput("");
    }
  };

  return (
    <div className="space-y-4">
      <form className="flex space-x-2" onSubmit={addTodo}>
        <input
          type="text"
          className="flex-1 px-3 py-2 border rounded"
          placeholder="Add a new todo"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          Add
        </button>
      </form>

      <ul className="space-y-2">
        {todos &&
          todos.map((todo) => (
            <li className="flex items-center justify-between p-3 bg-gray-50 rounded">
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-blue-600"
                  checked={todo.done}
                  onChange={() =>
                    dispatchTodos({ type: "TOGGLE_TODO", id: todo.id })
                  }
                />
                <span
                  className={twMerge(todo.done && "line-through text-gray-400")}
                >
                  {todo.text}
                </span>
              </div>
              <button
                className="text-red-500 hover:text-red-600"
                onClick={() =>
                  dispatchTodos({ type: "DELETE_TODO", id: todo.id })
                }
              >
                Delete
              </button>
            </li>
          ))}
      </ul>

      <p className="text-center text-gray-500">No todos yet. Add some!</p>
    </div>
  );
}
