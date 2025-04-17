export default function App() {
  // JSX = Javascript + XML(확장 문법)
  return (
    <div>
      {/* 주석 작성 */}
      <div style={{ color: "red", textDecoration: "underline" }}>Hello, World!</div>
      <div>Hello, World! {10 + 2}</div>
      <input type="text" maxLength={3}></input>
    </div>
  );
}
