import TodoEditor from "./TodoEditor";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";
import { useReducer } from "react";
import { todoReducer } from "../../reducer/todo.reducer";
import { TodoActionType, TodoType } from "../types/todo";

export default function Todo() {
  const initialTodos: TodoType[] = [];
  const [todos, dispatch] = useReducer(todoReducer, initialTodos);

  const handleAddTodo = (content: string) => {
    dispatch({ type: TodoActionType.ADD_TODO, payload: content });
  };

  const handleDeleteTodo = (id: number) => {
    dispatch({ type: TodoActionType.DELETE_TODO, payload: id });
  };

  const handleIsCompleteTodo = (id: number) => {
    dispatch({ type: TodoActionType.TOGGLE_TODO, payload: id });
  };

  return (
    <div className="w-[350px] max-w-md mx-auto shadow-lg rounded-lg overflow-hidden bg-white">
      <TodoHeader />
      <TodoEditor setTodos={handleAddTodo} />
      <TodoList
        todos={todos}
        handleIsCompleteTodo={handleIsCompleteTodo}
        handleDeleteTodo={handleDeleteTodo}
      />
    </div>
  );
}
