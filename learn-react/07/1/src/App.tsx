// 상태 정의할 때 사용할 수 있는걸로 useState말고 useReducer가 있음
// useReducer

import Reducer from "./components/Reducer";
import State from "./components/State";

export default function App() {
	return (
		<>
			<State></State>
      <Reducer></Reducer>
		</>
	);
}
