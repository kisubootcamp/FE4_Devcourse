export default function TodoEditor({
  value,
  onChange,
  onClick,
}: {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
}) {
  return (
    <div className="flex p-4">
      <input
        type="text"
        value={value}
        placeholder="Enter a new todo"
        className="flex-grow p-2 border rounded-l-md focus:outline-none"
        onChange={onChange}
      />
      <button
        onClick={onClick}
        className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition-colors"
      >
        Add
      </button>
    </div>
  );
}
