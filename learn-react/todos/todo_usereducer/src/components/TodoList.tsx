import { ActionDispatch } from "react";
import TodoListItem from "./TodoListItem";

export default function TodoList({
	contents,
	dispatch
}: {
	contents: TodoItem[];
	dispatch: ActionDispatch<[action: TodoReducerAction]>
}) {
	return (
		<ul className="divide-y divide-gray-200">
			{contents && contents.map((content) => (
				<TodoListItem key={content.id} content={content} dispatch={dispatch} />
			))}
		</ul>
	);
}
