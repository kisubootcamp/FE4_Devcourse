export default function Child({
  greet,
  num,
  fruits,
  alice,
  isLoggedIn,
  onClick,
  name1 = "홍길동",
  name2 = "홍길동",
  value,
  style,
  header,
  content,
  footer,
}: {
  greet: string;
  num: number;
  fruits: string[];
  alice: {name: string; age: number};
  isLoggedIn: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  name1?: string;
  name2?: string;
  // value: string | number | string[] | number[];
  value: string | number | unknown[];
  // style: { fontSize: string; color: string };
  style: React.CSSProperties; // CSS 속성이기만 하면, 타입 통과됨
  // 컴포넌트를 전달했을 때의 타입 -> ReactElement, ReactNode
  // header: unknown;
  // content: unknown;
  // footer: unknown;
  header: React.ReactNode;
  content: React.ReactNode;
  footer: React.ReactNode;
}) {
  return (
    <>
      <h1>{greet}</h1>
      <h1>{num}</h1>
      <h1>{JSON.stringify(fruits, null, 2)}</h1>
      <h1>{JSON.stringify(alice, null, 2)}</h1>
      <h1>{alice.name}</h1>
      <h1>{alice.age}</h1>
      <h1>{isLoggedIn ? "로그인됨" : "로그인 안됨"}</h1>
      <h1>{isLoggedIn.toString()}</h1>
      {/* <button onClick={(e) => onClick(e)}>click</button> */}
      <button onClick={onClick}>click</button>
      <h1>전달되지 않을 경우: {name1}</h1>
      <h1>전달될 경우: {name2}</h1>
      {/* <h1>
        {typeof value === "string" || typeof value === "number"
          ? value
          : JSON.stringify(value, null, 2)}
      </h1> */}
      <h1>{JSON.stringify(value, null, 2)}</h1>
      <h1 style={style}>스타일 적용</h1>
      {header}
      {content}
      {footer}
    </>
  );
}
