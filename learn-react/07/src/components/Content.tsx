export default function Content({
  stringProps,
  numberProps,
  arrayProps,
  objectProps,
  isLoggedIn,
  funcProps,
  nameProps = "홍길동",
  value,
  styleProps,
}: Props) {
  return (
    <div className="text-white">
      <div>{stringProps}</div>
      <div>{numberProps}</div>
      <div>{arrayProps}</div>
      <div>{JSON.stringify(objectProps, null, 2)}</div>
      <div>{isLoggedIn ? "로그인" : "로그아웃"}</div>
      <button onClick={(e) => funcProps(e, "Hello, World!")}>클릭</button>
      <div>{nameProps}</div>
      <div style={styleProps}>{value}</div>
    </div>
  );
}
