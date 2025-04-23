import TodoListItem from "./TodoListItem";

export default function TodoList({
  todos,
  handleIsCompleteTodo,
  handleDeleteTodo,
}: {
  todos: TodoType[];
  handleIsCompleteTodo: (id: number) => void;
  handleDeleteTodo: (id: number) => void;
}) {
  return (
    <ul className="divide-y divide-gray-200">
      {todos.map((todo) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          handleIsCompleteTodo={handleIsCompleteTodo}
          handleDeleteTodo={handleDeleteTodo}
        />
      ))}
    </ul>
  );
}
