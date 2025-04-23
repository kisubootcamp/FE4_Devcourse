// 체크박스
// 다중 선택이 전제가 됨
// 라디오

import React, {useState} from "react";

// 단일 선택이 전제가 됨
export default function App() {
  // []
  // ['apple']
  // ['apple', 'banana']
  // ['apple', 'orange']
  // map, filter : 항상 그 연산의 결과로 새로운 배열을 반환함
  const [selectedFruits, setSelectedFruits] = useState<string[]>([]);
  const changeSelectHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSelectedFruits((selectedFruits) =>
      selectedFruits.includes(value)
        ? selectedFruits.filter((fruit) => fruit !== value) // 일치하지 않는 값만 모아서 새로운 배열을 만듦 -> 마치 제거한 것처럼
        : // filter : 필터링한 배열을 새로운 배열로 반환함
          [...selectedFruits, value]
    );
  };

  // 라디오 버튼
  const [radio, setRadio] = useState("female");
  const radioChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRadio(e.target.value);
  };
  return (
    <>
      <p>선택된 과일: {selectedFruits.join(",")}</p>
      <label style={{display: "block"}}>
        <input
          type='checkbox'
          value='apple'
          checked={selectedFruits.includes("apple")}
          onChange={changeSelectHandler}
        />
        apple
      </label>
      <label style={{display: "block"}}>
        <input
          type='checkbox'
          value={"banana"}
          checked={selectedFruits.includes("banana")}
          onChange={changeSelectHandler}
        />
        banana
      </label>
      <label style={{display: "block"}}>
        <input
          type='checkbox'
          value={"orange"}
          checked={selectedFruits.includes("orange")}
          onChange={changeSelectHandler}
        />
        orange
      </label>
      <hr />
      <p>radio: {radio}</p>
      {/* name이 같은 것끼리는 한개만 체크됨 */}
      <input
        type='radio'
        name='gender'
        // defaultChecked
        value='male'
        onChange={radioChangeHandler}
        checked={radio === "male"}
      />
      male
      <br />
      <input
        type='radio'
        name='gender'
        value='female'
        onChange={radioChangeHandler}
        checked={radio === "female"}
      />{" "}
      female
    </>
    /*
      초기값 설정법
      1. 초기값에 빈 문자열, input에 defaultChecked
      2. 초기값에 값 넣고, checked 추가, ...
    */
  );
}
