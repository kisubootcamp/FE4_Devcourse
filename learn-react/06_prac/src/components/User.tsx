type Obj = {
  name: string;
  age: number;
};

type ChildProps = {
  message: string;
  num: number;
  arr: string[];
  obj: Obj;
  isLoggedIn: boolean;
  onClick: () => void;
  name?: string;
  value: string | number | undefined[];
  style: React.CSSProperties;
  Header: unknown;
  Content: unknown;
  Footer: unknown;
};

export default function User({
  message,
  num,
  arr,
  obj,
  isLoggedIn,
  onClick,
  name = "홍길동",
  value,
  style,
  Header,
  Content,
  Footer,
}: ChildProps) {
  return (
    <>
      <h1>User Component</h1>
      <p>{message}</p>
      <p>{num}</p>
      <p>{arr}</p>
      <p>
        name : {obj.name} , age : {obj.age}
      </p>
      <p>Login : {isLoggedIn.toString()}</p>
      <button onClick={onClick}>누를까?</button>
      <p>{name}</p>
      <p>{JSON.stringify(value, null, 2)}</p>
      <p style={style}>Child Componenet</p>
      {Header}
      {Content}
      {Footer}
    </>
  );
}
