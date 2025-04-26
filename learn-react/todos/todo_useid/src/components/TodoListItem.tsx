import { ActionDispatch, useId } from "react";
import { twMerge } from "tailwind-merge";

export default function TodoListItem({
	content,
	dispatch,
}: {
	content: TodoItem;
	dispatch: ActionDispatch<[action: TodoReducerAction]>;
}) {
	const uuid = useId(); // 고유한 값을 만들어주는 훅. useId는 "컴포넌트가 생성될 때" 고유한 값 하나가 만들어지는 거다. 따라서 TodoList에서 useId를 호출해서 id를 넘기면 똑같은 id를 사용하게 되므로, 이렇게 하면 안된다.
	return (
		<li className="flex items-center justify-between p-3 border-b hover:bg-gray-100 transition-colors">
			<div className="flex items-center">
				<input
					id={uuid}
					type="checkbox"
					checked={content.done}
					onChange={() => dispatch({ type: "TOGGLE_TODO", payload: content.id })}
					className={"mr-3 h-4 w-4 text-blue-500 focus:ring-blue-400"}
				/>
				<label htmlFor={uuid} className={twMerge(content.done && "line-through")}>
					{content.text}
				</label>
			</div>
			<button
				onClick={() => dispatch({ type: "DELETE_TODO", payload: content.id })}
				className="text-red-500 hover:text-red-700 ml-4"
			>
				Delete
			</button>
		</li>
	);
}
