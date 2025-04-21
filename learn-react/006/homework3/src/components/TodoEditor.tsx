import { useState } from "react";

export default function TodoEditor({ addTodo }: { addTodo: (todo: string) => void }) {
  const [input, setInput] = useState("");
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  const addTodoList = () => {
    if (!input) {
      alert("텍스트를 입력하세요!");
      return;
    }
    addTodo(input.trim()); // 양쪽 공백제거
    setInput("");
  };
  return (
    <div className="flex p-4">
      <input
        type="text"
        value={input}
        onChange={changeHandler}
        placeholder="Enter a new todo"
        className="flex-grow p-2 border rounded-l-md focus:outline-none"
      />
      <button
        onClick={addTodoList}
        className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition-colors"
      >
        Add
      </button>
    </div>
  );
}
