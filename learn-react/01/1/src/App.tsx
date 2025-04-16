export default function App() {
  // JSX
  // javascript + XML - 확장 문법
  // 0. JSX는 HTML과 상당히 유사함.

  // 1. 하나의 루트 요소만 반환해야 합니다.
  // 2. 모든 태그는 닫아주어야 함. -> ex) <br />
  // 3. 태그의 속성은 카멜케이스로 사용해야 한다.
  // 4. 표현식은 중괄호 안에서 사용할 수 있다. -> 템플릿 문자열처럼 사용할 수 있다
  // 5. 인라인 스타일은 객체로 작성
  return (
    <>
      {/* 주석입니다. */}
      <h1>Hello World!</h1>
      <h1 style={{ color: "red", textDecoration: "underline" }}>Hello World!</h1>
      <div>Hello World! {10 + 20}</div>
      <input type="text" maxLength={3 + 9} />
    </>
  );
}
