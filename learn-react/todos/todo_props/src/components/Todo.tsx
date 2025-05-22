import { useState } from "react";
import TodoEditor from "./TodoEditor";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";

export default function Todo() {
	const [contents, setContents] = useState<TodoItem[]>([]);

	// 함수의 캡슐화
	const addContent = (content: string) => {
		setContents((contents) => [...contents, { id: Math.random(), text: content, done: false }]);
	};

	const toggleContent = (id: number) => {
		setContents((contents) =>
			contents.map((content) => (content.id === id ? { ...content, done: !content.done } : content))
		);
	};

	const deleteContent = (id: number) => {
		setContents((contents) => contents.filter((content) => content.id !== id));
	};

	return (
		<div className="w-[350px] max-w-md mx-auto shadow-lg rounded-lg overflow-hidden bg-white">
			{/* <pre>{JSON.stringify(contents, null, 2)}</pre> */}
			<TodoHeader />
			<TodoEditor addContent={addContent} />
			<TodoList contents={contents} toggleContent={toggleContent} deleteContent={deleteContent} />
		</div>
	);
}
