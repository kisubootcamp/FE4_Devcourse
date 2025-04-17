export default function Child({
  message,
  num,
  fruit,
  user,
  isLoggedIn,
  onClick,
  name = '홍길동',
  value,
  style,
  Header,
  Content,
  Footer,
}: Child) {
  return (
    <>
      <h1>{message}</h1>
      <h1>{num}</h1>
      <h1>{fruit}</h1>
      <h1>
        {user.name} / {user.age}
      </h1>
      <h1>{isLoggedIn ? '로그인됨' : '로그인안됨'}</h1>
      <button onClick={onClick}>클릭</button>
      <h1>{name}</h1>
      <h1>{value}</h1>
      <h1 style={style}>안녕하세요</h1>
      {Header}
      {Content}
      {Footer}
    </>
  );
}
