import { useState } from "react";

export default function TodoEditor({ dispatch }: { dispatch: React.Dispatch<TodoReducerAction> }) {
  const [text, setText] = useState("");

  const handleChangeContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setText(text);
    if (!text) {
      alert("내용을 입력하세요.");
      return;
    }

    dispatch({
      type: "ADD_TODO",
      payload: text,
    });
    setText("");
  };

  return (
    <form className="flex p-4" onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
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
