import { useState } from "react";
import { useTodoStore } from "../../../stores/todoStore";

export default function TodoEditor() {
  const [value, setValue] = useState("");
  const addTodo = useTodoStore((state) => state.addTodo);
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodo(value);
    setValue("");
  };
  return (
    <>
      <form onSubmit={submitHandler} className="flex space-x-2">
        <input
          type="text"
          className="flex-1 px-3 py-2 border rounded"
          placeholder="Add a new todo"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          Add
        </button>
      </form>
    </>
  );
}
