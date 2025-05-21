import React, { useState } from "react";
import { ActionDispatch } from "react";

export default function TodoEditor({
  dispatch,
}: {
  dispatch: ActionDispatch<[action: TodoReducerAction]>;
}) {
  const [text, setText] = useState("");
  const textChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodos(text);
    setText("");
  };
  return (
    //form 태그 입력란에서 엔터키 혹은 add 버튼을 누르던 submit 이 됨
    <form className="flex p-4" onSubmit={handleSubmit}>
      <input
        value={text}
        onChange={textChangeHandler}
        type="text"
        placeholder="Enter a new todo"
        className="flex-grow p-2 border rounded-l-md focus:outline-none"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition-colors">
        Add
      </button>
    </form>
  );
}
