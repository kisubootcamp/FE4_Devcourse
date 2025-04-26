// import { Dispatch, SetStateAction, useState } from "react";

import { useState } from "react";

// export default function TodoEditor({ setContents }: { setContents: Dispatch<SetStateAction<TodoItem[]>> }) {
export default function TodoEditor({ addContent }: { addContent: (value: string) => void }) {
	const [content, setContent] = useState("");

	// 사용자가 무슨 값을 입력했는지 알아내기 위함
	const handlerInputbox = (e: React.ChangeEvent<HTMLInputElement>) => {
		setContent(e.target.value);
	};

	// 상태 업데이트 함수를 TodoEditor에 직접적으로 전달하는건 그렇게 권장하지 않는다. 너무 막강한 권한을 갖게 되기 때문에
	// const clickButton = (e: React.FormEvent<HTMLFormElement>) => {
	// 	e.preventDefault();
	// 	setContents((contents) => [
	// 		...contents,
	// 		{
	// 			id: Math.random(),
	// 			text: content,
	// 			done: false,
	// 		},
	// 	]);
	// 	setContent("");

	const clickButton = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		addContent(content);
		setContent("");
	};

	return (
		<form className="flex p-4" onSubmit={clickButton}>
			<input
				type="text"
				placeholder="Enter a new todo"
				className="flex-grow p-2 border rounded-l-md focus:outline-none"
				value={content}
				onChange={handlerInputbox}
			/>
			<button
				// button에 onClick쓰면 엔터키로는 동작하지 않음
				// -> 해결법으로 input에 onKeyDown을 설정해줘도 됨. onKeyDown = ((e) => {if (e.keyCode === 13) clickButton()})
				// -> form으로 묶어주고 button 타입을 submit으로 설정하고 form에는 onSubmit을 주고 button에 onClick은 지워주면 해결할 수 있다. form의 onSubmit에 넘기는 함수는 e.preventDefault해줘야 됨.
				type="submit"
				className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition-colors"
			>
				Add
			</button>
		</form>
	);
}
