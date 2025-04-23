export function CounterReducer(
  state: { value: number },
  action: { type: string }
) {
  // throw new Error("aaa")
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
  return state;
} // 함수에서 반환되는 값이 현재 상태값
// state: 상태 값, action: 함수 내부에서 상태를 변경하기 위해서 참조할 수 있는 데이터
// 반드시 무엇인가를 리턴해야함. 그렇지 않을 경우 에러를 던져야 함
