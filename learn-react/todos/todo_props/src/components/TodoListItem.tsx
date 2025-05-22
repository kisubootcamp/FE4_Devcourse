import { twMerge } from "tailwind-merge";

export default function TodoListItem({
	content,
	toggleContent,
	deleteContent,
}: {
	content: TodoItem;
	toggleContent: (id: number) => void;
	deleteContent: (id: number) => void;
}) {
	return (
		<li className="flex items-center justify-between p-3 border-b hover:bg-gray-100 transition-colors">
			<div className="flex items-center">
				<input
					type="checkbox"
					checked={content.done}
					onChange={() => toggleContent(content.id)}
					className={"mr-3 h-4 w-4 text-blue-500 focus:ring-blue-400"}
				/>
				<span className={twMerge(content.done && "line-through")}>{content.text}</span>
			</div>
			<button onClick={() => deleteContent(content.id)} className="text-red-500 hover:text-red-700 ml-4">
				Delete
			</button>
		</li>
	);
}
