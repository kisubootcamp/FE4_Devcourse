import { useReducer } from "react";
import TodoEditor from "./TodoEditor";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";
import { todoReducer } from "../reducer/todo.reducer";

// 일반 객체는 interface
// 타입 별칭 type
// interface와 타입 별칭 모두 타입을 정의할 때 쓰이는데, interface는 객체의 타입을 정의하는 것에 특화됨
// interface는 확장에 용이함

export default function Todo() {
	// const [todos, setTodos] = useState<TodoItem[]>([]);
	const [todos, dispatch] = useReducer(todoReducer, []);

	return (
		<div className="w-[350px] max-w-md mx-auto shadow-lg rounded-lg overflow-hidden bg-white">
			<TodoHeader />
			<TodoEditor dispatch={dispatch} />
			<TodoList todos={todos} dispatch={dispatch} />
		</div>
	);
}
