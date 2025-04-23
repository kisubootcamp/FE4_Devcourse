// 🔹 구현 과제
// 	1.	useReducer로 위 상태와 액션을 관리한다
// 	2.	setTimeout을 사용해서 가짜 API 요청 흐름을 만든다
// 	•	예: 버튼 클릭 시 LOADING → 2초 후 SUCCESS or ERROR
// 	3.	요청 성공 시에는 문자열 배열(["react", "vue", "svelte"] 등)을 data에 넣어준다
// 	4.	실패 시에는 error에 "요청 실패" 같은 메시지를 넣는다
// 	5.	로딩 중이면 "로딩 중..." 메시지를 화면에 표시
// 	6.	data는 리스트로 렌더링, error는 메시지로 표시

import { useReducer } from "react";
import { AsyncActionType } from "../types/async";
import { asyncReducer } from "../reducer/async.reducer";

export default function AsyncTest() {
  const [state, dispatch] = useReducer(asyncReducer, {
    data: [],
    error: null,
    loading: false,
  });

  const handleClick = () => {
    dispatch({ type: AsyncActionType.FETCH_DATA_REQUEST });
    const isSuccess = Math.random() > 0.5;
    setTimeout(() => {
      if (isSuccess) {
        dispatch({
          type: AsyncActionType.FETCH_DATA_SUCCESS,
          payload: ["react", "vue", "svelte"],
        });
      } else {
        dispatch({
          type: AsyncActionType.FETCH_DATA_FAILURE,
          payload: "요청 실패",
        });
      }
    }, 2000);
  };

  return (
    <>
      <div>AsyncTest Component</div>
      <button onClick={handleClick}>Click me</button>
      {state.loading && <div>Loading...</div>}
      {state.error && <div>{state.error}</div>}
      {state.data.length > 0 && (
        <ul>
          {state.data.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </>
  );
}
