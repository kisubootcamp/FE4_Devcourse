import { useState } from "react";
import TodoEditor from "./TodoEditor";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";
// 일반객체 - interface
// 그것을 제외한 나머지는 - type 별칭
export default function Todo() {
  const [todos, setTodos] = useState<TodoItem[]>([]);

  // 함수의 캡슐화
  // 하나의 기능만 가능하도록 로직을 짜서 넘기는 것이 좋음
  const addTodos = (text: string) => {
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
        todo.id === id ? { ...todo, done: !todo.done } : { ...todo }
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };
  return (
    <div className="w-[350px] max-w-md mx-auto shadow-lg rounded-lg overflow-hidden bg-white">
      <TodoHeader />
      <TodoEditor addTodos={addTodos} />
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  );
}
