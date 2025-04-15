export default function App() {
  // JSX -> Javascript XML (확장 문법)
  // JSX는 HTML과 유사하다. (시멘틱 태그, 폼 태그 등)
  // 1. 하나의 루트 요소를 반환해야 한다. <> -> 빈태그
  // 2. 모든 태그는 닫아줘야한다.
  // 3. 모든 태그의 속성은 카멜케이스로 작성해야 한다.
  // HMR -> 페이지 새로고침 없이 해당 부분만 리로드. Hot Module Replacement
  // 3.1 예약된 속성명은 쓸 수 없음. ex) class -> className
  // 4. 표현식을 출력할 수 있다. -> 중괄호
  // 5. 인라인 스타일은 객체로 표현해야 함
  // 6. 주석

  const name = "sucoding";
  const style = {
    color: "red",
    fontSize: "50px",
  };
  return (
    <>
      {/* 주석 */}
      <h1 style={{ color: "red", fontSize: "50px" }}> 10 + 20 = {10 + 20}</h1>
      <h1 className="title" style={style}>
        {name}
      </h1>
      <br />
      <label htmlFor="uname">userid</label>
      <input id="uname" type="text" readOnly />
    </>
  );
}
