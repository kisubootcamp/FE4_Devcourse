import { useState } from "react";

export default function TodoListItem({
  item,
  deleteTodo,
}: {
  item: { id: number; text: string };
  deleteTodo: (id: number) => void;
}) {
  const [complete, setComplete] = useState(false);
  const completeHandler = () => {
    setComplete((complete) => !complete);
  };

  const deleteHandler = (id: number) => {
    deleteTodo(id);
  };

  return (
    <li
      className="flex items-center justify-between p-3 border-b hover:bg-gray-100 transition-colors"
      key={item.id}
    >
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={complete}
          onChange={completeHandler}
          className="mr-3 h-4 w-4 text-blue-500 focus:ring-blue-400"
        />
        <span style={complete ? { textDecoration: "line-through" } : {}}>
          {item.text}
        </span>
      </div>
      <button
        className="text-red-500 hover:text-red-700 ml-4"
        onClick={() => deleteHandler(item.id)}
      >
        Delete
      </button>
    </li>
  );
}
