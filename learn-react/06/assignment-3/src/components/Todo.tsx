import { useState } from "react";
import TodoEditor from "./TodoEditor";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";

export default function Todo() {
	const [contents, setContents] = useState<string[]>([]);

	const addContent = (content: string) => {
		setContents((contents) => [...contents, content]);
	};

	const deleteContent = (idx: number) => {
		setContents((contents) => [...contents.slice(0, idx), ...contents.slice(idx + 1)]);
	};

	return (
		<div className="w-[350px] max-w-md mx-auto shadow-lg rounded-lg overflow-hidden bg-white">
			<TodoHeader />
			<TodoEditor addContent={addContent} />
			<TodoList contents={contents} deleteContent={deleteContent} />
		</div>
	);
}
