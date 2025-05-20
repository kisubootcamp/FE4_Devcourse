import { ActionDispatch } from "react";
import TodoListItem from "./TodoListItem";

export default function TodoList({
  todos,
  dispatch,
}: {
  todos: TodoItem[];
  dispatch: ActionDispatch<[action: TodoReducerAction]>;
}) {
  // TodoList 컴포넌트에서 useId는 한 번만 만들어지기 때문에 여기서 useId를 이용하여 key 값에 넣어줄 수는 없음 !!
  return (
    <ul className="divide-y divide-gray-200">
      {todos &&
        todos.map((todo) => (
          <TodoListItem key={todo.id} todo={todo} dispatch={dispatch} />
        ))}
    </ul>
  );
}
