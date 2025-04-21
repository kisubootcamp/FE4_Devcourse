import TodoListItem from "./TodoListItem";

export default function TodoList({
    todo,
    deleteHandler,
}: {
    todo: string[];
    deleteHandler: (id: number) => void;
}) {
    return (
        <ul className="divide-y divide-gray-200">
            {todo.map((value, index) => (
                <TodoListItem id={index} deleteHandler={deleteHandler}>
                    {value}
                </TodoListItem>
            ))}
        </ul>
    );
}
