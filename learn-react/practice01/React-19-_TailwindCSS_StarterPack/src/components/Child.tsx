export default function Child(props: {
  message: string;
  num: number;
  strArr: string[];
  obj: { name: string; age: number };
  isLoggedIn: boolean;
  onClick: () => void;
  name?: string;
  value: string | number | unknown[];
  style: React.CSSProperties;
  Header: React.ReactElement;
  Content: React.ReactElement;
  Footer: React.ReactElement;
}) {
  return (
    <>
      <h1>{props.message}</h1>
      <h1>{props.num}</h1>
      <h1>{props.strArr}</h1>
      <h1>{JSON.stringify(props.obj)}</h1>
      <h1>{props.isLoggedIn ? '로그인됨' : '로그인안됨'}</h1>
      <button onClick={props.onClick}>클릭</button>
      <h1>{props.name}</h1>
      <h1>{JSON.stringify(props.value)}</h1>
      <h1 style={props.style}>Child Component</h1>
      {props.Header}
      {props.Content}
      {props.Footer}
    </>
  );
}
