import { useState } from "react";
import TodoEditor from "./TodoEditor";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";

export default function Todo() {
  const [listItem, setListItem] = useState<
    { id: number; complete: boolean; title: string }[]
  >([]);

  return (
    <div className="w-[350px] max-w-md mx-auto shadow-lg rounded-lg overflow-hidden bg-white">
      <TodoHeader />
      <TodoEditor listItem={listItem} setListItem={setListItem} />
      <TodoList listItem={listItem} setListItem={setListItem} />
    </div>
  );
}
