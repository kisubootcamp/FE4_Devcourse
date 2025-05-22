// 사회적 통념 : 일반 객체는 interface(자동으로 병합되고, extends로 대규모 프로젝트에서 사용하기 용이하고) / 나머지 타입별칭(type)
interface TodoItem {
	id: number;
	text: string;
	done: boolean;
}
// 구별된 유니온 타입
type TodoReducerAction =
	| {
			// type: string;
			// payload: string | number; // payload로 이름 지은것도 쓴 것도 관례
			type: "ADD_TODO";
			payload: string;
	  }
	| {
			type: "TOGGLE_TODO";
			payload: number;
	  }
	| {
			type: "DELETE_TODO";
			payload: number;
	  };
