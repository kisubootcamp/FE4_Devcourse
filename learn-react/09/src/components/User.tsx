export default function User({
  id,
  name,
  age,
}: {
  id: number;
  name: string;
  age: number;
}) {
  return (
    <>
      <div>User Component</div>
      <div>
        <p>ID: {id}</p>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
      </div>
    </>
  );
}
