type TodoReducerAction = {
  type: string;
  payload: string | number;
};
export const TodoReducer = (todos: TodoItem[], action: any) => {
  // ....
  // 참조하는 데이터를 action
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...todos,
        {
          id: Math.random(),
          text: action.payload,
          done: false,
        },
      ];
    case 'TOGGLE_TODO':
      return todos.map((todo) =>
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo
      );
    case 'DELETE_TODO':
      return todos.filter((todo) => todo.id !== action.payload);
  }
  return todos;
};
