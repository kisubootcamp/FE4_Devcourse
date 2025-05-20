import { useId } from "react";
import { twMerge } from "tailwind-merge";
export default function TodoListItem({
  todo,
  toggleTodo,
  deleteTodo,
}: {
  key: number;
  todo: TodoItem;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}) {
  const uuid = useId();
  // useId : 중복되지 않는 고유한 값을 만들어줌
  return (
    <li className="flex items-center justify-between p-3 border-b hover:bg-gray-100 transition-colors">
      <div className="flex items-center">
        <input
          id={uuid}
          type="checkbox"
          checked={todo.done}
          onChange={() => toggleTodo(todo.id)}
          className="mr-3 h-4 w-4 text-blue-500 focus:ring-blue-400"
        />
        <label htmlFor={uuid} className={twMerge(todo.done && "line-through")}>
          {todo.text}
        </label>
      </div>
      <button
        className="text-red-500 hover:text-red-700 ml-4"
        onClick={() => deleteTodo(todo.id)}>
        Delete
      </button>
    </li>
  );
}
