export default function Header() {
  // CSS 모듈
  const style = { color: "blue", textDecoration: "underline" };
  return (
    <>
      <header>
        {/* 인라인스타일: 객체형태로 속성을 적고, -가 들어가는 부분은 카멜케이스로 작성한다. */}
        <h1 style={{ color: "red" }}>내 웹사이트</h1>
        <h1 style={style}>Hello World! </h1>
      </header>
    </>
  );
}
