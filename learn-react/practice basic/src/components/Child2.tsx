export default function Child2({ name = "홍길동" }: { name?: string }) {
  return (
    <>
      <h1>{name}</h1>
    </>
  );
}
