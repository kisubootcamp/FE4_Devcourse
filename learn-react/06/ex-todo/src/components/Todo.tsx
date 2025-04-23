import { useState } from 'react';
import TodoEditor from './TodoEditor';
import TodoHeader from './TodoHeader';
import TodoList from './TodoList';

export default function Todo() {
  const [todos, setTodos] = useState<{ id: number; text: string }[]>([
    { id: 1, text: 'Todo Item Example' },
    { id: 2, text: 'Todo Item Example' },
    { id: 3, text: 'Todo Item Example' },
  ]);

  const addTodo = (newText: string) => {
    const newTodo = { id: Date.now(), text: newText };
    setTodos((prev) => [...prev, newTodo]);
  };

  const deleteTodo = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <div className='w-[350px] max-w-md mx-auto shadow-lg rounded-lg overflow-hidden bg-white'>
      <TodoHeader />
      <TodoEditor onAdd={addTodo} />
      <TodoList todos={todos} onDelete={deleteTodo} />
    </div>
  );
}
