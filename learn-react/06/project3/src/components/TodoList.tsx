import TodoListItem from "./TodoListItem";
import { Dispatch, SetStateAction } from "react";

export default function TodoList({
  listItem,
  setListItem,
}: {
  listItem: { id: number; complete: boolean; title: string }[];
  setListItem: Dispatch<
    SetStateAction<{ id: number; complete: boolean; title: string }[]>
  >;
}) {
  const deleteHandler = (id: number) => {
    listItem.map((item, i) => {
      if (item.id === id) {
        listItem.splice(i, 1);
        setListItem([...listItem]);
      }
    });
  };
  const completeHandler = (id: number) => {
    listItem.map((item, i) => {
      if (item.id === id) {
        listItem.splice(i, 1, {
          id: item.id,
          complete: !item.complete,
          title: item.title,
        });
        setListItem([...listItem]);
      }
    });
  };
  return (
    <ul className="divide-y divide-gray-200">
      {listItem.map((list) => (
        <TodoListItem
          list={list}
          deleteHandler={() => {
            deleteHandler(list.id);
          }}
          completeHandler={() => {
            completeHandler(list.id);
          }}
        />
      ))}
    </ul>
  );
}
