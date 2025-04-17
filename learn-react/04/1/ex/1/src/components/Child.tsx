export default function Child({
  str,
  num,
  arr,
  obj,
  isLoggedIn,
  handleClick,
  name = "홍길동",
  value,
  style,
  Header,
  Content,
  Footer,
}: ChildProps) {
  return (
    <>
      <h1>{str}</h1>
      <h1>{num}</h1>
      <h1>{JSON.stringify(arr, null, 2)}</h1>
      <h1>{JSON.stringify(obj, null, 2)}</h1>
      <h1>{isLoggedIn ? "로그인됨" : "로그인안됨"}</h1>
      <button onClick={handleClick}>클릭</button>
      <h1>{name}</h1>
      <h1>
        {typeof value === "string" || typeof value === "number"
          ? value
          : JSON.stringify(value, null, 2)}
      </h1>
      <h1 style={style}>스타일입니다</h1>
      <Header />
      <Content />
      <Footer />
    </>
  );
}
