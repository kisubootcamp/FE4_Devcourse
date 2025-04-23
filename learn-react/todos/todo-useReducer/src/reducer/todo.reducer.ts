// 파일 안에서 JSX가 사용되면 tsx, 사용되지 않으면 ts
export const todoReducer = (todos: TodoItem[], action: TodoReducerAction) => {
  // ....
  // 참조하는 데이터를 action이라고 함
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...todos,
        {
          id: Math.random(),
          text: action.payload,
          done: false,
        },
      ];
    case "TOGGLE_TODO":
      return todos.map((todo) =>
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo
      );
    case "DELETE_TODO":
      return todos.filter((todo) => todo.id !== action.payload);
  }
  return todos;
};
