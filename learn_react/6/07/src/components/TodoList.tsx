import TodoListItem from "./TodoListItem";

export default function TodoList({
  input,
  deleteItem,
}: {
  input: string[];
  deleteItem: () => void;
}) {
  return (
    <ul className="divide-y divide-gray-200">
      {input.map((text, idx) => {
        return <TodoListItem key={idx} text={text} deleteItem={deleteItem} />;
      })}
    </ul>
  );
}
