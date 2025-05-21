import { useCallback, useEffect, useState } from "react";
import TodoEditor from "./TodoEditor";
import TodoList from "./TodoList";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

// 메모이제이션
// 높은 연산 비용이 들어감
// 무분별한 메모이제이션은 성능을 떨어트림
// 성능 이슈가 발생했을 때 메모이제이션을 고려
export default function Todo() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const addTodo = (text: string) => {
    if (text.trim()) {
      setTodos((todos) => [
        ...todos,
        {
          id: Math.random(),
          text: text.trim(),
          completed: false,
        },
      ]);
    }
  };

  const toggleTodo = useCallback((id: number) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }, []);

  const deleteTodo = useCallback((id: number) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  }, []);

  useEffect(() => {
    const randomText = Array.from(
      { length: 2000 },
      (_, index) => `Todo #${index + 1}`
    );
    randomText.forEach((text) => addTodo(text));
    console.log(randomText);
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
