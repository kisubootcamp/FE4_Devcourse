export default function Child(props: {
  message: string;
  num: number;
  arr: string[];
  obj1: { name?: string; age: number };
  isLoggedIn: boolean;
  myFun: () => void;
  value: { value: string | number | unknown[] };
  style: { fontSize: string; color: string };
}) {
  const name = props.obj1.name || "홍길동";
  return (
    <>
      <h1 style={props.style}>{props.message}</h1>
      <h1>{props.num}</h1>
      <h1>{props.arr.join(", ")}</h1>
      <h1>{name}</h1>
      <h1>{props.obj1.age}</h1>
      <h1>{props.isLoggedIn ? "로그인됨" : "로그인 안됨"} </h1>
      <h1>{JSON.stringify(props.value)}</h1>
      <button onClick={props.myFun}>버튼</button>
    </>
  );
}
