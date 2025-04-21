import { useState } from "react";
import TodoEditor from "./TodoEditor";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";

export default function Todo() {
    const [todo, setTodo] = useState<string[]>([]);
    const [newTodo, setNewTodo] = useState("");

    const addTodoHandler = () => {
        if (newTodo) {
            setTodo((todo) => [...todo, newTodo]);
            setNewTodo("");
        }
    };
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewTodo(e.target.value);
    };
    const deleteHandler = (index: number) => {
        setTodo((todo) => todo.filter((_, i) => i !== index));
    };
    return (
        <div className="w-[350px] max-w-md mx-auto shadow-lg rounded-lg overflow-hidden bg-white">
            <TodoHeader />
            <TodoEditor
                newTodo={newTodo}
                changeHandler={changeHandler}
                addTodoHandler={addTodoHandler}
            />
            <TodoList todo={todo} deleteHandler={deleteHandler} />
        </div>
    );
}
