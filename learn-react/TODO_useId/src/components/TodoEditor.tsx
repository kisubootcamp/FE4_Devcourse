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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTodos(content);
    setContent("");
  };

  return (
    <form className="flex p-4" onSubmit={handleSubmit}>
      <input
        type="text"
        value={content}
        placeholder="Enter a new todo"
        className="flex-grow p-2 border rounded-l-md focus:outline-none"
        onChange={handleChangeContent}
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition-colors">
        Add
      </button>
    </form>
  );
}
