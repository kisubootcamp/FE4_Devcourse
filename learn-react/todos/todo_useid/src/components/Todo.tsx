import { useReducer } from "react";
import TodoEditor from "./TodoEditor";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";
import { todoReducer } from "../reducer/todo.reducer";

// 일반적으로 사용하는 방식
// 일반 객체는 인터페이스 (interface)
// 그 외 나머지는 타입 별칭 (type)
export default function Todo() {
  // { id: 1, text: "아침먹기", done: false },
  const [todos, dispatch] = useReducer(todoReducer, []);

  return (
    <div className="w-[350px] max-w-md mx-auto shadow-lg rounded-lg overflow-hidden bg-white">
      <TodoHeader />
      <TodoEditor dispatch={dispatch} />
      <TodoList todos={todos} dispatch={dispatch} />
    </div>
  );
}
