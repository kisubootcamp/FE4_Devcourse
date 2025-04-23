import { useCallback, useEffect, useState } from "react";
import TodoEditor from "./TodoEditor";
import TodoList from "./TodoList";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

// 메모이제이션
// 모든 컴포넌트를 다 메모이제이션 하는 게 좋은게 아님 ?
// 아님 ! 연산 비용이 더 올라갈 수도 있음.
// 의미없는 최적화가 될 수 있음

export default function Todo() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const addTodo = (text: string) => {
    if (text.trim()) {
      setTodos((prev) => [
        ...prev,
        {
          id: Date.now(),
          text: text.trim(),
          completed: false,
        },
      ]);
    }
  };

  const toggleTodo = useCallback((id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }, []);

  const deleteTodo = useCallback((id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }, []);

  useEffect(() => {
    // const randomText = Array.from(
    //   { length: 2000 },
    //   (_, index) => `Todo ${index + 1}`
    // );
    // randomText.forEach((text) => {
    //   setTodos((prev) => [
    //     ...prev,
    //     { id: prev.length + 1, text, completed: false },
    //   ]);
    // });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center p-4">
      <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow-md p-6 space-y-4">
        <h2 className="text-xl font-semibold">Todo List</h2>
        <TodoEditor addTodo={addTodo} />
        <TodoList
          todos={todos}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      </div>
    </div>
  );
}
