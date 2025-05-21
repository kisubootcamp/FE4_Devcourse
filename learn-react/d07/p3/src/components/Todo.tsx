import { useState } from "react";
import TodoEditor from "./TodoEditor";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";

// 일반적으로 사용하는 방식
// 일반 객체는 인터페이스 (interface)
// 그 외 나머지는 타입 별칭 (type)
export default function Todo() {
  // { id: 1, text: "아침먹기", done: false },
  const [todos, setTodos] = useState<TodoItem[]>([]);

  // 함수의 캡슐화
  const addTodo = (text: string) => {
    setTodos((todos) => [
      ...todos,
      {
        id: Math.random(),
        text,
        done: false,
      },
    ]);
  };

  const toggleTodo = (id: number) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="w-[350px] max-w-md mx-auto shadow-lg rounded-lg overflow-hidden bg-white">
      <TodoHeader />
      <TodoEditor addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  );
}
