import TodoListItem from "./TodoListItem";

export default function TodoList({
  todo,
  dispatch,
}: {
  todo: TodoItem[];
  dispatch: React.ActionDispatch<[action: TodoReducerAction]>;
}) {
  return (
    <ul className="divide-y divide-gray-200">
      {todo &&
        todo.map((todo) => (
          <TodoListItem key={todo.id} todo={todo} dispatch={dispatch}></TodoListItem>
        ))}
    </ul>
  );
}
