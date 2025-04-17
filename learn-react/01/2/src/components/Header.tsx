export default function Header() {
  const style = { color: "red", textDecoration: "underline" };
  return (
    <header>
      <h1 style={{ backgroundColor: "red", color: "#fff" }}>내 웹사이트</h1>
      <p style={style}>내용</p>
    </header>
  );
}
