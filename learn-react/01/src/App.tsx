export default function App() {
  // JSX
  // Javascript + XML - 확장 문법
  // 0. JSX는 HTML과 굉장히 유사하다.
  // 1. 하나의 루트 요소만 반환해야 합니다.
  // 2. 모든 태그는 닫아줘야한다.
  // 3. 태그의 속성은 카멜 케이스로 사용해야 한다.
  // 4. 표현식은 중괄호 안에서 사용할 수 있다.
  // 5. 인라인 스타일은 객체로.
  // 6. 주석
  const uname = "sojeong";
  return (
    <>
      {/* 주석 */}
      <h1 style={{ color: "red", textDecoration: "underline" }}>
        Hello, World!{uname}
      </h1>
      <h1>Hello, World!{10 + 20}</h1>
      <h1>
        <input type="text" maxLength={3}></input>
      </h1>
    </>
  );
}
