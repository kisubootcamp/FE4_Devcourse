import TodoEditor from "./TodoEditor";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";
import { useState } from "react";

export default function Todo() {
  const [todos, setTodos] = useState<TodoType[]>([]);

  const handleAddTodo = (content: string) => {
    const newTodo = {
      id: todos.length + 1,
      content,
      isCompleted: false,
    };
    setTodos([...todos, newTodo]);
  };

  const handleDeleteTodo = (id: number) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const handleIsCompleteTodo = (id: number) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    );
    setTodos(newTodos);
  };

  return (
    <div className="w-[350px] max-w-md mx-auto shadow-lg rounded-lg overflow-hidden bg-white">
      <TodoHeader />
      <TodoEditor setTodos={handleAddTodo} />
      <TodoList
        todos={todos}
        handleIsCompleteTodo={handleIsCompleteTodo}
        handleDeleteTodo={handleDeleteTodo}
      />
    </div>
  );
}
