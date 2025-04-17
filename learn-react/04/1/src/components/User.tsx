// export default function User({
//   message: string;
//   count: number;
//   isVisible: boolean;
//   tags: string[];
//   user: { id: number; name: string };
//   myFunction : (message:string) => void;
//   greet: (e:React.MouseEvent<HTMLButtonElement>) => void;
// }) {
// 타입별칭과 컴포넌트 이름이 중복되도 상관없다.
// 인터페이스 써도 되고, 타입별칭 써도 됨

export default function User({
  message,
  count,
  isVisible,
  tags,
  user,
  myFunction,
  greet,
}: {
  message: string;
  count: number;
  isVisible: boolean;
  tags: string[];
  user: { id: number; name: string };
  myFunction: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    message: string
  ) => void;
  greet: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}) {
  //   const myFun = () => {
  //     alert("click");
  //   };
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  return (
    <>
      <h1>{message}</h1>
      <h1>{count}</h1>
      <h1>{isVisible.toString()}</h1>
      <h1>{JSON.stringify(tags, null, 2)}</h1>
      <h1>{JSON.stringify(user, null, 2)}</h1>

      <button onClick={(e) => myFunction(e, "hello")}>Pick Me</button>

      <button onClick={(e) => greet(e)}>Pick Me2</button>
      <input type="text" onChange={(e) => changeHandler(e)} />
      <input type="text" onChange={changeHandler} />
    </>
  );
}
