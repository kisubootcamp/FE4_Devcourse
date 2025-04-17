export default function Header() {
  const h1Style = {
    color: "aqua",
    textDecoration: "underline",
  };
  
  return (
    <>
      <header>
        <h1 style={h1Style}>내 웹사이트</h1>
      </header>
    </>
  );
}
