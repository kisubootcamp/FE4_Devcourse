import { useState } from "react";
import TodoEditor from "./TodoEditor";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";

export default function Todo() {
  const [input, setInput] = useState("");

  const addBtn = () => {
    if (!input) {
      alert("내용을 입력하세요");
    }
  };

  return (
    <div className="w-[350px] max-w-md mx-auto shadow-lg rounded-lg overflow-hidden bg-white">
      <TodoHeader />
      <TodoEditor value={input} onClick={addBtn} onChange={(e) => setInput(e.target.value)} />
      <TodoList />
    </div>
  );
}
