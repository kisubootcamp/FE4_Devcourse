import TodoListItem from "./TodoListItem";

export default function TodoList({
  todo,
  deleteTodo,
}: {
  todo: { id: number; text: string }[];
  deleteTodo: (id: number) => void;
}) {
  return (
    <ul className="divide-y divide-gray-200">
      {/* <TodoListItem />
      <TodoListItem />
      <TodoListItem /> */}
      {todo.map((item) => (
        <TodoListItem item={item} deleteTodo={deleteTodo} />
      ))}
    </ul>
  );
}
