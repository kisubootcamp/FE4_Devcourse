export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <>
      <button>{children}</button>
    </>
  );
}

//children 쓸 때 React:ReactNode 를 사용
