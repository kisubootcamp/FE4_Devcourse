// state -> 상태 값
// action -> 함수 내부에서 상태를 변경하기 위해 참조할 수 있는 데이터
// return 해야 함(아니면 error 던져야 함)
export function counterReducer(
  state: { value: number },
  action: { type: string }
) {
  switch (action.type) {
    case 'INCREMENT':
      return { value: state.value + 1 };
    case 'DECREMENT':
      return { value: state.value - 1 };
    case 'RESET':
      return { value: 0 };
    default:
      return state;
  }
}
