import { useCallback, useEffect, useState } from "react";
import TodoEditor from "./TodoEditor";
import TodoList from "./TodoList";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

// 메모이제이션
// 모든 컴포넌트를 다 메모이제이션 하는 게 좋은 걸까 ?
// 메모리에 무언가 저장한다는 것 자체가 높은 연산 비용을 요구함.
// 따라서 무턱대고 사용하면 오히려 성능 저하가 발생하므로 정말 필요할 때만 사용해야 함.
// 실무에서 메모이제이션을 하지 않는 경우가 더 많음.
// 직접 운영해보면서 성능 이슈가 발생하면 그때 메모이제이션을 시도해보면 됨.
// 처음부터 지레짐작으로 사용하면 안 됨.
export default function Todo() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const addTodo = (text: string) => {
    if (text.trim()) {
      setTodos((todos) => [
        ...todos,
        {
          // id: Date.now(),
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
    // 메모이제이션을 하지 않았을 경우, 데이터가 2000개로 매우 많아지면 속도가 느려지면서 성능 저하가 발생함.
    randomText.forEach((text) => addTodo(text));
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
