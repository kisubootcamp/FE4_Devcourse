// props 객체
export default function User({ name, age }: { name: string; age: number }) {
  console.log({ name, age });
  return (
    <h1>
      User: {name} / {age}
    </h1>
  );
}
