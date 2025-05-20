import { useState } from "react";

export default function TodoEditor({
  setList,
}: {
  setList: React.Dispatch<
    React.SetStateAction<{ id: number; content: string }[]>
  >;
}) {
  const [value, setValue] = useState("");
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setList((list) => [...list, { id: Math.random(), content: value }]);
    setValue("");
  };
  return (
    <form className="flex p-4" onSubmit={submitHandler}>
      <input
        type="text"
        value={value}
        placeholder="Enter a new todo"
        className="flex-grow p-2 border rounded-l-md focus:outline-none"
        onChange={(e) => setValue(e.target.value)}
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
