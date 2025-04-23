import TodoListItem from "./TodoListItem";

export default function TodoList({
  list,
  setList,
}: {
  list: { id: number; content: string }[];
  setList: React.Dispatch<
    React.SetStateAction<{ id: number; content: string }[]>
  >;
}) {
  return (
    <ul className="divide-y divide-gray-200">
      {list.map((item) => {
        const { id, content } = item;
        return (
          <TodoListItem item={item} list={list} setList={setList} key={id}>
            {content}
          </TodoListItem>
        );
      })}
    </ul>
  );
}
