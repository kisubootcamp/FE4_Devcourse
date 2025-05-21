import TodoListItem from "./TodoListItem";

export default function TodoList({
  todos,
  dispatch,
}: {
  todos: TodoItem[];
  dispatch: React.ActionDispatch<[action: TodoReducerAction]>;
}) {
  return (
    <ul className="divide-y divide-gray-200">
      {todos &&
        todos.map((todo) => (
          <TodoListItem
            key={todo.id} // 여기는 uuid를 못씀. TodoList가 생성될 때 한번만 만들어지므로 아이템이 생성이 되면 같은 아이디값을 가짐
            todo={todo}
            dispatch={dispatch}
          />
        ))}
    </ul>
  );
}
