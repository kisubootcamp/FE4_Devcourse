import { useState } from "react";
import { twMerge } from "tailwind-merge";

export default function TodoListItem({
  text,
  deleteItem,
}: {
  text: string;
  deleteItem: () => void;
}) {
  const [toggle, setToggle] = useState(false);

  return (
    <li className="flex items-center justify-between p-3 border-b hover:bg-gray-100 transition-colors">
      <div className="flex items-center">
        <input
          type="checkbox"
          className="mr-3 h-4 w-4 text-blue-500 focus:ring-blue-400"
          checked={toggle}
          onChange={() => setToggle(!toggle)}
        />
        <span className={toggle ? twMerge("text-red-600 line-through") : ""}>
          {text}
        </span>
      </div>
      <button
        className="text-red-500 hover:text-red-700 ml-4"
        onClick={deleteItem}
      >
        Delete
      </button>
    </li>
  );
}
