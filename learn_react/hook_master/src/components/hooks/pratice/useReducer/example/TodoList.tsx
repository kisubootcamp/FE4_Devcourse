import { useReducer } from "react";
import { TodoListReducer } from "../reducer/todo.reducer";

export default function TodoList() {
  const [state, dispatch] = useReducer(TodoListReducer, {
    todos: [],
    input: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (state.input.trim()) {
      dispatch({ type: "ADD_TODO", payload: state.input });
    }
  };

  return (
    <div className="space-y-4">
      <form className="flex space-x-2" onSubmit={handleSubmit}>
        <input
          value={state.input}
          onChange={(e) =>
            dispatch({ type: "CHANGE_INPUT", payload: e.target.value })
          }
          type="text"
          className="flex-1 px-3 py-2 border rounded"
          placeholder="Add a new todo"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          Add
        </button>
      </form>

      <ul className="space-y-2">
        {state.todos.length > 0 ? (
          state.todos.map((todo) => (
            <li
              key={todo.id}
              className="flex items-center justify-between p-3 bg-gray-50 rounded"
            >
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-blue-600"
                  checked={todo.done}
                  onChange={() =>
                    dispatch({ type: "TOGGLE_TODO", payload: todo.id })
                  }
                />
                <span className={todo.done ? "line-through text-gray-400" : ""}>
                  {todo.text}
                </span>
              </div>
              <button
                className="text-red-500 hover:text-red-600"
                onClick={() =>
                  dispatch({ type: "DELETE_TODO", payload: todo.id })
                }
              >
                Delete
              </button>
            </li>
          ))
        ) : (
          <p className="text-center text-gray-500">No todos yet. Add some!</p>
        )}
      </ul>
    </div>
  );
}
