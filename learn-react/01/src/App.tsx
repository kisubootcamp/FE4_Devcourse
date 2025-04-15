export default function App() {
  // JSX
  // JavaScript + XML -> 리액트 전용으로 탄생한 확장 문법 (Vue는 HTML과 100% 똑같음)
  // 0. JSX는 HTML과 굉장히 유사함.

  // 1. 하나의 루트 요소만 반환해야 함 !!! (중요)
  // 2. 모든 태그는 닫아줘야 함. (br태그도 <br>가 아니라 <br/>로 써야 함)
  // 3. 모든 태그의 속성은 카멜 케이스로 사용해야 함.
  // 4. 표현식은 중괄호 안에서 사용할 수 있음.
  // 5. 인라인 스타일은 객체로.
  // 6. 주석
  const uname = "Yubin";
  return (
    <>
      {/* 주석 방식 */}
      <h1 style={{ color: "pink", textDecoration: "underline" }}>
        App Component {uname}
      </h1>
      <div>App Component {10 + 20}</div>
      {/* <input type="text" maxlength="3" /> */}
      <input type="text" maxLength={3} />
      <br />
    </>
  );
}
