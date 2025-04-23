export default function App() {
  // JSX
  // JavaScript + XML - 확장 문법
  // JSX는 HTML과 굉장히 유사하다.

  // !!! 하나의 루트 요소만 반환해야 한다. !!!
  // 모든 태그는 닫아줘야 한다. 빈 태그(br, link 등)도 닫아줘야한다.
  // 태그의 속성은 카멜 케이스로 사용해야 한다.
  // 표현식은 중괄호 안에서 사용할 수 있다.
  // 인라인 스타일은 객체로 작성
  const uname = "seolwolwha";
  return (
    <main>
      {/* JSX 주석은 중괄호를 이용한다. */}
      <div style={{ color: "blue", textDecoration: "underline" }}>
        Hello World! {uname}
      </div>
      <div>Hello World!</div>
      <br />
      <input type="text" maxLength={1 + 4} />
    </main>
  );
}
// Rollup
// SWC
// eslint

// CRA - 더 편리하고 강력한 프레임워크가 등장하였고, 2022년도 4월 이후로 업데이트가 없어 이제는 사용되지 않는다. / Vite
