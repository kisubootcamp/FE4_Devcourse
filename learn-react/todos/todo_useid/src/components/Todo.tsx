import { useReducer } from "react";
import { TodoReducer } from "../reducer/todo.reducer";
import TodoEditor from "./TodoEditor";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";

// 일반 객체는 interface
// 타입별칭 type
export default function Todo() {
  const [todos, dispatch] = useReducer(TodoReducer, []);

  return (
    <div className="w-[350px] max-w-md mx-auto shadow-lg rounded-lg overflow-hidden bg-white">
      <TodoHeader />
      <TodoEditor dispatch={dispatch} />
      <TodoList todos={todos} dispatch={dispatch} />
    </div>
  );
}
