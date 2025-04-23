import TodoListItem from "./TodoListItem";

export default function TodoList({
  todos,
  setTodos,
}: {
  todos: string[];
  setTodos: React.Dispatch<React.SetStateAction<string[]>>;
}) {
  return (
    <ul className="divide-y divide-gray-200">
      {todos.map((todo, index) => {
        return (
          <TodoListItem
            key={index}
            index={index}
            todo={todo}
            setTodos={setTodos}
          />
        );
      })}
    </ul>
  );
}
