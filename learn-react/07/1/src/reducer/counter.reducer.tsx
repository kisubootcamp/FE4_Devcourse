//state->상태값
//action->함수 내부에서 상태를 변경하기 위해 참조할 수 있는 데이터
//reducer 함수는 반드시 리턴값이 존재해야함(없다면 throw error)
export function counterReducer(
  state: { value: number },
  action: { type: string }
) {
  //이전값과 액션값을 전달받음
  switch (action.type) {
    case "INCREMENT":
      return { value: state.value + 1 };
    case "DECREMENT":
      return { value: state.value - 1 };
    case "RESET":
      return { value: 0 };
    default:
      return state;
  }
}
