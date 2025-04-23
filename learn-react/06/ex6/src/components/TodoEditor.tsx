import { useState } from "react";

export default function TodoEditor({
  todos,
  setTodos,
}: {
  todos: string[];
  setTodos: React.Dispatch<React.SetStateAction<string[]>>;
}) {
  const [text, setText] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setText(value);
  };

  const handleClick = () => {
    if (text.length === 0) {
      alert("할일을 작성해주세요");
      return;
    }
    setTodos([...todos, text]);
    setText("");
  };
  return (
    <div className="flex p-4">
      <input
        type="text"
        placeholder="Enter a new todo"
        value={text}
        onChange={handleChange}
        className="flex-grow p-2 border rounded-l-md focus:outline-none"
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition-colors cursor-pointer"
        onClick={handleClick}
      >
        Add
      </button>
    </div>
  );
}
