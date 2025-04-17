export default function HeaderEx() {
  const style = {color: "red", textDecoration: "underline"};
  return (
    <>
      <header>
        <h1 style={{color: "red", textDecoration: "underline"}}>내 웹사이트</h1>
        <h1 style={style}>내 웹사이트</h1>
        {/* 둘이 같은거임 */}
      </header>
    </>
  );
}
