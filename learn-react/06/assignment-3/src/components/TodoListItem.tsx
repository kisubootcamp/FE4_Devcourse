import { useState } from "react";

export default function TodoListItem({
	content,
	index,
	deleteContent,
}: {
	content: string;
	index: number;
	deleteContent: (idx: number) => void;
}) {
	const [isChecked, setIsChecked] = useState(false);

	const handlerCheckbox = () => {
		setIsChecked((isChecked) => !isChecked);
	};

	const clickButton = () => {
		deleteContent(index);
	};

	return (
		<li className="flex items-center justify-between p-3 border-b hover:bg-gray-100 transition-colors">
			<div className="flex items-center">
				<input
					type="checkbox"
					checked={isChecked}
					onChange={handlerCheckbox}
					className={"mr-3 h-4 w-4 text-blue-500 focus:ring-blue-400"}
				/>
				<span className={`${isChecked ? "line-through" : ""}`}>{content}</span>
			</div>
			<button onClick={clickButton} className="text-red-500 hover:text-red-700 ml-4">
				Delete
			</button>
		</li>
	);
}
