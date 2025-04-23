export default function TodoListItem({
  todo,
  handleIsCompleteTodo,
  handleDeleteTodo,
}: {
  todo: TodoType;
  handleIsCompleteTodo: (id: number) => void;
  handleDeleteTodo: (id: number) => void;
}) {
  return (
    <li className="flex items-center justify-between p-3 border-b hover:bg-gray-100 transition-colors">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={todo.isCompleted}
          onChange={() => handleIsCompleteTodo(todo.id)}
          className="mr-3 h-4 w-4 text-blue-500 focus:ring-blue-400"
        />
        <span className={`${todo.isCompleted ? "line-through" : ""}`}>
          {todo.content}
        </span>
      </div>
      <button
        onClick={() => handleDeleteTodo(todo.id)}
        className="text-red-500 hover:text-red-700 ml-4"
      >
        Delete
      </button>
    </li>
  );
}
