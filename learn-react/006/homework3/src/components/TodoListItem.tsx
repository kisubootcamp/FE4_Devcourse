import { useState } from "react";

export default function TodoListItem({
  todo,
  deleteTodo,
}: {
  todo: string;
  deleteTodo: () => void;
}) {
  const [checked, setChecked] = useState(false);
  const checkdHandler = () => {
    setChecked((checekd) => !checekd);
  };
  const deleteCheckHandler = () => {
    if (checked) {
      deleteTodo();
    } else {
      alert("체크박스를 먼저 표시하세요!");
    }
  };
  return (
    <li className="flex items-center justify-between p-3 border-b hover:bg-gray-100 transition-colors">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={checked}
          onChange={checkdHandler}
          className="mr-3 h-4 w-4 text-blue-500 focus:ring-blue-400"
        />
        <span>{todo}</span>
      </div>
      <button onClick={deleteCheckHandler} className="text-red-500 hover:text-red-700 ml-4">
        Delete
      </button>
    </li>
  );
}
