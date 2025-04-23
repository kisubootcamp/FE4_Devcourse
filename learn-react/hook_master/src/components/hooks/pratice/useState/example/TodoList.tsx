import { useState } from "react";

export default function TodoList() {
  const [todos, setTodos] = useState<
    { id: number; text: string; completed: boolean }[]
  >([]);
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    setTodos([
      ...todos,
      { id: todos.length + 1, text: newTodo, completed: false },
    ]);
    setNewTodo("");
  };

  const handleToggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDeleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleChangeTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  return (
    <div className="space-y-4">
      <form
        className="flex space-x-2"
        onSubmit={(e) => {
          e.preventDefault();
          handleAddTodo();
        }}
      >
        <input
          type="text"
          className="flex-1 px-3 py-2 border rounded"
          placeholder="Add a new todo"
          value={newTodo}
          onChange={handleChangeTodo}
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
          <li
            key={todo.id}
            className="flex items-center justify-between p-3 bg-gray-50 rounded"
          >
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="h-4 w-4 text-blue-600"
                checked={todo.completed}
                onChange={() => handleToggleTodo(todo.id)}
              />
              <span
                className={`${
                  todo.completed ? "line-through text-gray-400" : ""
                }`}
              >
                {todo.text}
              </span>
            </div>
            <button
              className="text-red-500 hover:text-red-600"
              onClick={() => handleDeleteTodo(todo.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      {todos.length === 0 && (
        <p className="text-center text-gray-500">No todos yet. Add some!</p>
      )}
    </div>
  );
}
