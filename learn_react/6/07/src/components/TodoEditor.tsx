import { useState } from "react";

export default function TodoEditor({
  setInput,
}: {
  setInput: React.Dispatch<React.SetStateAction<string[]>>;
}) {
  const [value, setValue] = useState("");

  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const textSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (value === "") return;
    setValue("");
    setInput((input) => [...input, value]);
  };

  return (
    <div className="flex p-4">
      <input
        type="text"
        placeholder="Enter a new todo"
        className="flex-grow p-2 border rounded-l-md focus:outline-none"
        value={value}
        onChange={inputChange}
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition-colors"
        onClick={textSubmit}
      >
        Add
      </button>
    </div>
  );
}
