export default function Child({
  message,
  score,
  fruits,
  user,
  isLoggedIn,
  clickEvent,
  name = "홍길동",
  value,
  styles,
  Header,
  Content,
  Footer,
}: {
  message: string;
  score: number;
  fruits: string[];
  user: { name: string; age: number };
  isLoggedIn: boolean;
  clickEvent: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  name?: string;
  value: string | number | unknown[];
  styles: React.CSSProperties;
  Header: React.ReactElement;
  Content: React.ReactElement;
  Footer: React.ReactNode;
}) {
  return (
    <>
      <p>1. {message}</p>
      <p>2. {score}</p>
      <p>3. {JSON.stringify(fruits, null, 2)}</p>
      <p>4. {JSON.stringify(user, null, 2)}</p>
      <p>5. {isLoggedIn ? "로그인 됨" : "로그인 안됨"}</p>
      <button
        onClick={(e) => {
          clickEvent(e);
        }}
      >
        6. 클릭
      </button>
      <p>7. {name}</p>
      <p>8. {JSON.stringify(value, null, 2)}</p>
      <p style={styles}>9.</p>
      <div>
        10.
        {Header}
        {Content}
        {Footer}
      </div>
    </>
  );
}
