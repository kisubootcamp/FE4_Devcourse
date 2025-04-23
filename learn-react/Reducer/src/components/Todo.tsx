// 🔹 조건
// 	•	상태는 Todo 객체 배열
// type Todo = {
//   id: number;
//   text: string;
//   done: boolean;
// }
// •	가능한 액션:
// •	추가
// •	완료 토글
// •	삭제

// ❓ 과제
// •	useReducer 상태를 Todo[]로 선언
// •	dispatch로 각각의 액션 수행
// •	map으로 리스트 렌더링, 토글/삭제 버튼 구현

import { useReducer, useState } from "react";
import { todoReducer } from "../reducer/todo.reducer";
import { TodoActionType } from "../types/todo";

export default function Todo() {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [text, setText] = useState("");

  const handleChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleAddTodo = () => {
    dispatch({ type: TodoActionType.ADD_TODO, payload: text });
    setText("");
  };

  const handleToggleTodo = (id: number) => {
    dispatch({ type: TodoActionType.TOGGLE_TODO, payload: id });
  };

  const handleRemoveTodo = (id: number) => {
    dispatch({ type: TodoActionType.REMOVE_TODO, payload: id });
  };

  return (
    <>
      <div>
        {todos.map((todo) => {
          return (
            <div key={todo.id}>
              <span>{todo.text}</span>
              <button onClick={() => handleToggleTodo(todo.id)}>
                {todo.done ? "완료" : "미완료"}
              </button>
              <button onClick={() => handleRemoveTodo(todo.id)}>삭제</button>
            </div>
          );
        })}
      </div>
      <input type="text" value={text} onChange={handleChangeText} />
      <button onClick={handleAddTodo}>추가</button>
    </>
  );
}
