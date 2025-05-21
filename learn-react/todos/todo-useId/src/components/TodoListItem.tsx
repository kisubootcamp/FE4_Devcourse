import { useEffect, useId } from "react";
import { twMerge } from "tailwind-merge";

export default function TodoListItem({
  todo,
  dispatch,
}: {
  todo: TodoItem;
  dispatch: React.ActionDispatch<[action: TodoReducerAction]>;
}) {
  const uuid = useId(); // 중복되지 않는 고유한 값이 문자열로 렌더링 되도록 해줌

  // useEffect(() => {
  //   const id = useId();
  //   console.log(id);
  // }, []); 모든 리액트 훅은 함수형 컴포넌트 바로 아래가 아닌, 함수 아래에서는 호출이 불가능하다.(최상위 위치에서만 사용이 가능하다.)
  return (
    <li className="flex items-center justify-between p-3 border-b hover:bg-gray-100 transition-colors">
      <div className="flex items-center">
        <input
          id={uuid}
          type="checkbox"
          className="mr-3 h-4 w-4 text-blue-500 focus:ring-blue-400"
          checked={todo.done}
          onChange={() => dispatch({ type: "TOGGLE_TODO", payload: todo.id })}
        />
        <label htmlFor={uuid} className={twMerge(todo.done && "line-through")}>
          {todo.text}
        </label>
      </div>
      <button
        className="text-red-500 hover:text-red-700 ml-4"
        onClick={() => dispatch({ type: "DELETE_TODO", payload: todo.id })}
      >
        Delete
      </button>
    </li>
  );
}
// uuid라이브러리는 함수 내부에서 동적으로 생성할때마다 랜덤, 리액트는 한번 생성되면 끝
// 그 이외에는 고유 아이디를 생성한다는 점에서 동일함.
