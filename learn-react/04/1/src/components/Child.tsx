export default function Child({
  greet,
  num,
  fruits,
  person,
  isLoggedIn,
  onClick,
  name = "홍길동",
  value,
  style,
  header,
  content,
  footer,
}: {
  greet: string;
  num: number;
  fruits: string[];
  person: { name: string; age: number };
  isLoggedIn: boolean;
  onClick: () => void;
  name?: string;
  value: string | number | unknown[];
  style: React.CSSProperties;
  header: React.ReactNode;
  content: React.ReactElement;
  footer: unknown;
}) {
  return (
    <>
      <h1>{greet}</h1>
      <h1>{num}</h1>
      {/* <h1>{JSON.stringify(fruits, null, 2)}</h1> */}
      <h1>{fruits}</h1>
      {/* <h1>{JSON.stringify(person, null, 2)}</h1> */}
      <h1>{person.name}</h1>
      <h1>{person.age}</h1>
      <h1>{isLoggedIn ? "로그인 됨" : "로그인 안됨"}</h1>
      <button onClick={onClick}>문제6</button>
      <h1>{name}</h1>
      <h1>{JSON.stringify(value, null, 2)}</h1>
      <h1 style={style}>문제9</h1>
      {header}
      {content}
      {footer}
    </>
  );
}
