export default function Child({
  message,
  number,
  arr,
  info,
  isLoggedIn,
  onClick,
  name = "홍길동",
  value,
  style,
  header,
  content,
  footer,
}: ChildProps) {
  return (
    <>
      <h1>1. {message}</h1>
      <h1>2. {number}</h1>
      <h1>3. {JSON.stringify(arr, null, 2)}</h1>
      <h1>4. {JSON.stringify(info, null, 2)}</h1>
      <h1>5. {isLoggedIn ? "로그인됨" : "로그인안됨"}</h1>
      <button onClick={onClick}>6. 콘솔에 메시지 출력</button>
      <h1>7. {name}</h1>
      <h1>
        8. {typeof value === "object" ? JSON.stringify(value, null, 2) : value}
      </h1>
      <h1 style={style}>9. 스타일 전달하기</h1>
      {header}
      {content}
      {footer}
    </>
  );
}
