interface TodoItem {
  id: number;
  text: string;
  done: boolean;
}

type TodoReducerAction =
  | {
      type: 'ADD_TODO';
      payload: string;
    }
  | {
      type: 'TOGGLE_TODO';
      payload: nuumber;
    }
  | {
      type: 'DELETE_TODO';
      payload: nuumber;
    };
