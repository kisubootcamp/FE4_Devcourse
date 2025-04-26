import TodoListItem from "./TodoListItem";

export default function TodoList({
	contents,
	toggleContent,
	deleteContent,
}: {
	contents: TodoItem[];
	toggleContent: (id: number) => void;
	deleteContent: (id: number) => void;
}) {
	return (
		<ul className="divide-y divide-gray-200">
			{contents && contents.map((content) => (
				<TodoListItem key={content.id} content={content} toggleContent={toggleContent} deleteContent={deleteContent} />
			))}
		</ul>
	);
}
