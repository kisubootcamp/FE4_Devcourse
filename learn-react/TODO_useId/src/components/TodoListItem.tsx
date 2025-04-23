import { TodoType } from "../types/todo";
import { useId } from "react";
export default function TodoListItem({
  todo,
  handleIsCompleteTodo,
  handleDeleteTodo,
}: {
  todo: TodoType;
  handleIsCompleteTodo: (id: number) => void;
  handleDeleteTodo: (id: number) => void;
}) {
  // 고유 id 생성
  const id = useId();
  return (
    <li className="flex items-center justify-between p-3 border-b hover:bg-gray-100 transition-colors">
      <div className="flex items-center w-full">
        <input
          type="checkbox"
          id={id}
          checked={todo.isCompleted}
          onChange={() => handleIsCompleteTodo(todo.id)}
          className="mr-3 h-4 w-4 text-blue-500 focus:ring-blue-400"
        />
        <label
          htmlFor={id}
          className={`${todo.isCompleted ? "line-through" : ""} w-full`}
        >
          {todo.content}
        </label>
      </div>
      <button
        onClick={() => handleDeleteTodo(todo.id)}
        className="text-red-500 hover:text-red-700 ml-4"
      >
        Delete
      </button>
    </li>
  );
}
