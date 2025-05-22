export const todoReducer = (todos: TodoItem[], action: TodoReducerAction) => {
	//관례상 action으로 받는다
	// ...
	// 참조하는 데이터를 action. action은 객체일 필요는 없는데 일반적으로 type과 payload로 구성된 객체로 많이 설정한다.
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
			return todos.map((todo) => (todo.id === action.payload ? { ...todo, done: !todo.done } : todo));

		case "DELETE_TODO":
			return todos.filter((todo) => todo.id !== action.payload);
	}
	return todos;
};
