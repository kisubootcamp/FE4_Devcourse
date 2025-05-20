import { useState } from "react";
import TodoEditor from "./TodoEditor";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";

export default function Todo() {
  const [list, setList] = useState<{ id: number; content: string }[]>([]);

  return (
    <div className="w-[350px] max-w-md mx-auto shadow-lg rounded-lg overflow-hidden bg-white">
      <TodoHeader />
      <TodoEditor setList={setList} />
      <TodoList list={list} setList={setList} />
    </div>
  );
}
