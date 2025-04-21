import { useState } from "react";

export default function TodoEditor({ addContent }: { addContent: (value: string) => void }) {
	const [content, setContent] = useState("");

	const handlerInputbox = (e: React.ChangeEvent<HTMLInputElement>) => {
		setContent(e.target.value);
	};

	const clickButton = (value: string, e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		addContent(value);
		setContent("");
	};

	return (
		<div className="flex p-4">
			<input
				type="text"
				placeholder="Enter a new todo"
				className="flex-grow p-2 border rounded-l-md focus:outline-none"
				value={content}
				onChange={handlerInputbox}
			/>
			<button
				onClick={(e) => clickButton(content, e)}
				className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition-colors"
			>
				Add
			</button>
		</div>
	);
}
