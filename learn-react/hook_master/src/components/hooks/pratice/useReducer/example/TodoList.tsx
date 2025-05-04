import { useReducer, useState } from "react";
import { todoReducer } from "../reducer/todo.reducer";

export default function TodoList() {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [value, setValue] = useState("");
  return (
    <div className="space-y-4">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({ type: "ADDTODO", payload: value });
          setValue("");
        }}
        className="flex space-x-2"
      >
        <input
          type="text"
          className="flex-1 px-3 py-2 border rounded"
          placeholder="Add a new todo"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          Add
        </button>
      </form>

      <ul className="space-y-2">
        {todos.map((todo) => (
          <li className="flex items-center justify-between p-3 bg-gray-50 rounded">
            <div className="flex items-center space-x-2">
              <input
                checked={todo.done}
                type="checkbox"
                className="h-4 w-4 text-blue-600"
                onChange={() =>
                  dispatch({ type: "TOGGLETODO", paylaod: todo.id })
                }
              />
              <span className={todo.done ? "line-through text-gray-400" : ""}>
                {todo.text}
              </span>
            </div>
            <button
              onClick={() => dispatch({ type: "DELETETODO", payload: todo.id })}
              className="text-red-500 hover:text-red-600"
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
