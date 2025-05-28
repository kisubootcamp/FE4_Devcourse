import { useState } from "react";
import TodoEditor from "./TodoEditor";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";

// 일반 객체는 interface
// 타입 별칭 type
// interface와 타입 별칭 모두 타입을 정의할 때 쓰이는데, interface는 객체의 타입을 정의하는 것에 특화됨
// interface는 확장에 용이함

export default function Todo() {
	const [todos, setTodos] = useState<TodoItem[]>([]);
	const addTodo = (text: string) => {
		setTodos((todos) => [...todos, { id: Math.random(), text, done: false }]);
	};

	const toggleTodo = (id: number) => {
		setTodos((todos) =>
			todos.map((todo) =>
				todo.id === id ? { ...todo, done: !todo.done } : todo
			)
		);
	};

	const deleteTodo = (id: number) => {
		setTodos((todos) => todos.filter((todo) => todo.id !== id));
	};

	return (
		<div className="w-[350px] max-w-md mx-auto shadow-lg rounded-lg overflow-hidden bg-white">
			<TodoHeader />
			<TodoEditor addTodo={addTodo} />
			<TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
		</div>
	);
}
