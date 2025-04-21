import { useState } from "react";

type Props = {
  add: (text: string) => void;
};
export default function TodoEditor({ add }: Props) {
  const [input, setInput] = useState("");
  const addHandler = () => {
    if (input.trim()) {
      add(input.trim());
      setInput("");
    }
  };

  return (
    <div className="flex p-4">
      <input
        type="text"
        placeholder="Enter a new todo"
        className="flex-grow p-2 border rounded-l-md focus:outline-none"
        value={input}
        onChange={(e) => setInput(e.target.value)}
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
