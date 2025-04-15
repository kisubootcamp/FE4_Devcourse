export default function App() {
  // JSX
  // Javascript + XML - 확장 문법
  // JSX는 HTML과 유사

  // 1. 하나의 루트 요소만 반환
  // 2. 모든 태그는 닫아줘야 함
  // 3. 태그의 속성은 카멜 케이스로 사용
  // 4. 표현식은 중괄호 안에서 사용
  // 5. 인라인 스타일은 객체로
  // 6. 주석 

  return (
    <>
      <h1>Hello, World!</h1>
      <input type="text" maxLength={3} />
    </>
  );
}
