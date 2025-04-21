import { useState } from "react";
import TodoEditor from "./TodoEditor";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";

export default function Todo() {
  const initTodos = ["Todo Item Example", "Todo Item Example", "Todo Item Example"];
  const [todos, setTodos] = useState<string[]>(initTodos);
  const addTodo = (todo: string) => {
    setTodos((v) => [...v, todo]);
    // console.log(todo);
  };
  const deleteTodo = (index: number) => {
    setTodos((v) => v.filter((_, i) => i !== index));
  };
  return (
    <div className="w-[350px] max-w-md mx-auto shadow-lg rounded-lg overflow-hidden bg-white">
      <TodoHeader />
      <TodoEditor addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}
