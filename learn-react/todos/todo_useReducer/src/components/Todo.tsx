import { useReducer } from "react";
import TodoEditor from "./TodoEditor";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";
import { todoReducer } from "../reducer/todo.reducer";

export default function Todo() {
  // const [todos, setTodos] = useState<TodoItem[]>([]);
  // const initialTodos: TodoItem[] = [];
  const [todos, dispatch] = useReducer(todoReducer, []);

  // 함수의 캡슐화
  // const addTodo = (text: string) => {
  //   setTodos((todos) => [
  //     ...todos,
  //     {
  //       id: Math.random(),
  //       text,
  //       done: false,
  //     },
  //   ]);
  // };

  // const toggleTodo = (id: number) => {
  //   setTodos((todos) =>
  //     todos.map((todo) =>
  //       todo.id === id ? { ...todo, done: !todo.done } : todo
  //     )
  //   );
  // };

  // const deleteTodo = (id: number) => {
  //   setTodos((todos) => todos.filter((todo) => todo.id !== id));
  // };

  return (
    <div className="w-[350px] max-w-md mx-auto shadow-lg rounded-lg overflow-hidden bg-white">
      <TodoHeader />
      <TodoEditor dispatch={dispatch} />
      <TodoList todos={todos} dispatch={dispatch} />
    </div>
  );
}
