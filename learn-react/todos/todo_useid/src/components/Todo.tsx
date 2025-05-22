import { useReducer } from "react";
import TodoEditor from "./TodoEditor";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";
import { todoReducer } from "../reducer/todo.reducer";

export default function Todo() {
	const [contents, dispatch] = useReducer(todoReducer, []);

	return (
		<div className="w-[350px] max-w-md mx-auto shadow-lg rounded-lg overflow-hidden bg-white">
			{/* <pre>{JSON.stringify(contents, null, 2)}</pre> */}
			<TodoHeader />
			<TodoEditor dispatch={dispatch} />
			<TodoList contents={contents} dispatch={dispatch} />
		</div>
	);
}
