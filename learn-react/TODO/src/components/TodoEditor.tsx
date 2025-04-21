import { useState } from "react";

export default function TodoEditor({
  setTodos,
}: {
  setTodos: (todos: string) => void;
}) {
  const [content, setContent] = useState("");

  const handleChangeContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  const handleSubmit = () => {
    setTodos(content);
    setContent("");
  };

  return (
    <div className="flex p-4">
      <input
        type="text"
        value={content}
        onChange={handleChangeContent}
        placeholder="Enter a new todo"
        className="flex-grow p-2 border rounded-l-md focus:outline-none"
      />
      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition-colors"
      >
        Add
      </button>
    </div>
  );
}
