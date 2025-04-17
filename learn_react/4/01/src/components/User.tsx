export default function User({
  message,
  isVisible,
  count,
  tags,
  user,
  myFunction,
}: Props) {
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  return (
    <>
      <div>${message}</div>
      <div>${count}</div>
      <div>${isVisible.toString()}</div>
      <div>${JSON.stringify(tags, null, 2)}</div>
      객체 자체를 사용해 버리면 jsx 전체가 날라가버린다. ex. props.user
      <div>${JSON.stringify(user, null, 2)}</div>
      {/* <button onClick={myFunction}>버튼</button> */}
      매개변수가 필요하면 아래 매개변수가 필요하지 않으면 위<br></br>
      <button onClick={() => myFunction}>버튼</button>
      <br></br>
      {/* <input type="text" onChange={changeHandler} /> */}
      {/* 타입추론해서 이벤트 객체 넘기고 타입 찾아내기 */}
      <input type="text" onChange={(e) => changeHandler(e)} />
    </>
  );
}
