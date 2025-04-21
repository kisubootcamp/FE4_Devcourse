import { useState } from "react";

export default function TodoEditor({
  addTodo,
}: {
  addTodo: (text: string) => void;
}) {
  const [input, setInput] = useState("");
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  const addHandler = () => {
    addTodo(input);
    setInput("");
  };

  return (
    <div className="flex p-4">
      <input
        type="text"
        placeholder="Enter a new todo"
        value={input}
        onChange={changeHandler}
        className="flex-grow p-2 border rounded-l-md focus:outline-none"
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition-colors"
        onClick={addHandler}
      >
        Add
      </button>
    </div>
  );
}
