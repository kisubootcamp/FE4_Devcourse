import TodoListItem from "./TodoListItem";

export default function TodoList({
	contents,
	deleteContent,
}: {
	contents: string[];
	deleteContent: (idx: number) => void;
}) {
	return (
		<ul className="divide-y divide-gray-200">
			{contents.map((content, index) => (
				<TodoListItem key={index} content={content} index={index} deleteContent={deleteContent} />
			))}
		</ul>
	);
}
