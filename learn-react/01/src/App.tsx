export default function App() {
  // JSX
  // JavaScript + XML - 확장 문법
  // 0. HTML과 굉장히 유사하다.

  // 1~6 제외하고는 HTML과 유사
  // 1. 단 하나의 루트 요소만 반환해야 한다.
  // 2. 모든 태그는 닫아줘야 한다.
  // 3. 태그의 속성은 카멜 케이스로 사용해야 한다.
  // 4. 표현식은 중괄호 안에서 사용할 수 있다.
  // 5. 인라인 스타일은 객체로.
  // 6. 주석 {/* 주석 */}
  const uname = 'sy';
  return (
    <div>
      {/* 주석 */}
      <div style={{ color: 'green', textDecoration: 'underline' }}>
        Hello, {uname}
      </div>
      <div>Hello, {20 + 5}</div>
      <input type="text" maxLength={3} />
    </div>
  );
}
