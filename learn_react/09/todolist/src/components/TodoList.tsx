import TodoListItem from "./TodoListItem";
interface Props {
  todo: string[];
  deleteHandler: (i: number) => void;
}
export default function TodoList({ todo, deleteHandler }: Props) {
  return (
    <ul className="divide-y divide-gray-200">
      {todo.map((todo, i) => (
        <TodoListItem
          key={i}
          input={todo}
          deleteHandler={() => deleteHandler(i)}
        />
      ))}
    </ul>
  );
}
