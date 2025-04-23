import TodoListItem from './TodoListItem';

export default function TodoList(todos, toggleTodo) {
  return (
    <ul className='divide-y divide-gray-200'>
      <TodoListItem />
      <TodoListItem />
      <TodoListItem />
    </ul>
  );
}
