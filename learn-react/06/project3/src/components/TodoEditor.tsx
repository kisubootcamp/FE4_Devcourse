import { Dispatch, SetStateAction, useRef, useState } from "react";

export default function TodoEditor({
  listItem,
  setListItem,
}: {
  listItem: { id: number; complete: boolean; title: string }[];
  setListItem: Dispatch<
    SetStateAction<{ id: number; complete: boolean; title: string }[]>
  >;
}) {
  const [listTitle, setListTitle] = useState("");
  const titleRef = useRef<HTMLInputElement>(null);
  return (
    <div className="flex p-4">
      <input
        type="text"
        ref={titleRef}
        placeholder="Enter a new todo"
        className="flex-grow p-2 border rounded-l-md focus:outline-none"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setListTitle(e.target.value)
        }
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition-colors"
        onClick={() => {
          if (listTitle !== "") {
            const newList = [
              ...listItem,
              { id: listItem.length + 1, complete: false, title: listTitle },
            ];
            setListItem([...newList]);
            titleRef.current!.value = "";
            titleRef.current!.focus();
          }
        }}
      >
        Add
      </button>
    </div>
  );
}
