export default function Heder() {
  // 인라인 스타일
  // 객체 형식으로 작성해서 추가해도 되고, 중괄호 안에 작성해도 된다.
  const style = {
    color: "red",
    textDecoration: "underline",
  };
  return (
    <header>
      <h1 style={style}>내 웹사이트</h1>
    </header>
  );
}
