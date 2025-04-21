import { useRef, useState } from "react";

export default function TodoEditor({
  setList,
}: {
  setList: React.Dispatch<
    React.SetStateAction<{ id: number; content: string }[]>
  >;
}) {
  const [value, setValue] = useState("");
  const idCount = useRef(1);
  const addItemToList = () => {
    setList((list) => [...list, { id: idCount.current++, content: value }]);
    setValue("");
  };
  return (
    <div className="flex p-4">
      <input
        type="text"
        value={value}
        placeholder="Enter a new todo"
        className="flex-grow p-2 border rounded-l-md focus:outline-none"
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        onClick={addItemToList}
        className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition-colors"
      >
        Add
      </button>
    </div>
  );
}
