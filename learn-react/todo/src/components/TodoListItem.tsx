import { ActionDispatch, useId } from "react";
import { twMerge } from "tailwind-merge";

export default function TodoListItem({
  todo,
  dispatch,
}: {
  todo: TodoItem;
  dispatch: ActionDispatch<[action: TodoReducerAction]>;
}) {
  const uId = useId();
  return (
    <li className="flex items-center justify-between p-3 border-b hover:bg-gray-100 transition-colors">
      <div className="flex items-center">
        <input
          id={uId}
          type="checkbox"
          checked={todo.done}
          onChange={() => dispatch({ type: "TOGGLE_TODO", payload: todo.id })}
          className="mr-3 h-4 w-4 text-blue-500 focus:ring-blue-400"
        />
        <label htmlFor={uId} className={twMerge(todo.done && "line-through")}>
          {todo.text}
        </label>
      </div>
      <button
        onClick={() => dispatch({ type: "DELETE_TODO", payload: todo.id })}
        className="text-red-500 hover:text-red-700 ml-4"
      >
        Delete
      </button>
    </li>
  );
}
