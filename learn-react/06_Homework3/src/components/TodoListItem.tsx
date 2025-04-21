export default function TodoListItem({
    children,
    id,
    deleteHandler,
}: {
    children: React.ReactNode;
    id: number;
    deleteHandler: (id: number) => void;
}) {
    return (
        <li className="flex items-center justify-between p-3 border-b hover:bg-gray-100 transition-colors">
            <div className="flex items-center">
                <input
                    type="checkbox"
                    className="mr-3 h-4 w-4 text-blue-500 focus:ring-blue-400"
                />
                <span>{children}</span>
            </div>
            <button
                className="text-red-500 hover:text-red-700 ml-4"
                onClick={() => deleteHandler(id)}
            >
                Delete
            </button>
        </li>
    );
}
