export default function App() {
  //JSX
  // Javascript + XML => 확장문법(오로지 리액을만을 위한 확장문법)
  // 0. JSX는 HTML 문법과 거의 유사

  // 1. 하나의 루트 요소만 반환해야 함 ----------------------***CHECKNOTE시험
  // -> 반드시 return으로 반환되는 요소에는 단 한개의 root 요소만 가지고 있어야함
  // 2. 모든 태그는 닫아줘야함
  // 3. 모든 태그의 속성은 카멜 케이스로 사용해야함
  // 4. 표현식은 중괄호 안에서 사용할 수 있다. (마치 템플릿처럼 사용할 수 있다)
  //5. 인라인 스타일로 작성 (객체)
  //6. 주석처리 {/* */}
  const uname = "kisu";
  return (
    <div>
      {/* 주석처리도 중괄호 */}
      <div>Hello, World!{uname}</div>
      <div>Hello, World!{10 + 20}</div>
      <div style={{ color: "red", textDecoration: "underline" }}>
        Hello, World!
      </div>
      <br />
      <input type="text" maxLength={3 + 9} />
    </div>
  );
}

// React 는 virtual 돔에서 디핑이라는 과정을 통해 변경된 사항만 Real DOM 에 반영
// 바벨 - 트랜스컴파일러
// 웹팩 - 번들러
// vite - 빌드 도구 (esbuild & swc - 트랜스 컴파일러, rollup - 번들러)
// SWC : Speed Web Compiler

// npm create vite@latest .
