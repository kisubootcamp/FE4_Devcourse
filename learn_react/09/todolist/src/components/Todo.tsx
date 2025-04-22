import { useState } from "react";
import TodoEditor from "./TodoEditor";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";

export default function Todo() {
  const [todo, setTodo] = useState<string[]>([]);

  const addHandler = (input: string) => {
    if (input.length === 0) return;
    setTodo((list) => [...list, input]);
  };

  const deleteHandler = (index: number) => {
    setTodo((list) => list.filter((_, i) => i !== index));
  };
  return (
    <div className="w-[350px] max-w-md mx-auto shadow-lg rounded-lg overflow-hidden bg-white">
      <TodoHeader />
      <TodoEditor clickAdd={addHandler} />
      <TodoList todo={todo} deleteHandler={deleteHandler} />
    </div>
  );
}
