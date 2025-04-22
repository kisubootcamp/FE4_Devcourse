// 🎯 문제 2: 문자열 리스트 추가/삭제

// 🔹 조건
// 	•	상태는 문자열로 이루어진 배열
// 	•	가능한 액션:
// 	•	문자열 추가 (ADD_ITEM)
// 	•	인덱스로 삭제 (REMOVE_ITEM)

// ❓ 과제
// 	•	useReducer 상태는 string[]
// 	•	payload를 활용해서 액션 구조 잡아보기
// 	•	input + 버튼으로 항목 추가, 항목 옆에 삭제 버튼으로 삭제

import { useReducer, useState } from "react";
import { StringListActionType } from "../types/stringList";
import { StringListReducer } from "../reducer/stringList.reducer";

export default function StringList() {
  const [stringArr, dispatch] = useReducer(StringListReducer, []);
  const [text, setText] = useState("");
  const handleChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleAddItem = () => {
    dispatch({ type: StringListActionType.ADD_ITEM, payload: text });
  };

  const handleDeleteItem = (index: number) => {
    dispatch({ type: StringListActionType.REMOVE_ITEM, payload: index });
  };

  return (
    <>
      <div>StringList Component</div>
      <div>
        {stringArr.map((item, index) => (
          <div key={`${item}-${index}`}>
            {item}
            <button onClick={() => handleDeleteItem(index)}>Remove</button>
          </div>
        ))}
      </div>
      <input type="text" value={text} onChange={handleChangeText} />
      <button onClick={handleAddItem}>Add</button>
    </>
  );
}
