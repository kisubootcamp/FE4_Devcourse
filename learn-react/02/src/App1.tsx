import React from "react";

export default function App () {
  // JSX => JavaScript XML (확장문법)
  // JSX는 HTML과 유사하다. (시멘틱 태그, 폼 태그)
  // 1. 하나의 루트 요소를 반환해야 한다. <> -> 빈태그
  //      import React <React.Fragment>를 <> 빈태그로 대체가능
  // 2. 모든 태그는 닫아줘야한다.
  // 3. 모든 태그의 속성은 카멜케이스로 작성해야 한다.
  //    예약된 속성명은 쓸 수 없음, class -> className
  // 4. 표현식을 출력 할 수 있다. -> 중괄호
  // 5. 인라인스타일은 객체로 표현해야 함
  // 6. wntjr {/* 주석 */}
  const name = "HI";
  const style = {
    color: "blue",
    fontSize: "30px"
  }
  return (
    <React.Fragment>
      {/* 주석 */}
      <h1>10 + 20 = {10 + 20}</h1>
      <h1>{name}</h1>
      <h1 style={{ color: "red", fontSize: "20px"}}>App Component</h1>
      <h1 style={style}>App Component</h1>
      <h1 className="">App Component</h1>
      <br />
      <input type="text" readOnly/>
    </React.Fragment>
  );
}