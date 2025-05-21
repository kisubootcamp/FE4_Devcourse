import { useReducer } from "react";
import TodoEditor from "./TodoEditor";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";
import { todoReducer } from "../reducer/todo.reducer";
// 일반객체 - interface
// 그것을 제외한 나머지는 - type 별칭
export default function Todo() {
  // const [todos, setTodos] = useState<TodoItem[]>([]);
  const initialTodos: TodoItem[] = [];
  const [todos, dispatch] = useReducer(todoReducer, initialTodos);

  return (
    <div className="w-[350px] max-w-md mx-auto shadow-lg rounded-lg overflow-hidden bg-white">
      <TodoHeader />
      <TodoEditor dispatch={dispatch} />
      <TodoList todos={todos} dispatch={dispatch} />
    </div>
  );
}
