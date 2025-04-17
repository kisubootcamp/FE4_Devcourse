export default function User({ name, age }: { name: string; age: number }) {
  return (
    <>
      <div>User Component</div>
      <h1>Name: {name}</h1>
      <h2>Age: {age}</h2>
    </>
  );
}
