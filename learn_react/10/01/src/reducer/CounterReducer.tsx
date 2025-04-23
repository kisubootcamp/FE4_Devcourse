// 첫번째 매개변수 state : 상태 값
// 두번째 매개변수 action : 함수 내부에서
// 상태를 변경하기 위해서 참조할 수 있는 데이터
// reducer 함수는 무엇이나를 꼭 return해야 함
// 그렇지 않을 거면 에러를 던져야 함.
export function CounterReducer(
  state: { value: number },
  action: { type: string }
) {
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
