import { useReducer } from "react";
import TodoEditor from "./TodoEditor";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";
import { todoReducer } from "../reducer/todo.reducer";

export default function Todo() {
  const [todos, dispatch] = useReducer(todoReducer, []);

  return (
    <div className="w-[350px] max-w-md mx-auto shadow-lg rounded-lg overflow-hidden bg-white">
      <TodoHeader />
      <TodoEditor dispatch={dispatch} />
      <TodoList todo={todos} dispatch={dispatch} />
    </div>
  );
}
