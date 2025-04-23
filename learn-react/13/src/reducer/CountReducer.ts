// state -> 상태값
// action -> 함수 내부에서 상태를 변경하기 위해서 참조할 수 있는 데이터
// 반드시 무엇인가를 반환 해야 함. (그러지 않을거면 에러를 던져야 함)
export function counterReducer(
  state: { count: number },
  action: { type: string }
) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      return state;
  }
}
