export default function Header(){
  const style123 = {
    color:"red",
    textDecoration:"underline"
  };

  return (
      <header>
          <h1 style={{color:"red", textDecoration:"underline"}}>내 웹사이트</h1>
          <h1 style={style123}>내 웹사이트</h1>
      </header>
  );
}