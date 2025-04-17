export default function App() {
  // JSX
  // JavaScript + XML -> 확장 문법
  // 0. JSX는 HTML과 굉장히 유사함

  // 1. 하나의 루트 요소만 반환해야 한다.  📌 시험
  // 2. 모든 태그는 닫아줘야 한다.
  // 3. 태그의 속성은 카멜 케이스로 사용해야 한다.
  // 4. 표현식은 중괄호 안에서 사용할 수 있다.
  //   - 중괄호만 입력한다면, javascript 템플릿 문자열처럼 중괄호 안에 javascript 코드 쓸 수 있다.
  // 5. 인라인 스타일을 객체로.
  // 6. 주석
  const uname = "minji";
  return (
    <div>
      {" "}
      {/* 하나의 루트 요소 */}
      <div>Hello, World! {uname}</div> {/* 템플릿 문자열처럼 중괄호로 표현식 사용 */}
      <div style={{color: "red", textDecoration: "underline"}}>Hello, World!</div>
      <input type='text' maxLength={3 + 8} />
      {/* maxLength: 카멜 케이스, {3}: 표현식은 중괄호 사용 */}
      <br /> {/* 빈 태그도 반드시 닫아줘야 함 ! */}
    </div>
  );
}
