import TodoListItem from "./TodoListItem";

export default function TodoList({
  todos,
  deleteTodo,
}: {
  todos: string[];
  deleteTodo: (index: number) => void;
}) {
  return (
    <ul className="divide-y divide-gray-200">
      {todos.map((v, i) => (
        <TodoListItem key={i} todo={v} deleteTodo={() => deleteTodo(i)} />
      ))}
    </ul>
  );
}
