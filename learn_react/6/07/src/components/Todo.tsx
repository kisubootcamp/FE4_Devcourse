import { useState } from "react";
import TodoEditor from "./TodoEditor";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";

export default function Todo() {
  const [input, setInput] = useState<string[]>([]);

  const deleteItem = () => {
    input.slice(0, input.length - 1);
    setInput((input) => input.slice(0, input.length - 1));
  };
  return (
    <div className="w-[350px] max-w-md mx-auto shadow-lg rounded-lg overflow-hidden bg-white">
      <TodoHeader />
      <TodoEditor setInput={setInput} />
      <TodoList input={input} deleteItem={deleteItem} />
    </div>
  );
}
