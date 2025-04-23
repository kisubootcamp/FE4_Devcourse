{
  /* Reducer 간단 비유 정의 */
}
// const [state, dispatch] = useReducer(reducer, initialState);

// state: 상태 이름(컴포넌트에서 사용할 상태) => 빵 재료 담는 접시
// dispatch: 상태(state)를 변경 시 필요한 정보를 전달하는 "함수" => 주문서
// reducer: dispatch를 확인해서 state를 변경해 주는 "함수" => 제작
// initialState: state에 전달할 초기 값(객체, 배열 등 다양한 값으로도 전달 가능) => 빵 재료

// reducer(state, action)
// - state: 위에서 선언한 state 값이 들어간다(초기값은 initialState에서 설정한 값)
// - action: 업데이트를 위한 정보를 가지고 있는 "객체". 즉, 위에서 선언한 dispatch => 주문서

// function reducer(state, action) {
// 	switch (action.type) {
//     	case 'PLUS':
//         	return state + 1;
//         case 'MINUS':
//         	return state - 1;
//         default: return state;
//    }
// }
// => 주문서(dispatch) 속 주문 내역이 "PLUS"라면 어떠한 재료(state)가 오더라도 무조건 +1을 한다.
// 이것이 적어놓은 제조 방식(reducer)이니 적힌 대로 실행해야 한다.

// // 1을 더하는 액션(주문 명령)
// {
//     type: 'PLUS'
//   }
//   // 1을 빼는 액션(주문 명령)
//   {
//     type: 'MINUS'
//   }
//   // input 값을(빵 속 재료 등) 변경하는 액션(주문 명령)
//   {
//     type: 'CHANGE_INGREDIENT',
//     ingredient : 'corn',
//     price : 3000
//   }
//   // 새로운 객체(빵)를 생성하는 액션 (주문 명령)
//   {
//     type: 'CREATE_BREAD',
//     bread: {
//       name: 'corn_bread',
//       price: 4500
//     },
//     ingredient: {
//       name: 'corn',
//       value: '300g'
//     }
//   }
// => action은 빵 주문자가 주방에 전달할 "주문서"
// 이곳에서 reducer()에 적어놨던 type(주문 명령어)을 적는다.
// 또한 reducer에서 필요한 데이터, 데이터 값(빵 재료들)도 같이 전달할 수 있다.

// // dispatch 형식
// // 1번째 방법
// const onPlus = () => {
//     dispatch({type : 'PLUS'})
//  }

// <button onClick={onPlus}>Plus</button>

// /// 2번째 방법
// <button onClick={() => dispatch({ type: 'PLUS' })}>Plus</button>
