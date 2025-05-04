import TodoListItem from "./TodoListItem";

export default function TodoList({
  todos,
  dispatch,
}: {
  todos: TodoItem[];
  dispatch: Dispatch;
}) {
  return (
    <ul className="divide-y divide-gray-200">
      {todos &&
        todos.map((todo) => (
          <TodoListItem key={todo.id} todo={todo} dispatch={dispatch} />
        ))}
    </ul>
  );
}
