import React, { useState } from "react";
interface Props {
  clickAdd: (input: string) => void;
}
export default function TodoEditor({ clickAdd }: Props) {
  const [addItem, setAddItem] = useState("");
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddItem(e.target.value);
  };
  const addHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    clickAdd(addItem);
    setAddItem("");
  };
  return (
    <form className="flex p-4" onSubmit={addHandler}>
      <input
        value={addItem}
        onChange={inputHandler}
        type="text"
        placeholder="Enter a new todo"
        className="flex-grow p-2 border rounded-l-md focus:outline-none"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition-colors"
      >
        Add
      </button>
    </form>
  );
}
