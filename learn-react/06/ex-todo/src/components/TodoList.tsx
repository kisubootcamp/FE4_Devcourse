import TodoListItem from './TodoListItem';

export default function TodoList({
  todos,
  onDelete,
}: {
  todos: { id: number; text: string }[];
  onDelete: (id: number) => void;
}) {
  return (
    <ul className='divide-y divide-gray-200'>
      {todos.map((todo) => (
        <TodoListItem key={todo.id} id={todo.id} text={todo.text} deleteTodo={onDelete} />
      ))}
    </ul>
  );
}
