export default function TodoEditor({
    newTodo,
    changeHandler,
    addTodoHandler,
}: {
    newTodo: string;
    changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
    addTodoHandler: () => void;
}) {
    return (
        <div className="flex p-4">
            <input
                type="text"
                placeholder="Enter a new todo"
                className="flex-grow p-2 border rounded-l-md focus:outline-none"
                value={newTodo}
                onChange={changeHandler}
            />
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition-colors"
                onClick={addTodoHandler}
            >
                Add
            </button>
        </div>
    );
}
