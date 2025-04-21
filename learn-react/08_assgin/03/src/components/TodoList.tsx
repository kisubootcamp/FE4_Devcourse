import { Todo } from "./Todo";
import TodoListItem from "./TodoListItem";

type Props = {
  todos: Todo[];
};

export default function TodoList({ todos }: Props) {
  return (
    <ul className="divide-y divide-gray-200">
      {/* <TodoListItem />
      <TodoListItem />
      <TodoListItem /> */}
      {todos.map((todo) => (
        <TodoListItem todo={todo} />
      ))}
    </ul>
  );
}
