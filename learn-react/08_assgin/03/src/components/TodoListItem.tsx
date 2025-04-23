import { useState } from "react";
import { Todo } from "./Todo";

type Props = {
  todo: Todo;
};

export default function TodoListItem({ todo }: Props) {
  const [check, setCheck] = useState(false);
  const checkHandler = () => {
    setCheck((prev) => !prev);
  };
  return (
    <li className="flex items-center justify-between p-3 border-b hover:bg-gray-100 transition-colors">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={check}
          onChange={checkHandler}
          className="mr-3 h-4 w-4 text-blue-500 focus:ring-blue-400"
        />
        <span className={`${check ? "line-through" : ""}`}>{todo.text}</span>
      </div>
      <button className="text-red-500 hover:text-red-700 ml-4">Delete</button>
    </li>
  );
}
