export default function TodoListItem({
  list,
  deleteHandler,
  completeHandler,
}: {
  list: { id: number; complete: boolean; title: string };
  deleteHandler: (id: number) => void;
  completeHandler: (id: number) => void;
}) {
  return (
    <li className="flex items-center justify-between p-3 border-b hover:bg-gray-100 transition-colors">
      <div className="flex items-center">
        <input
          checked={list.complete}
          type="checkbox"
          className="mr-3 h-4 w-4 text-blue-500 focus:ring-blue-400"
          onChange={() => completeHandler(list.id)}
        />
        <span>{list.title}</span>
      </div>
      <button
        onClick={() => deleteHandler(list.id)}
        className="text-red-500 hover:text-red-700 ml-4"
      >
        Delete
      </button>
    </li>
  );
}
