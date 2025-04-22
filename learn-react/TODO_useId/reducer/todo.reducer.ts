export const todoReducer = (todos: TodoType[], action: TodoReducerAction) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...todos,
        {
          id: todos.length + 1,
          content: action.payload,
          isCompleted: false,
        },
      ];
    case "TOGGLE_TODO":
      return todos.map((todo) =>
        todo.id === action.payload
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo
      );
    case "DELETE_TODO":
      return todos.filter((todo) => todo.id !== action.payload);
  }

  return todos;
};
