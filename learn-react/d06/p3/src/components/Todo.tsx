import { useState } from "react";
import TodoEditor from "./TodoEditor";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";

export default function Todo() {
  const [todo, setTodo] = useState<{ id: number; text: string }[]>([
    { id: 1, text: "Todo Item Example" },
    { id: 2, text: "Todo Item Example" },
    { id: 3, text: "Todo Item Example" },
  ]);
  const addTodo = (text: string) => {
    setTodo([...todo, { id: Date.now(), text: text }]);
  };
  const deleteTodo = (id: number) => {
    setTodo(todo.filter((item) => item.id !== id));
  };

  return (
    <div className="w-[350px] max-w-md mx-auto shadow-lg rounded-lg overflow-hidden bg-white">
      <TodoHeader />
      <TodoEditor addTodo={addTodo} />
      <TodoList todo={todo} deleteTodo={deleteTodo} />
    </div>
  );
}
