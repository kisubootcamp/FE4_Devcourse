import { useTodoStore } from "../../../stores/todoStore";

export default function TodoList() {
  const todos = useTodoStore((state) => state.todos);
  const deleteTodo = useTodoStore((state) => state.deleteTodo);
  const toggleTodo = useTodoStore((state) => state.toggleTodo);
  return (
    <>
      <ul className="space-y-2">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center justify-between p-3 bg-gray-50 rounded"
          >
            <div className="flex items-center space-x-2">
              <input
                checked={todo.done}
                onChange={() => toggleTodo(todo.id)}
                type="checkbox"
                className="h-4 w-4 text-blue-600"
              />
              <span className={todo.done ? "line-through text-gray-400" : ""}>
                {todo.text}
              </span>
            </div>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="text-red-500 hover:text-red-600"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <p className="text-center text-gray-500">No todos yet. Add some!</p>
    </>
  );
}
